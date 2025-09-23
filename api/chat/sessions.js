import { storage } from "../server/storage";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const session = await storage.createChatSession({
        sessionData: req.body
      });
      res.status(200).json(session);
    } catch (error) {
      res.status(500).json({ error: "Failed to create chat session" });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}