// ============================================================
// EGIB POLSKA - GIS Parcel Browser  v8
// Fetches parcels from county WFS services, filters and displays
// them on a Leaflet map over a Google satellite basemap.
// ============================================================
console.log('[EGIB] app.js version 10 loaded');

// --- proj4 definition for Poland's national CRS EPSG:2180 ---
proj4.defs('EPSG:2180',
  '+proj=tmerc +lat_0=0 +lon_0=19 +k=0.9993 +x_0=500000 +y_0=-5300000 ' +
  '+ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
);

// --- Map setup: centre on Poland at zoom 6 ---
const POLAND_CENTER = [52.1, 19.4];
const POLAND_ZOOM   = 6;
const map = L.map('map', { zoomControl: true }).setView(POLAND_CENTER, POLAND_ZOOM);

// OpenStreetMap basemap — reliable tile source, shown by default
const osmLayer = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  { attribution: '&copy; OpenStreetMap contributors', maxZoom: 19 }
).addTo(map);

// Google satellite — optional overlay, toggled via checkbox
const satelliteLayer = L.tileLayer(
  'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
  { attribution: '&copy; Google Satellite', maxZoom: 21 }
);

// Parcel layer group — populated after each search
const parcelLayer = L.geoJSON(null, {
  style: {
    color: '#e07b10',
    weight: 1.8,
    fillColor: '#fff3e0',
    fillOpacity: 0.45
  },
  onEachFeature: (feature, layer) => {
    const p = feature.properties || {};
    // Build popup with the most useful cadastral attributes
    const rows = [
      ['Identyfikator', p.IDENTYFIKATOR || p.identyfikator || '-'],
      ['Grupa rejestrowa', p.GRUPA_REJESTROWA || p.GRUPAR || '-'],
      ['Klasa uzytku', p.KLASOUZYTKI_EGIB || p.KLASOUZYTKI || p.OFU || '-'],
      ['Powierzchnia', p._area_m2 !== undefined ? p._area_m2.toFixed(1) + ' m²' : '-'],
      ['Pole ewid.', p.POLE_EWIDENCYJNE || p.POLE_EWID || '-'],
      ['Powiat', p._powiat || '-']
    ];
    const html = '<table style="font-size:0.82rem;border-collapse:collapse">' +
      rows.map(([k, v]) =>
        `<tr><td style="padding:2px 8px 2px 0;color:#5f7a8a;white-space:nowrap">${k}</td><td><b>${v}</b></td></tr>`
      ).join('') + '</table>';
    layer.bindPopup(html);
  }
}).addTo(map);

// --- State ---
let allGeoJSON = null;           // raw merged GeoJSON from all fetched counties
let filteredGeoJSON = null;      // result after client-side attribute filter

const selectedPowiats = new Set();
const selectedGrupy   = new Set();
const selectedKlasy   = new Set();

// Known GRUPA_REJESTROWA values from EGIB standard
const GRUPY_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

// Known KLASOUZYTKI_EGIB values (land-use codes from EGIB standard)
const KLASY_OPTIONS = [
  'R', 'Ł', 'Ps', 'B', 'Bi', 'Ba', 'Bp', 'Bz', 'dr', 'K', 'N',
  'W', 'S', 'Lz', 'Ls', 'L', 'Tk', 'Tp', 'Ti', 'M', 'E', 'T', 'ws', 'wp', 'wz', 'wt'
];

