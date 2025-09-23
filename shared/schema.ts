import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Database Tables
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
  role: text("role").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// WordPress Types
export interface WordPressRenderedContent {
  rendered: string;
  protected?: boolean;
  raw?: string;
}

interface WordPressBaseNode {
  id: string;
  date: string;
  modified: string;
  slug: string;
  status: string;
  link: string;
  title: WordPressRenderedContent;
  content: WordPressRenderedContent;
  excerpt?: WordPressRenderedContent;
  featuredImage?: {
    node?: {
      sourceUrl: string;
      altText?: string;
      mediaDetails?: {
        width: number;
        height: number;
      };
    };
  };
  seo?: {
    title: string;
    metaDesc: string;
    metaKeywords?: string;
    canonical?: string;
    opengraphTitle?: string;
    opengraphDescription?: string;
    opengraphImage?: {
      sourceUrl: string;
      altText?: string;
    };
  };
}

export interface WordPressPage extends WordPressBaseNode {
  type: 'page';
  template?: {
    templateName?: string;
  };
  parent?: {
    node?: {
      slug: string;
    };
  };
}

export interface WordPressPost extends WordPressBaseNode {
  type: 'post';
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
      avatar?: {
        url: string;
      };
    };
  };
}

export interface WordPressPageResponse {
  page: WordPressPage | null;
}

export interface WordPressPostResponse {
  post: WordPressPost | null;
}

export interface WordPressPagesResponse {
  pages: {
    nodes: WordPressPage[];
    pageInfo?: {
      hasNextPage: boolean;
      endCursor: string | null;
    };
  };
}

export interface WordPressPostsResponse {
  posts: {
    nodes: WordPressPost[];
    pageInfo?: {
      hasNextPage: boolean;
      endCursor: string | null;
    };
  };
}

export interface WordPressMenuResponse {
  menu: {
    menuItems: {
      nodes: Array<{
        id: string;
        label: string;
        path: string;
        parentId: string | null;
        target?: string;
        title?: string;
      }>;
    };
  };
}