const json = (body, status) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const countryId = searchParams.get('country_id');

  // Server-only variables are preferred; NEXT_PUBLIC_* kept for existing deployments.
  const token = process.env.API_KEY ?? process.env.NEXT_PUBLIC_API_KEY;
  const baseURL = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL;

  if (!token || !baseURL) {
    return json({ error: 'Service is temporarily unavailable.' }, 503);
  }

  const query = new URLSearchParams({ token });
  let path;

  if (type === 'services') {
    path = 'applications';
  } else if (type === 'countries') {
    path = 'countries';
  } else if (type === 'prices') {
    if (!countryId || !/^[\w-]+$/.test(countryId)) {
      return json({ error: 'Invalid country_id.' }, 400);
    }
    path = 'get-prices';
    query.set('country_id', countryId);
  } else {
    return json({ error: 'Invalid type.' }, 400);
  }

  try {
    const response = await fetch(`${baseURL}/${path}?${query}`);

    if (!response.ok) {
      return json(
        { error: `API request failed with status ${response.status}` },
        response.status
      );
    }

    return json(await response.json(), 200);
  } catch {
    return json({ error: 'Service is temporarily unavailable.' }, 502);
  }
}
