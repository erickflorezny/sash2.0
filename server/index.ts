import express, { type Request, Response, NextFunction } from "express";
import cors from "cors";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
log('Starting server...');

// Enable CORS for development
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176', 'http://localhost:5177', 'http://localhost:5178', 'http://localhost:5179', 'http://localhost:5180', 'http://localhost:5181', 'http://localhost:5182'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
log('Middleware configured...');

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Setup routes synchronously
registerRoutes(app);

// Setup static file serving for production (Render)
if (app.get("env") === "production") {
  serveStatic(app);
}

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const stack = app.get('env') === 'development' ? err.stack : undefined;

  log(`Error: ${message}\n${stack || ''}`);
  res.status(status).json({ message, stack });
});

// Setup for production (Vercel/serverless)
// serveStatic(app); // Static files handled by Vercel routing

// Export for Vercel/serverless (not needed for Render)
// export default app;

// For local development and production, start the server
(async () => {
  const { createServer } = await import("http");
  const server = createServer(app);

  if (app.get("env") === "development") {
    await setupVite(app, server);
  }

  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen(port, () => {
    log(`serving on port ${port}`);
  });
})();
