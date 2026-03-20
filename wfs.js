async function fetchWFS(config) {
  const params = new URLSearchParams({
    SERVICE:      'WFS',
    REQUEST:      'GetFeature',
    VERSION:      config.version,
    TYPENAMES:    config.layer_name,
    TYPENAME:     config.layer_name,
    OUTPUTFORMAT: config.format,
    SRSNAME:      'EPSG:4326'
  });

  const wfsUrl = config.wfs_url + params.toString();

  // allorigins.win is an open-source CORS proxy with no payload size limit.
  // It wraps the response in JSON: { contents: "<raw response>", status: { http_code: 200 } }
  const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(wfsUrl);

  let resp;
  try {
    resp = await fetch(proxyUrl, { signal: AbortSignal.timeout(60000) });
  } catch (err) {
    throw new Error('Brak odpowiedzi od serwera proxy (' + err.message + ')');
  }

  if (!resp.ok) throw new Error('Proxy HTTP ' + resp.status);

  let wrapper;
  try {
    wrapper = await resp.json();
  } catch (e) {
    throw new Error('Nieprawidlowa odpowiedz od serwera proxy');
  }

  const httpCode = wrapper.status && wrapper.status.http_code;
  if (httpCode && httpCode !== 200) {
    throw new Error('Serwer WFS zwrocil HTTP ' + httpCode);
  }

  const text = wrapper.contents || '';
  if (!text) throw new Error('Serwer WFS zwrocil pusta odpowiedz');

  if (config.format.includes('json')) {
    try { return JSON.parse(text); }
    catch (e) { throw new Error('Nieprawidlowy format JSON z serwera WFS'); }
  }
  return gmlToGeoJSON(text, config.powiat);
}
