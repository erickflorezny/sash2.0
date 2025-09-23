import { storage } from "../../server/storage";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const session = await storage.getChatSession(id);
      if (!session) {
        res.status(404).json({ error: "Chat session not found" });
        return;
      }
      res.status(200).json(session);
    } catch (error) {
      res.status(500).json({ error: "Failed to get chat session" });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}