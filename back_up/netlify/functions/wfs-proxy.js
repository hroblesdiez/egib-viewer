// Netlify serverless function: /.netlify/functions/wfs-proxy
// Receives ?url=<encoded WFS URL>, fetches it server-side (no CORS restriction),
// and streams the response back to the browser.

exports.handler = async (event) => {
  const targetUrl = event.queryStringParameters && event.queryStringParameters.url;

  if (!targetUrl) {
    return { statusCode: 400, body: 'Missing url parameter' };
  }

  // Basic safety: only allow requests to known WFS hostnames
  let parsed;
  try {
    parsed = new URL(targetUrl);
  } catch {
    return { statusCode: 400, body: 'Invalid URL' };
  }

  const allowedHosts = [
    'geoportal2.pl', 'geoportal.gov.pl', 'webewid.pl', 'epodgik.pl',
    'wrosip.pl', 'pwz.pl', 'geo.krakow.pl', 'nowosadecki.pl',
    'podgik', 'powiat', 'egib', 'ggp', 'iip', 'ows', 'wfs', 'wms',
    'gmina', 'starostwo', 'geodezja', 'ikerg', 'imapa', 'geoportal',
    'zgkikm.wroc.pl', 'sip.lodz.pl', 'umt.tarnow.pl', 'legnica.eu',
    'jeleniagora.pl', 'powiatrawski.pl', 'powiatsuski', 'powiatelk',
    'powiatolsztynski', 'powiatbartoszyce', 'powiat-braniewo',
    'wms.epodgik.pl', 'wms.geodezja', 'wms.powiat', 'wms.nowosadecki'
  ];

  const hostname = parsed.hostname;
  const isAllowed = allowedHosts.some(h => hostname.includes(h));
  if (!isAllowed) {
    return { statusCode: 403, body: 'Host not in allowlist: ' + hostname };
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        // Some WFS servers require a recognisable User-Agent
        'User-Agent': 'Mozilla/5.0 (compatible; EGIB-Viewer/1.0)',
        'Accept': '*/*'
      },
      // Node 18 fetch has no built-in timeout; use AbortSignal when available
      ...(typeof AbortSignal !== 'undefined' && AbortSignal.timeout
        ? { signal: AbortSignal.timeout(25000) }
        : {})
    });

    const body = await response.text();
    const contentType = response.headers.get('Content-Type') || 'application/xml';

    return {
      statusCode: response.status,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': contentType
      },
      body
    };
  } catch (err) {
    return {
      statusCode: 502,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
