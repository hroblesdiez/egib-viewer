export default async (request, context) => {
  const url    = new URL(request.url);
  const target = url.searchParams.get('url');

  if (!target) {
    return new Response('Missing url parameter', { status: 400 });
  }

  let parsed;
  try { parsed = new URL(target); }
  catch { return new Response('Invalid URL', { status: 400 }); }

  if (!parsed.hostname.endsWith('.pl') && !parsed.hostname.includes('geoportal.gov')) {
    return new Response('Host not allowed: ' + parsed.hostname, { status: 403 });
  }

  try {
    const upstream = await fetch(target, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; EGIB-Viewer/1.0)',
        'Accept': '*/*'
      }
    });

    const contentType = upstream.headers.get('Content-Type') || 'application/xml';

    // Stream the response directly — no size limit
    return new Response(upstream.body, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': contentType,
        'X-Upstream-Status': String(upstream.status)
      }
    });
  } catch (err) {
    const reason = 'Blad polaczenia z serwerem WFS: ' + err.message;
    return new Response(
      '<?xml version="1.0"?><ExceptionReport><Exception><ExceptionText>'
      + reason +
      '</ExceptionText></Exception></ExceptionReport>',
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/xml'
        }
      }
    );
  }
};

export const config = { path: '/wfs-proxy' };
