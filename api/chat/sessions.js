// Simple chat session handler for Vercel
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // For now, return a simple response
      // In production, you'd want to connect to your database
      const session = {
        id: Date.now().toString(),
        sessionData: req.body,
        createdAt: new Date().toISOString()
      };
      res.status(200).json(session);
    } catch (error) {
      res.status(500).json({ error: "Failed to create chat session" });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}