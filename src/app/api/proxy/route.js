export async function GET(request) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams)
  const type = searchParams.get('type');
  const countryId = searchParams.get('country_id');
  const token = process.env.NEXT_PUBLIC_API_KEY;
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  

  let apiUrl;

  if (type === 'services') {
    apiUrl = `${baseURL}/applications?token=${token}`;
  } else if (type === 'countries') {
    apiUrl = `${baseURL}/countries?token=${token}`;
  } else if (type === 'prices') {
    apiUrl = `${baseURL}/get-prices?token=${token}&country_id=${countryId}`;
  }

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          error: `API request failed with status ${response.status}`,
        }),
        {
          status: response.status,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
