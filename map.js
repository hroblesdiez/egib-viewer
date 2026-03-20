proj4.defs('EPSG:2180',
  '+proj=tmerc +lat_0=0 +lon_0=19 +k=0.9993 +x_0=500000 +y_0=-5300000 ' +
  '+ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
);

const map = L.map('map', { zoomControl: true }).setView([52.1, 19.4], 6);

const osmLayer = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', maxZoom: 19 }
).addTo(map);

const satelliteLayer = L.tileLayer(
  'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
  { attribution: '&copy; Google Satellite', maxZoom: 21 }
);

const parcelLayer = L.geoJSON(null, {
  style: {
    color: '#e8001c',
    weight: 1.5,
    fillColor: '#ff4d63',
    fillOpacity: 0.35
  },
  onEachFeature: (feature, layer) => {
    const p = feature.properties || {};
    const area = p._area_m2 !== undefined
      ? p._area_m2.toFixed(1) + ' m\u00b2'
      : (p.POLE_EWIDENCYJNE || '-');
    const rows = [
      ['ID dzia\u0142ki',    p.ID_DZIALKI || '-'],
      ['Numer dzia\u0142ki', p.NUMER_DZIALKI || '-'],
      ['Numer obr\u0119bu',  p.NUMER_OBREBU || '-'],
      ['Numer jednostki',    p.NUMER_JEDNOSTKI || '-'],
      ['Nazwa obr\u0119bu',  p.NAZWA_OBREBU || '-'],
      ['Klasa u\u017cytku',  p.KLASOUZYTKI_EGIB || p.KLASOUZYTKI || '-'],
      ['Grupa rejestrowa',   p.GRUPA_REJESTROWA || p.GRUPAR || '-'],
      ['Powierzchnia',       area]
    ];
    const html =
      '<div style="min-width:260px;max-width:340px">' +
      '<table style="width:100%;font-size:0.83rem;border-collapse:collapse">' +
      rows.map(([k, v]) =>
        '<tr>' +
        '<td style="padding:3px 10px 3px 0;color:#5f7a8a;white-space:nowrap;vertical-align:top">' + k + '</td>' +
        '<td style="padding:3px 0;font-weight:600;word-break:break-all">' + v + '</td>' +
        '</tr>'
      ).join('') +
      '</table></div>';
    layer.bindPopup(html, { maxWidth: 360 });
  }
}).addTo(map);

function zoomToGeoJSON(geojson) {
  let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
  function walk(c) {
    if (typeof c[0] === 'number') {
      if (c[0] < minLon) minLon = c[0]; if (c[0] > maxLon) maxLon = c[0];
      if (c[1] < minLat) minLat = c[1]; if (c[1] > maxLat) maxLat = c[1];
    } else { c.forEach(walk); }
  }
  geojson.features.forEach(f => { if (f.geometry && f.geometry.coordinates) walk(f.geometry.coordinates); });
  if (isFinite(minLon) && isFinite(minLat)) {
    map.fitBounds([[minLat, minLon], [maxLat, maxLon]], { padding: [40, 40], maxZoom: 17 });
  }
}

function toggleLayer(name, visible) {
  if (name === 'parcels')   { visible ? map.addLayer(parcelLayer)    : map.removeLayer(parcelLayer); }
  if (name === 'satellite') { visible ? map.addLayer(satelliteLayer) : map.removeLayer(satelliteLayer); }
}

function computeAreaM2(geometry) {
  if (!geometry) return 0;
  const toRad = d => d * Math.PI / 180;
  const R = 6378137;
  function ringArea(ring) {
    let area = 0;
    const n = ring.length;
    for (let i = 0; i < n; i++) {
      const [lon1, lat1] = ring[i];
      const [lon2, lat2] = ring[(i+1) % n];
      area += toRad(lon2 - lon1) * (2 + Math.sin(toRad(lat1)) + Math.sin(toRad(lat2)));
    }
    return Math.abs(area * R * R / 2);
  }
  if (geometry.type === 'Polygon')      return ringArea(geometry.coordinates[0]);
  if (geometry.type === 'MultiPolygon') return geometry.coordinates.reduce((s, p) => s + ringArea(p[0]), 0);
  return 0;
}

function reprojectGeometry(geom) {
  if (!geom) return geom;
  const reprRing = ring => ring.map(c => proj4('EPSG:4326', 'EPSG:2180', c));
  if (geom.type === 'Polygon')      return { ...geom, coordinates: geom.coordinates.map(reprRing) };
  if (geom.type === 'MultiPolygon') return { ...geom, coordinates: geom.coordinates.map(p => p.map(reprRing)) };
  return geom;
}
