// Simple chat session getter for Vercel
export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      // For now, return a simple response
      // In production, you'd want to connect to your database
      const session = {
        id: id,
        sessionData: {},
        createdAt: new Date().toISOString()
      };
      res.status(200).json(session);
    } catch (error) {
      res.status(500).json({ error: "Failed to get chat session" });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}