// ============================================================
// Multi-select dropdown component (reusable)
// ============================================================
function buildMultiSelect(listId, searchId, tagsId, options, selectedSet, onChangeCallback) {
  const listEl   = document.getElementById(listId);
  const searchEl = document.getElementById(searchId);
  const tagsEl   = document.getElementById(tagsId);

  function render(filter) {
    const q = (filter || '').toLowerCase();
    listEl.innerHTML = '';
    const visible = options.filter(o => o.toLowerCase().includes(q));
    if (visible.length === 0) {
      listEl.innerHTML = '<div class="no-options">Brak wynikow</div>';
      return;
    }
    visible.forEach(opt => {
      const div = document.createElement('div');
      div.className = 'option-item' + (selectedSet.has(opt) ? ' selected' : '');
      div.innerHTML = `<input type="checkbox" ${selectedSet.has(opt) ? 'checked' : ''} /><span>${opt}</span>`;
      div.addEventListener('click', (e) => {
        if (selectedSet.has(opt)) {
          selectedSet.delete(opt);
          div.classList.remove('selected');
          div.querySelector('input').checked = false;
        } else {
          selectedSet.add(opt);
          div.classList.add('selected');
          div.querySelector('input').checked = true;
        }
        renderTags();
        if (onChangeCallback) onChangeCallback();
      });
      listEl.appendChild(div);
    });
  }

  function renderTags() {
    tagsEl.innerHTML = '';
    selectedSet.forEach(val => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.innerHTML = `${val}<button title="Usun" onclick="event.stopPropagation()">x</button>`;
      tag.querySelector('button').addEventListener('click', () => {
        selectedSet.delete(val);
        render(searchEl.value);
        renderTags();
        if (onChangeCallback) onChangeCallback();
      });
      tagsEl.appendChild(tag);
    });
  }

  searchEl.addEventListener('input', () => render(searchEl.value));
  render('');

  return { render, renderTags };
}

// Populate county dropdown from POWIATY array sorted alphabetically
const powiatOptions = [...new Set(POWIATY.map(p => p.powiat))].sort((a, b) => a.localeCompare(b, 'pl'));
const grupaCtrl  = buildMultiSelect('list-grupa',  'search-grupa',  'tags-grupa',  GRUPY_OPTIONS, selectedGrupy);
const klasaCtrl  = buildMultiSelect('list-klasa',  'search-klasa',  'tags-klasa',  KLASY_OPTIONS, selectedKlasy);
const powiatCtrl = buildMultiSelect('list-powiat', 'search-powiat', 'tags-powiat', powiatOptions, selectedPowiats);

// ============================================================
// Map message overlay helpers
// ============================================================
function showMapMsg(title, body, type) {
  const el = document.getElementById('map-msg');
  el.className = type || 'info';
  document.getElementById('map-msg-title').textContent = title;
  document.getElementById('map-msg-body').textContent  = body || '';
  el.style.display = 'block';
}
function hideMapMsg() {
  document.getElementById('map-msg').style.display = 'none';
}
function showSpinner() { document.getElementById('spinner').style.display = 'block'; }
function hideSpinner() { document.getElementById('spinner').style.display = 'none'; }

// ============================================================
// DEBUG helper — call egibDebug('Olkuski') from the browser console
// to inspect the raw WFS response and trace the full parse pipeline.
// ============================================================
window.egibDebug = async function(powiatName) {
  const config = POWIATY.find(p => p.powiat === powiatName);
  if (!config) { console.error('Powiat not found:', powiatName); return; }

  console.group('%c[EGIB DEBUG] ' + powiatName, 'color:#1a6fc4;font-weight:bold');
  console.log('Config:', config);

  const params = new URLSearchParams({
    SERVICE: 'WFS', REQUEST: 'GetFeature',
    VERSION: config.version,
    TYPENAMES: config.layer_name, TYPENAME: config.layer_name,
    OUTPUTFORMAT: config.format,
    COUNT: '10', MAXFEATURES: '10'   // only 10 features for debug
  });
  const url = config.wfs_url + params.toString();
  console.log('WFS URL:', url);

  const proxyUrl = '/.netlify/functions/wfs-proxy?url=' + encodeURIComponent(url);
  console.log('Proxy URL:', proxyUrl);

  let text;
  try {
    const resp = await fetch(proxyUrl, { signal: AbortSignal.timeout(30000) });
    console.log('HTTP status:', resp.status, resp.statusText);
    text = await resp.text();
    console.log('Response length (chars):', text.length);
    console.log('Response first 2000 chars:\n', text.substring(0, 2000));
  } catch (e) {
    console.error('Fetch failed:', e);
    console.groupEnd();
    return;
  }

  if (config.format.includes('json')) {
    try {
      const parsed = JSON.parse(text);
      console.log('Parsed as JSON. Feature count:', parsed.features?.length);
      if (parsed.features?.length > 0) {
        console.log('First feature properties:', parsed.features[0].properties);
        console.log('First feature geometry type:', parsed.features[0].geometry?.type);
      }
    } catch(e) { console.error('JSON parse failed:', e); }
    console.groupEnd();
    return;
  }

  // GML path — trace each step
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'application/xml');
  console.log('XML root element:', doc.documentElement.nodeName);
  console.log('srsName on root:', doc.documentElement.getAttribute('srsName'));

  const exception = doc.querySelector('ExceptionText, Exception');
  if (exception) { console.error('Server exception:', exception.textContent); console.groupEnd(); return; }

  const members = doc.querySelectorAll('member, featureMember, featureMembers > *');
  console.log('Member elements found:', members.length);

  if (members.length === 0) {
    const childTags = [...doc.documentElement.children].map(c => c.nodeName);
    console.warn('No members found. Root children:', childTags);
    console.groupEnd();
    return;
  }

  const firstMember = members[0];
  const featureEl = firstMember.firstElementChild || firstMember;
  console.log('First feature element name:', featureEl.nodeName);
  const childNames = [...featureEl.children].map(c => c.localName);
  console.log('Child elements of first feature:', childNames);

  const props = {};
  featureEl.childNodes.forEach(node => {
    if (node.nodeType === 1) props[node.localName] = node.textContent.trim().substring(0, 80);
  });
  console.log('Properties of first feature:', props);

  const geomEl = findGeometryElement(featureEl);
  console.log('Geometry element found:', geomEl ? geomEl.nodeName : 'NONE');

  if (geomEl) {
    const polyEl = geomEl.querySelector('Polygon, MultiPolygon, Surface, MultiSurface, polygonMember, surfaceMember');
    console.log('Polygon element inside geometry:', polyEl ? polyEl.nodeName : 'NONE');
    const posListEl = geomEl.querySelector('posList');
    console.log('posList element found:', posListEl ? 'YES, length=' + posListEl.textContent.trim().split(/\s+/).length : 'NO');
    const srsEl = geomEl.querySelector('[srsName]');
    console.log('srsName on geometry:', srsEl ? srsEl.getAttribute('srsName') : 'none');
    console.log('Geometry XML snippet:', geomEl.outerHTML.substring(0, 500));
  }

  console.groupEnd();
};

