import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // WordPress GraphQL endpoint - change this to match your actual WordPress site
      const wpEndpoint = process.env.WORDPRESS_API_URL || 'http://utica.supply/resashgraph';

      console.log(`🔄 Proxying WordPress GraphQL request to: ${wpEndpoint}`);

      // Build query string for GET request
      const queryString = new URLSearchParams({ query: req.body.query }).toString();
      const fullUrl = `${wpEndpoint}?${queryString}`;

      console.log(`Full URL: ${fullUrl}`);

      // Forward the request to WordPress using GET
      const wpResponse = await fetch(fullUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      // Get the response data
      const data = await wpResponse.json();

      console.log(`✅ WordPress GraphQL response received, status: ${wpResponse.status}`);

      // Send it back to the client
      res.status(wpResponse.status).json(data);
    } catch (error) {
      console.error('❌ WordPress proxy error:', error);

      // If the error is related to connection (offline WordPress)
      res.status(500).json({
        errors: [{
          message: 'Error connecting to WordPress',
          extensions: {
            code: 'SERVER_ERROR',
            exception: {
              message: error instanceof Error ? error.message : 'Unknown error'
            }
          }
        }],
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}