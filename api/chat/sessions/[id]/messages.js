// Simple chat messages handler for Vercel
export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'POST') {
    try {
      // For now, return a simple response
      // In production, you'd want to connect to your database
      const message = {
        id: Date.now().toString(),
        sessionId: id,
        role: req.body.role,
        content: req.body.content,
        createdAt: new Date().toISOString()
      };
      res.status(200).json(message);
    } catch (error) {
      res.status(500).json({ error: "Failed to create chat message" });
    }
  } else if (req.method === 'GET') {
    try {
      // For now, return empty array
      // In production, you'd want to connect to your database
      const messages = [];
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to get chat messages" });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}