// ============================================================
// WFS fetch — builds the GetFeature URL and fetches GML/JSON
// ============================================================
async function fetchWFS(config) {
  const params = new URLSearchParams({
    SERVICE: 'WFS',
    REQUEST: 'GetFeature',
    VERSION: config.version,
    TYPENAMES: config.layer_name,
    TYPENAME: config.layer_name,
    OUTPUTFORMAT: config.format,
    // Ask the server to return coordinates in WGS84 — eliminates all client-side reprojection
    SRSNAME: 'EPSG:4326'
  });

  const url = config.wfs_url + params.toString();

  // Route through our own Netlify serverless proxy to avoid CORS restrictions.
  const proxyUrl = '/.netlify/functions/wfs-proxy?url=' + encodeURIComponent(url);

  const resp = await fetch(proxyUrl, { signal: AbortSignal.timeout(30000) });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);

  const text = await resp.text();
  console.log(`[WFS] ${config.powiat} — ${text.length} chars, format: ${config.format}`);
  console.log(`[WFS] ${config.powiat} — first 500 chars:`, text.substring(0, 500));

  // --- Try to parse as GeoJSON first ---
  if (config.format.includes('json')) {
    try {
      const parsed = JSON.parse(text);
      console.log(`[WFS] ${config.powiat} — JSON features:`, parsed.features?.length);
      if (parsed.features?.length > 0)
        console.log(`[WFS] ${config.powiat} — sample props:`, parsed.features[0].properties);
      return parsed;
    } catch (e) {
      throw new Error('Nieprawidlowy format JSON z serwera WFS');
    }
  }

  // --- Otherwise parse as GML/XML and convert manually ---
  const result = gmlToGeoJSON(text, config.powiat);
  console.log(`[WFS] ${config.powiat} — GML parsed features:`, result.features.length);
  return result;
}


