function findGeometryElement(featureEl) {
  const names = ['geometry','geometria','msgeometry','the_geom','geom','shape','geom2180'];
  for (const child of featureEl.children) {
    if (names.includes(child.localName.toLowerCase())) return child;
  }
  for (const child of featureEl.children) {
    if (child.getElementsByTagNameNS('http://www.opengis.net/gml','Polygon').length > 0 ||
        child.getElementsByTagNameNS('http://www.opengis.net/gml','Surface').length > 0 ||
        child.getElementsByTagNameNS('http://www.opengis.net/gml/3.2','Polygon').length > 0 ||
        child.getElementsByTagNameNS('http://www.opengis.net/gml/3.2','Surface').length > 0) {
      return child;
    }
  }
  return null;
}

function parseRing(ringEl) {
  const posListEl = ringEl.getElementsByTagNameNS('http://www.opengis.net/gml','posList')[0]
                 || ringEl.getElementsByTagNameNS('http://www.opengis.net/gml/3.2','posList')[0]
                 || ringEl.getElementsByTagName('posList')[0]
                 || null;
  const coords = [];

  if (posListEl) {
    const nums = posListEl.textContent.trim().split(' ').filter(s => s.length > 0).map(Number);
    if (nums.length < 2) return coords;
    const latFirst = nums[0] > nums[1];
    for (let i = 0; i < nums.length - 1; i += 2) {
      coords.push(latFirst ? [nums[i+1], nums[i]] : [nums[i], nums[i+1]]);
    }
  } else {
    const posEls = ringEl.getElementsByTagNameNS('http://www.opengis.net/gml','pos');
    const posArr = posEls.length > 0 ? Array.from(posEls) : Array.from(ringEl.getElementsByTagName('pos'));
    posArr.forEach(posEl => {
      const p = posEl.textContent.trim().split(' ').filter(s => s.length > 0).map(Number);
      if (p.length >= 2) coords.push(p[0] > p[1] ? [p[1],p[0]] : [p[0],p[1]]);
    });
  }
  return coords;
}

function parseGMLGeometry(geomEl) {
  const GML_NS = ['http://www.opengis.net/gml', 'http://www.opengis.net/gml/3.2'];

  function byTag(root, localName) {
    for (const ns of GML_NS) {
      const els = root.getElementsByTagNameNS(ns, localName);
      if (els.length > 0) return Array.from(els);
    }
    return Array.from(root.getElementsByTagName(localName));
  }

  if (byTag(geomEl,'Polygon').length === 0 && byTag(geomEl,'Surface').length === 0) return null;

  const polygonEls = byTag(geomEl, 'Polygon');
  if (polygonEls.length === 0) return null;

  const coordArrays = [];
  polygonEls.forEach(poly => {
    const ringArrays = [];

    const extRingEl = poly.getElementsByTagNameNS('http://www.opengis.net/gml','exterior')[0]
                   || poly.getElementsByTagNameNS('http://www.opengis.net/gml/3.2','exterior')[0]
                   || poly.getElementsByTagNameNS('http://www.opengis.net/gml','outerBoundaryIs')[0]
                   || poly.querySelector('exterior, outerBoundaryIs');
    const extRing = extRingEl
      ? (extRingEl.getElementsByTagNameNS('http://www.opengis.net/gml','LinearRing')[0]
      || extRingEl.getElementsByTagNameNS('http://www.opengis.net/gml/3.2','LinearRing')[0]
      || extRingEl.querySelector('LinearRing'))
      : null;
    if (extRing) ringArrays.push(parseRing(extRing));

    const intContainers = [
      ...poly.getElementsByTagNameNS('http://www.opengis.net/gml','interior'),
      ...poly.getElementsByTagNameNS('http://www.opengis.net/gml/3.2','interior'),
      ...poly.getElementsByTagNameNS('http://www.opengis.net/gml','innerBoundaryIs')
    ];
    intContainers.forEach(intEl => {
      const ring = intEl.getElementsByTagNameNS('http://www.opengis.net/gml','LinearRing')[0]
                || intEl.getElementsByTagNameNS('http://www.opengis.net/gml/3.2','LinearRing')[0]
                || intEl.querySelector('LinearRing');
      if (ring) ringArrays.push(parseRing(ring));
    });
    if (ringArrays.length > 0) coordArrays.push(ringArrays);
  });

  if (coordArrays.length === 0) return null;
  if (coordArrays.length === 1) return { type: 'Polygon', coordinates: coordArrays[0] };
  return { type: 'MultiPolygon', coordinates: coordArrays };
}

function gmlToGeoJSON(gmlText, powiatName) {
  const parser = new DOMParser();
  const doc    = parser.parseFromString(gmlText, 'application/xml');

  const exception = doc.querySelector('ExceptionText, Exception');
  if (exception) throw new Error(exception.textContent.trim().substring(0, 200));

  const features = [];
  const members  = doc.querySelectorAll('member, featureMember, featureMembers > *');

  members.forEach(member => {
    const featureEl = member.firstElementChild || member;
    const props = {};

    featureEl.childNodes.forEach(node => {
      if (node.nodeType !== 1) return;
      const ln = node.localName.toUpperCase();
      if (['GEOMETRY','GEOMETRIA','THE_GEOM','GEOM','MSGEOMETRY','SHAPE','BOUNDEDBY'].includes(ln)) return;
      props[ln] = node.textContent.trim();
    });
    props._powiat = powiatName;

    const geomEl = findGeometryElement(featureEl);
    if (!geomEl) return;

    let geometry = null;
    try { geometry = parseGMLGeometry(geomEl); } catch (e) { return; }
    if (!geometry) return;

    features.push({ type: 'Feature', geometry, properties: props });
  });

  return { type: 'FeatureCollection', features };
}
