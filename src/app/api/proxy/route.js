export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type'); // URL parametresi ile API türünü belirle
  const token = process.env.NEXT_PUBLIC_API_KEY;
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  let apiUrl;

  if (type === 'services') {
    apiUrl = `${apiURL}/applications?token=${token}`;
  } else {
    apiUrl = `${apiURL}/control/countries?token=${token}`;
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