// ============================================================
// Minimal GML -> GeoJSON converter
// Handles GML 3.x FeatureCollection as returned by EGIB WFS servers.
// Coordinates in WFS responses may be EPSG:4326 or EPSG:2180 depending on server.
// We detect the srsName and reproject if needed.
// ============================================================
function gmlToGeoJSON(gmlText, powiatName) {
  const parser = new DOMParser();
  const doc    = parser.parseFromString(gmlText, 'application/xml');

  // Check for server-side exception
  const exception = doc.querySelector('ExceptionText, Exception');
  if (exception) throw new Error(exception.textContent.trim().substring(0, 200));

  const ns = {
    wfs: 'http://www.opengis.net/wfs/2.0',
    gml: 'http://www.opengis.net/gml/3.2',
    gml3: 'http://www.opengis.net/gml'
  };

  // --- CRS detection: three independent checks, any one triggers reprojection ---

  // Check 1: srsName on the root FeatureCollection element
  const fcEl = doc.documentElement;
  const rootSrs = fcEl.getAttribute('srsName') || '';
  let needsReproject = rootSrs.includes('2180') || rootSrs.includes('ETRF');

  // Check 2: srsName on any element anywhere in the document
  if (!needsReproject) {
    const anySrs = doc.querySelector('[srsName]');
    if (anySrs) {
      const s = anySrs.getAttribute('srsName');
      if (s.includes('2180') || s.includes('ETRF')) needsReproject = true;
    }
  }

  // Check 3: sample the first posList coordinate values.
  // EPSG:2180 easting ~150k-900k, northing ~5.4M-6.7M — never valid WGS84 degrees.
  // Use getElementsByTagNameNS to handle gml: namespace prefix.
  if (!needsReproject) {
    let firstPosList = null;
    for (const ns of ['http://www.opengis.net/gml', 'http://www.opengis.net/gml/3.2']) {
      const els = doc.getElementsByTagNameNS(ns, 'posList');
      if (els.length > 0) { firstPosList = els[0]; break; }
    }
    // Also try without namespace (some servers omit it)
    if (!firstPosList) firstPosList = doc.getElementsByTagName('posList')[0] || null;

    if (firstPosList) {
      const raw = firstPosList.textContent.trim().split(' ').slice(0, 4).map(Number);
      if (raw.length >= 2) {
        const a = raw[0], b = raw[1];
        const looksLike2180 = (a > 100000 && a < 1000000 && b > 4000000 && b < 7500000)
                           || (b > 100000 && b < 1000000 && a > 4000000 && a < 7500000);
        if (looksLike2180) {
          needsReproject = true;
          console.log('[GML] ' + powiatName + ' — auto-detected EPSG:2180 from coordinates (' + a + ', ' + b + ')');
        }
      }
    }
  }

  console.log('[GML] ' + powiatName + ' — needsReproject: ' + needsReproject);

  const features = [];
  let skippedNoGeomEl = 0, skippedParseErr = 0, skippedNullGeom = 0;

  // Each member element wraps one feature
  const members = doc.querySelectorAll('member, featureMember, featureMembers > *');
  console.log('[GML] ' + powiatName + ' — members: ' + members.length);

  members.forEach((member, idx) => {
    const featureEl = member.firstElementChild || member;
    const props = {};

    featureEl.childNodes.forEach(node => {
      if (node.nodeType !== 1) return;
      const localName = node.localName.toUpperCase();
      if (['GEOMETRY', 'GEOMETRIA', 'THE_GEOM', 'GEOM', 'MSGEOMETRY', 'SHAPE', 'BOUNDEDBY'].includes(localName)) return;
      props[node.localName.toUpperCase()] = node.textContent.trim();
    });
    props._powiat = powiatName;

    // querySelector fails on namespace-prefixed elements (ms:geometry etc.)
    // Use a namespace-safe helper instead.
    const geomEl = findGeometryElement(featureEl);

    if (!geomEl) {
      skippedNoGeomEl++;
      if (idx === 0) console.warn(`[GML] ${powiatName} — first feature: no geometry element. Children:`,
        [...featureEl.children].map(c => c.localName));
      return;
    }

    let geometry = null;
    try {
      geometry = parseGMLGeometry(geomEl, needsReproject);
    } catch (e) {
      skippedParseErr++;
      if (idx === 0) console.warn(`[GML] ${powiatName} — first feature parse error:`, e.message);
      return;
    }
    if (!geometry) {
      skippedNullGeom++;
      if (idx === 0) console.warn(`[GML] ${powiatName} — first feature geometry null. geomEl:`,
        geomEl.outerHTML.substring(0, 400));
      return;
    }

    features.push({ type: 'Feature', geometry, properties: props });
  });

  console.log(`[GML] ${powiatName} — ok: ${features.length}, no-geom: ${skippedNoGeomEl}, parse-err: ${skippedParseErr}, null-geom: ${skippedNullGeom}`);
  return { type: 'FeatureCollection', features };
}

