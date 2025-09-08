import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const chatSessions = pgTable("chat_sessions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id"),
  sessionData: jsonb("session_data"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const chatMessages = pgTable("chat_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: varchar("session_id").references(() => chatSessions.id),
  role: text("role").notNull(), // 'user' | 'assistant'
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertChatSessionSchema = createInsertSchema(chatSessions).pick({
  userId: true,
  sessionData: true,
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).pick({
  sessionId: true,
  role: true,
  content: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ChatSession = typeof chatSessions.$inferSelect;
export type InsertChatSession = z.infer<typeof insertChatSessionSchema>;
export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;

// WordPress Content Types
export interface WordPressPage {
  id: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
  status: string;
  date: string;
  modified: string;
  excerpt: {
    rendered: string;
  };
  featuredImage?: {
    node?: {
      sourceUrl: string;
      altText: string;
    };
  };
  seo?: {
    title: string;
    metaDesc: string;
    opengraphTitle: string;
    opengraphDescription: string;
  };
}

export interface WordPressPost {
  id: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
  status: string;
  date: string;
  modified: string;
  excerpt: {
    rendered: string;
  };
  categories: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
  tags: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
  author: {
    node: {
      name: string;
      slug: string;
    };
  };
  featuredImage?: {
    node?: {
      sourceUrl: string;
      altText: string;
    };
  };
  seo?: {
    title: string;
    metaDesc: string;
    opengraphTitle: string;
    opengraphDescription: string;
  };
}

export interface WordPressMenuItem {
  id: string;
  label: string;
  url: string;
  target: string;
  title: string;
  cssClasses: string[];
  childItems?: {
    nodes: WordPressMenuItem[];
  };
}

// GraphQL Response Types
export interface WordPressPageResponse {
  page: WordPressPage | null;
}

export interface WordPressPostResponse {
  post: WordPressPost | null;
}

export interface WordPressPagesResponse {
  pages: {
    nodes: WordPressPage[];
  };
}

export interface WordPressPostsResponse {
  posts: {
    nodes: WordPressPost[];
  };
}

export interface WordPressMenuResponse {
  menuItems: {
    nodes: WordPressMenuItem[];
  };
}
