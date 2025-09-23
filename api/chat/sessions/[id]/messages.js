import { storage } from "../../server/storage";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'POST') {
    try {
      const message = await storage.createChatMessage({
        sessionId: id,
        role: req.body.role,
        content: req.body.content
      });
      res.status(200).json(message);
    } catch (error) {
      res.status(500).json({ error: "Failed to create chat message" });
    }
  } else if (req.method === 'GET') {
    try {
      const messages = await storage.getChatMessages(id);
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to get chat messages" });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}