// Find the first element that looks like a geometry container.
// Uses localName comparison so namespace prefixes (ms:geometry, ewns:geometria etc.) are ignored.
function findGeometryElement(featureEl) {
  const names = ['geometry', 'geometria', 'msgeometry', 'the_geom', 'geom', 'shape', 'geom2180'];
  for (const child of featureEl.children) {
    if (names.includes(child.localName.toLowerCase())) return child;
  }
  // Fallback: return the first child that contains a GML Polygon/Surface
  for (const child of featureEl.children) {
    if (child.getElementsByTagNameNS('http://www.opengis.net/gml', 'Polygon').length > 0 ||
        child.getElementsByTagNameNS('http://www.opengis.net/gml', 'Surface').length > 0 ||
        child.getElementsByTagNameNS('http://www.opengis.net/gml/3.2', 'Polygon').length > 0 ||
        child.getElementsByTagNameNS('http://www.opengis.net/gml/3.2', 'Surface').length > 0) {
      return child;
    }
  }
  return null;
}

// Parse GML polygon/multipolygon geometry and return GeoJSON geometry.
// Uses getElementsByTagNameNS so namespace prefixes never break the lookup.
function parseGMLGeometry(geomEl, needsReproject) {
  const GML_NS   = ['http://www.opengis.net/gml', 'http://www.opengis.net/gml/3.2'];

  // Helper: find elements by local name across both GML namespaces
  function byTag(root, localName) {
    for (const ns of GML_NS) {
      const els = root.getElementsByTagNameNS(ns, localName);
      if (els.length > 0) return Array.from(els);
    }
    // Last resort: no-namespace or unknown namespace
    const els = root.getElementsByTagName(localName);
    return Array.from(els);
  }

  function firstByTag(root, localName) {
    const arr = byTag(root, localName);
    return arr.length > 0 ? arr[0] : null;
  }

  // Check if there is any Polygon or Surface geometry
  const hasPolygon = byTag(geomEl, 'Polygon').length > 0;
  const hasSurface = byTag(geomEl, 'Surface').length > 0 || byTag(geomEl, 'PolygonPatch').length > 0;
  if (!hasPolygon && !hasSurface) return null;

  // Detect CRS — check srsName attribute anywhere in this geometry element
  const srsEl = geomEl.querySelector('[srsName]');
  const shouldReproject = needsReproject ||
    (srsEl && srsEl.getAttribute('srsName').includes('2180'));

  // Collect all Polygon elements (covers both Polygon and MultiPolygon cases)
  const polygonEls = byTag(geomEl, 'Polygon');
  if (polygonEls.length === 0) return null;

  const coordArrays = [];
  polygonEls.forEach(poly => {
    const ringArrays = [];
    // Exterior ring — try both GML namespace variants
    const extRingEl = poly.getElementsByTagNameNS('http://www.opengis.net/gml', 'exterior')[0]
                   || poly.getElementsByTagNameNS('http://www.opengis.net/gml/3.2', 'exterior')[0]
                   || poly.getElementsByTagNameNS('http://www.opengis.net/gml', 'outerBoundaryIs')[0]
                   || poly.querySelector('exterior, outerBoundaryIs');
    const extRing = extRingEl
      ? (extRingEl.getElementsByTagNameNS('http://www.opengis.net/gml', 'LinearRing')[0]
      || extRingEl.getElementsByTagNameNS('http://www.opengis.net/gml/3.2', 'LinearRing')[0]
      || extRingEl.querySelector('LinearRing'))
      : null;
    if (extRing) ringArrays.push(parseRing(extRing));

    // Interior rings (holes)
    const intContainers = [
      ...poly.getElementsByTagNameNS('http://www.opengis.net/gml', 'interior'),
      ...poly.getElementsByTagNameNS('http://www.opengis.net/gml/3.2', 'interior'),
      ...poly.getElementsByTagNameNS('http://www.opengis.net/gml', 'innerBoundaryIs')
    ];
    intContainers.forEach(intEl => {
      const ring = intEl.getElementsByTagNameNS('http://www.opengis.net/gml', 'LinearRing')[0]
                || intEl.getElementsByTagNameNS('http://www.opengis.net/gml/3.2', 'LinearRing')[0]
                || intEl.querySelector('LinearRing');
      if (ring) ringArrays.push(parseRing(ring));
    });
    if (ringArrays.length > 0) coordArrays.push(ringArrays);
  });

  if (coordArrays.length === 0) return null;
  if (coordArrays.length === 1) return { type: 'Polygon', coordinates: coordArrays[0] };
  return { type: 'MultiPolygon', coordinates: coordArrays };
}

