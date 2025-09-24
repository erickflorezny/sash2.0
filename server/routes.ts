import type { Express } from "express";
import { storage } from "./storage";
import type { chatMessages } from "@shared/schema";
import wordpressRoutes from "./routes/wordpress";

export function registerRoutes(app: Express) {
  // WordPress proxy routes
  app.use(wordpressRoutes);
  
  // Chat session routes
  app.post("/api/chat/sessions", async (req, res) => {
    try {
      const session = await storage.createChatSession({
        sessionData: req.body
      });
      res.json(session);
    } catch (error) {
      res.status(500).json({ error: "Failed to create chat session" });
    }
  });

  app.get("/api/chat/sessions/:id", async (req, res) => {
    try {
      const session = await storage.getChatSession(req.params.id);
      if (!session) {
        res.status(404).json({ error: "Chat session not found" });
        return;
      }
      res.json(session);
    } catch (error) {
      res.status(500).json({ error: "Failed to get chat session" });
    }
  });

  app.post("/api/chat/sessions/:id/messages", async (req, res) => {
    try {
      const message = await storage.createChatMessage({
        sessionId: req.params.id,
        role: req.body.role,
        content: req.body.content
      });
      res.json(message);
    } catch (error) {
      res.status(500).json({ error: "Failed to create chat message" });
    }
  });

  app.get("/api/chat/sessions/:id/messages", async (req, res) => {
    try {
      const messages = await storage.getChatMessages(req.params.id);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to get chat messages" });
    }
  });
}
