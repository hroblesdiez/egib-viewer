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
  document.getElementById('btn-dl').disabled = true;

  let allGeoJSON = null;
  const allFeatures    = [];
  const errors         = [];
  const noFilterSupport = [];
  const configs = POWIATY.filter(p => selectedPowiats.has(p.powiat));

  for (const config of configs) {
    try {
      const geojson = await fetchWFS(config);
      if (!geojson || !geojson.features) {
        errors.push(config.powiat + ' — brak danych w odpowiedzi serwera');
        continue;
      }
      geojson.features.forEach(f => {
        if (!f.properties) f.properties = {};
        f.properties._powiat   = config.powiat;
        f.properties._area_m2  = computeAreaM2(f.geometry);
        f.properties._hasGrupa = 'GRUPA_REJESTROWA' in f.properties || 'GRUPAR' in f.properties;
        f.properties._hasKlasa = 'KLASOUZYTKI_EGIB' in f.properties || 'KLASOUZYTKI' in f.properties || 'OFU' in f.properties;
        allFeatures.push(f);
      });
      if (geojson.features.length > 0) {
        const s = geojson.features[0].properties || {};
        if (!('GRUPA_REJESTROWA' in s || 'GRUPAR' in s) ||
            !('KLASOUZYTKI_EGIB' in s || 'KLASOUZYTKI' in s || 'OFU' in s)) {
          noFilterSupport.push(config.powiat);
        }
      }
    } catch (err) {
      errors.push(config.powiat + ' — ' + err.message);
    }
  }

  hideSpinner();
  document.getElementById('btn-search').disabled = false;

  if (allFeatures.length === 0) {
    showMapMsg('Brak wynikow',
      errors.length > 0
        ? 'Nie udalo sie pobrac danych z serwera(ow) WFS:\n' + errors.join('\n')
        : 'Brak dzialek dla wybranych powiatow.',
      errors.length > 0 ? 'error' : 'warn');
    document.getElementById('result-info').textContent = 'Brak wynikow';
    return;
  }

  allGeoJSON = { type: 'FeatureCollection', features: allFeatures };
  applyClientFilter(allGeoJSON);

  if (noFilterSupport.length > 0) {
    document.getElementById('result-info').textContent +=
      '  |  Uwaga: ' + noFilterSupport.join(', ') + ' – brak pol GRUPA/KLASA';
  }
  if (errors.length > 0) console.error('Bledy WFS:', errors);

  window._allGeoJSON = allGeoJSON;
}

function applyClientFilter(allGeoJSON) {
  if (!allGeoJSON) allGeoJSON = window._allGeoJSON;
  if (!allGeoJSON) return;

  const areaMin = parseFloat(document.getElementById('area-min').value) || null;
  const areaMax = parseFloat(document.getElementById('area-max').value) || null;

  const filtered = allGeoJSON.features.filter(f => {
    const p = f.properties;

    if (selectedGrupy.size > 0 && p._hasGrupa) {
      const val = String(p.GRUPA_REJESTROWA || p.GRUPAR || '').trim();
      if (!selectedGrupy.has(val)) return false;
    }

    if (selectedKlasy.size > 0 && p._hasKlasa) {
      const raw   = String(p.KLASOUZYTKI_EGIB || p.KLASOUZYTKI || p.OFU || '').trim();
      const parts = raw.split(',').map(s => s.trim()).filter(s => s.length > 0);
      // A token matches if it equals a selected class exactly (e.g. "Ls")
      // OR starts with it followed by a Roman numeral or letter (e.g. "LsV", "LsIV").
      const matches = parts.some(part =>
        [...selectedKlasy].some(sel =>
          part === sel || part.toLowerCase().startsWith(sel.toLowerCase())
        )
      );
      if (!matches) return false;
    }

    const area = p._area_m2 || 0;
    if (areaMin !== null && area < areaMin) return false;
    if (areaMax !== null && area > areaMax) return false;
    return true;
  });

  const filteredGeoJSON = { type: 'FeatureCollection', features: filtered };
  window._filteredGeoJSON = filteredGeoJSON;

  parcelLayer.clearLayers();

  if (filtered.length === 0) {
    showMapMsg('Brak dzialek', 'Zaden obiekt nie spelnia podanych kryteriow. Zmien filtry i sprobuj ponownie.', 'info');
    document.getElementById('result-info').textContent = '0 dzialek';
    document.getElementById('btn-dl').disabled = true;
    return;
  }

  hideMapMsg();
  parcelLayer.addData(filteredGeoJSON);
  zoomToGeoJSON(filteredGeoJSON);

  document.getElementById('result-info').textContent = filtered.length.toLocaleString('pl') + ' dzialek';
  document.getElementById('btn-dl').disabled = false;
}

function downloadGeoJSON() {
  const filteredGeoJSON = window._filteredGeoJSON;
  if (!filteredGeoJSON || filteredGeoJSON.features.length === 0) return;

  const converted = {
    type: 'FeatureCollection',
    name: 'Dzialki_EGIB',
    crs: { type: 'name', properties: { name: 'urn:ogc:def:crs:EPSG::2180' } },
    features: filteredGeoJSON.features.map(f => ({ ...f, geometry: reprojectGeometry(f.geometry) }))
  };

  const blob = new Blob([JSON.stringify(converted, null, 2)], { type: 'application/geo+json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'dzialki_egib.geojson'; a.click();
  URL.revokeObjectURL(url);
}

function clearAll() {
  selectedPowiats.clear(); selectedGrupy.clear(); selectedKlasy.clear();
  ['search-powiat','search-grupa','search-klasa'].forEach(id => { document.getElementById(id).value = ''; });
  powiatCtrl.render(''); powiatCtrl.renderTags();
  grupaCtrl.render('');  grupaCtrl.renderTags();
  klasaCtrl.render('');  klasaCtrl.renderTags();
  document.getElementById('area-min').value = '';
  document.getElementById('area-max').value = '';
  parcelLayer.clearLayers();
  window._allGeoJSON      = null;
  window._filteredGeoJSON = null;
  hideMapMsg();
  document.getElementById('result-info').textContent = '';
  document.getElementById('btn-dl').disabled = true;
}