function parseRing(ringEl) {
  let posListEl = ringEl.getElementsByTagNameNS('http://www.opengis.net/gml', 'posList')[0]
               || ringEl.getElementsByTagNameNS('http://www.opengis.net/gml/3.2', 'posList')[0]
               || ringEl.getElementsByTagName('posList')[0]
               || null;
  let coords = [];

  if (posListEl) {
    const nums = posListEl.textContent.trim().split(' ').filter(s => s.length > 0).map(Number);
    if (nums.length < 2) return coords;

    // We request SRSNAME=EPSG:4326 from the server.
    // GML axis order for EPSG:4326 is lat/lon (northing first).
    // Poland: lat ~49-55, lon ~14-24. If nums[0] > nums[1] it is lat first (larger value).
    // Store as GeoJSON [lon, lat].
    const latFirst = nums[0] > nums[1];

    for (let i = 0; i < nums.length - 1; i += 2) {
      const a = nums[i], b = nums[i + 1];
      coords.push(latFirst ? [b, a] : [a, b]);
    }
  } else {
    const posEls = ringEl.getElementsByTagNameNS('http://www.opengis.net/gml', 'pos');
    const posArr = posEls.length > 0 ? Array.from(posEls)
      : Array.from(ringEl.getElementsByTagName('pos'));
    posArr.forEach(posEl => {
      const p = posEl.textContent.trim().split(' ').filter(s => s.length > 0).map(Number);
      if (p.length >= 2) {
        const latFirst = p[0] > p[1];
        coords.push(latFirst ? [p[1], p[0]] : [p[0], p[1]]);
      }
    });
  }

  return coords;
}

// Reproject a point from EPSG:2180 to WGS84 [lon, lat]
function reproject2180to4326(x, y) {
  const [lon, lat] = proj4('EPSG:2180', 'EPSG:4326', [x, y]);
  return [lon, lat];
}

// ============================================================
// Compute area in m² from a GeoJSON polygon (WGS84 coords).
// This is an approximation using the spherical excess formula.
// For exact results we'd use EPSG:2180 coordinates, but since
// we already reprojected, we use a geodetic approximation.
// ============================================================
function computeAreaM2(geometry) {
  if (!geometry) return 0;
  const toRad = d => d * Math.PI / 180;
  const R = 6378137; // Earth radius in meters

  function ringArea(ring) {
    let area = 0;
    const n = ring.length;
    for (let i = 0; i < n; i++) {
      const [lon1, lat1] = ring[i];
      const [lon2, lat2] = ring[(i + 1) % n];
      area += toRad(lon2 - lon1) * (2 + Math.sin(toRad(lat1)) + Math.sin(toRad(lat2)));
    }
    return Math.abs(area * R * R / 2);
  }

  if (geometry.type === 'Polygon') {
    return ringArea(geometry.coordinates[0]);
  }
  if (geometry.type === 'MultiPolygon') {
    return geometry.coordinates.reduce((sum, poly) => sum + ringArea(poly[0]), 0);
  }
  return 0;
}

