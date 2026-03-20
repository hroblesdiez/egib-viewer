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

  const wfsUrl   = config.wfs_url + params.toString();
  const proxyUrl = '/wfs-proxy?url=' + encodeURIComponent(wfsUrl);

  let resp;
  try {
    resp = await fetch(proxyUrl, { signal: AbortSignal.timeout(60000) });
  } catch (err) {
    throw new Error('Brak odpowiedzi od serwera proxy (' + err.message + ')');
  }

  if (!resp.ok) throw new Error('Proxy HTTP ' + resp.status);

  const upstreamStatus = resp.headers.get('X-Upstream-Status');
  if (upstreamStatus && upstreamStatus !== '200') {
    throw new Error('Serwer WFS zwrocil HTTP ' + upstreamStatus);
  }

  const text = await resp.text();
  if (!text) throw new Error('Serwer WFS zwrocil pusta odpowiedz');

  if (config.format.includes('json')) {
    try { return JSON.parse(text); }
    catch (e) { throw new Error('Nieprawidlowy format JSON z serwera WFS'); }
  }
  return gmlToGeoJSON(text, config.powiat);
}
