# Overview

This is a React TypeScript application for Elite Home Remodeling, a home improvement company specializing in windows, bathrooms, siding, and doors. The application features a modern flat design homepage with an integrated AI chat interface that allows customers to inquire about various remodeling services. The project uses a full-stack architecture with Express.js backend, React frontend, and PostgreSQL database integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Styling**: Hybrid approach combining Bootstrap 5 for layout/responsiveness and Tailwind CSS for custom styling
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks for local state, TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Middleware**: Custom logging middleware for request tracking and error handling
- **Development**: Hot reload support with Vite integration

## Database & ORM
- **Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: @neondatabase/serverless for optimized serverless connections

## Design System
- **Color Scheme**: Red (#dc3545) primary, black (#000000) secondary, white backgrounds
- **Design Language**: Flat design with minimal shadows, clean lines, no rounded corners
- **Typography**: Custom font loading from Google Fonts
- **Responsive**: Mobile-first Bootstrap grid system with custom breakpoints

## Component Architecture
- **Layout Components**: Floating navigation, hero section with cycling headings
- **Interactive Components**: AI chat interface with typing indicators and message history
- **Form Handling**: React Hook Form with Zod validation schemas
- **Animation**: CSS transitions for smooth user interactions

## Storage Layer
- **Development**: In-memory storage implementation for rapid prototyping
- **Production**: PostgreSQL with Drizzle ORM for persistent data storage
- **Session Management**: Planned PostgreSQL session store integration

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for form management
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and data fetching

## UI and Styling
- **Component Library**: shadcn/ui with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS and Bootstrap 5 for responsive design
- **Icons**: Bootstrap Icons and Lucide React for consistent iconography
- **Animations**: Embla Carousel for interactive components

## Backend and Database
- **Database**: Neon PostgreSQL serverless platform
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for runtime type checking and schema validation
- **Utilities**: date-fns for date manipulation, clsx for conditional CSS classes

## Development Tools
- **Build Tool**: Vite with React plugin and TypeScript support
- **Replit Integration**: Custom plugins for development environment integration
- **Code Quality**: TypeScript strict mode, ESM modules throughout

## WordPress Integration
- **CMS Integration**: Full WordPress GraphQL integration for dynamic content management
- **Content Types**: Support for WordPress pages and posts with automatic routing
- **SEO Optimization**: Automatic meta tag management and Open Graph support
- **Template System**: Dedicated page and post templates with responsive design
- **Dynamic Routing**: URL-based content loading (e.g., `/windows` loads WordPress page with slug "windows")

## Planned Integrations
- **AI Service**: Future integration with xAI Grok API for intelligent chat responses
- **Session Storage**: PostgreSQL-backed session management with connect-pg-simple
- **Real-time Features**: Potential WebSocket integration for live chat functionality