// ============================================================
// Main search: fetch from WFS for each selected county
// ============================================================
async function runSearch() {
  if (selectedPowiats.size === 0) {
    showMapMsg('Wybierz powiat', 'Zaznacz co najmniej jeden powiat z listy po lewej stronie.', 'warn');
    return;
  }

  hideMapMsg();
  showSpinner();
  document.getElementById('btn-search').disabled = true;
  document.getElementById('result-info').textContent = 'Pobieranie danych...';
  parcelLayer.clearLayers();
  allGeoJSON = null;
  filteredGeoJSON = null;
  document.getElementById('btn-dl').disabled = true;

  const configs = POWIATY.filter(p => selectedPowiats.has(p.powiat));
  const allFeatures = [];
  const errors = [];
  const noFilterSupport = [];

  for (const config of configs) {
    try {
      const geojson = await fetchWFS(config);
      if (!geojson || !geojson.features) {
        errors.push(config.powiat + ' — brak danych w odpowiedzi serwera');
        continue;
      }

      geojson.features.forEach(f => {
        if (!f.properties) f.properties = {};
        f.properties._powiat = config.powiat;

        // Compute geometry area since POLE_EWIDENCYJNE is often empty
        f.properties._area_m2 = computeAreaM2(f.geometry);

        // Detect if the feature has the filter fields at all
        const hasGrupa = 'GRUPA_REJESTROWA' in f.properties || 'GRUPAR' in f.properties;
        const hasKlasa = 'KLASOUZYTKI_EGIB' in f.properties || 'KLASOUZYTKI' in f.properties || 'OFU' in f.properties;
        f.properties._hasGrupa = hasGrupa;
        f.properties._hasKlasa = hasKlasa;

        allFeatures.push(f);
      });

      if (geojson.features.length > 0) {
        const sample = geojson.features[0].properties || {};
        const hasGrupa = 'GRUPA_REJESTROWA' in sample || 'GRUPAR' in sample;
        const hasKlasa = 'KLASOUZYTKI_EGIB' in sample || 'KLASOUZYTKI' in sample || 'OFU' in sample;
        if (!hasGrupa || !hasKlasa) noFilterSupport.push(config.powiat);
      }

    } catch (err) {
      errors.push(`${config.powiat} — ${err.message}`);
    }
  }

  hideSpinner();
  document.getElementById('btn-search').disabled = false;

  if (allFeatures.length === 0) {
    const msg = errors.length > 0
      ? 'Nie udalo sie pobrac danych z serwera(ow) WFS:\n' + errors.join('\n')
      : 'Brak dzialek dla wybranych powiatow.';
    showMapMsg('Brak wynikow', msg, errors.length > 0 ? 'error' : 'warn');
    document.getElementById('result-info').textContent = 'Brak wynikow';
    return;
  }

  allGeoJSON = { type: 'FeatureCollection', features: allFeatures };
  applyClientFilter();

  // Inform user about counties without filter support
  if (noFilterSupport.length > 0) {
    console.warn('Powiaty bez pol filtrujacych:', noFilterSupport);
    // Show a non-blocking note below the result count
    document.getElementById('result-info').textContent +=
      '  |  Uwaga: ' + noFilterSupport.join(', ') + ' – brak pol GRUPA/KLASA';
  }

  if (errors.length > 0) {
    console.error('Bledy WFS:', errors);
  }
}

// ============================================================
// Client-side attribute filter applied to allGeoJSON
// ============================================================
function applyClientFilter() {
  if (!allGeoJSON) return;

  const areaMin = parseFloat(document.getElementById('area-min').value) || null;
  const areaMax = parseFloat(document.getElementById('area-max').value) || null;

  const filtered = allGeoJSON.features.filter(f => {
    const p = f.properties;

    // --- GRUPA_REJESTROWA ---
    if (selectedGrupy.size > 0) {
      const val = p.GRUPA_REJESTROWA || p.GRUPAR || '';
      if (!p._hasGrupa) {
        // This county does not have the field – include it but note
      } else if (!selectedGrupy.has(String(val).trim())) return false;
    }

    // --- KLASOUZYTKI ---
    if (selectedKlasy.size > 0) {
      const val = p.KLASOUZYTKI_EGIB || p.KLASOUZYTKI || p.OFU || '';
      if (!p._hasKlasa) {
        // Same — include
      } else if (!selectedKlasy.has(String(val).trim())) return false;
    }

    // --- AREA ---
    const area = p._area_m2 || 0;
    if (areaMin !== null && area < areaMin) return false;
    if (areaMax !== null && area > areaMax) return false;

    return true;
  });

  filteredGeoJSON = { type: 'FeatureCollection', features: filtered };

  parcelLayer.clearLayers();
  if (filtered.length === 0) {
    showMapMsg(
      'Brak dzialek',
      'Zaden obiekt nie spelnia podanych kryteriow. Zmien filtry i sprobuj ponownie.',
      'info'
    );
    document.getElementById('result-info').textContent = '0 dzialek';
    document.getElementById('btn-dl').disabled = true;
    return;
  }

  hideMapMsg();
  parcelLayer.addData(filteredGeoJSON);

  // Compute bounding box from GeoJSON coordinates (server returns WGS84 via SRSNAME=EPSG:4326)
  let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;

  function walkCoords(c) {
    if (typeof c[0] === 'number') {
      if (c[0] < minLon) minLon = c[0];
      if (c[0] > maxLon) maxLon = c[0];
      if (c[1] < minLat) minLat = c[1];
      if (c[1] > maxLat) maxLat = c[1];
    } else {
      c.forEach(walkCoords);
    }
  }

  filteredGeoJSON.features.forEach(f => {
    if (f.geometry && f.geometry.coordinates) walkCoords(f.geometry.coordinates);
  });

  console.log('[ZOOM] lon:', minLon.toFixed(4), maxLon.toFixed(4),
              'lat:', minLat.toFixed(4), maxLat.toFixed(4));

  if (isFinite(minLon) && isFinite(minLat)) {
    map.fitBounds([[minLat, minLon], [maxLat, maxLon]], { padding: [40, 40], maxZoom: 17 });
  }

  document.getElementById('result-info').textContent = filtered.length.toLocaleString('pl') + ' dzialek';
  document.getElementById('btn-dl').disabled = false;
}

