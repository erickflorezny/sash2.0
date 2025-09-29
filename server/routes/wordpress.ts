import { Router } from 'express';
import fetch from 'node-fetch';

const router = Router();

// Handle preflight OPTIONS requests for CORS
router.options('/api/wordpress', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.status(200).end();
});

// WordPress proxy endpoint - helps avoid CORS issues during development
router.get('/api/wordpress', async (req, res) => {
  try {
    // WordPress GraphQL endpoint - change this to match your actual WordPress site
    const wpEndpoint = process.env.WORDPRESS_API_URL || 'http://utica.supply/graphql';
    
    console.log(`🔄 Proxying WordPress GraphQL request to: ${wpEndpoint}`);
    
    // Get query from URL parameter
    const query = req.query.query as string;
    const queryString = new URLSearchParams({ query }).toString();
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
        },
      }],
    });
  }
});

export default router;