// ============================================================
// Download filtered results as GeoJSON in EPSG:2180
// (coordinates are in WGS84 after reprojection; if the user
//  wants EPSG:2180 we reproject back with proj4)
// ============================================================
function downloadGeoJSON() {
  if (!filteredGeoJSON || filteredGeoJSON.features.length === 0) return;

  // Reproject features back to EPSG:2180 for the download file
  const converted = {
    type: 'FeatureCollection',
    name: 'Dzialki_EGIB',
    crs: { type: 'name', properties: { name: 'urn:ogc:def:crs:EPSG::2180' } },
    features: filteredGeoJSON.features.map(f => ({
      ...f,
      geometry: reprojectGeometry(f.geometry)
    }))
  };

  const blob = new Blob([JSON.stringify(converted, null, 2)], { type: 'application/geo+json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'dzialki_egib.geojson';
  a.click();
  URL.revokeObjectURL(url);
}

// Convert all coordinates in a geometry from WGS84 back to EPSG:2180
function reprojectGeometry(geom) {
  if (!geom) return geom;
  function reprCoord(c) {
    return proj4('EPSG:4326', 'EPSG:2180', c);
  }
  function reprRing(ring) { return ring.map(reprCoord); }

  if (geom.type === 'Polygon') {
    return { ...geom, coordinates: geom.coordinates.map(reprRing) };
  }
  if (geom.type === 'MultiPolygon') {
    return { ...geom, coordinates: geom.coordinates.map(poly => poly.map(reprRing)) };
  }
  return geom;
}

// ============================================================
// Layer toggle (parcels and satellite basemap)
// ============================================================
function toggleLayer(name, visible) {
  if (name === 'parcels') {
    if (visible) map.addLayer(parcelLayer);
    else map.removeLayer(parcelLayer);
  }
  if (name === 'satellite') {
    if (visible) {
      map.addLayer(satelliteLayer);
      // Satellite goes under parcels
      satelliteLayer.setZIndex(1);
      parcelLayer.setZIndex && parcelLayer.setZIndex(2);
    } else {
      map.removeLayer(satelliteLayer);
    }
  }
}

// ============================================================
// Clear all filters and reset map
// ============================================================
function clearAll() {
  selectedPowiats.clear();
  selectedGrupy.clear();
  selectedKlasy.clear();

  ['search-powiat', 'search-grupa', 'search-klasa'].forEach(id => {
    document.getElementById(id).value = '';
  });
  powiatCtrl.render('');  powiatCtrl.renderTags();
  grupaCtrl.render('');   grupaCtrl.renderTags();
  klasaCtrl.render('');   klasaCtrl.renderTags();

  document.getElementById('area-min').value = '';
  document.getElementById('area-max').value = '';

  parcelLayer.clearLayers();
  allGeoJSON = null;
  filteredGeoJSON = null;
  hideMapMsg();
  document.getElementById('result-info').textContent = '';
  document.getElementById('btn-dl').disabled = true;
}
