# New York Sash 2.0 - Home Improvement Website

A modern, full-stack React TypeScript application for New York Sash, a premier home improvement company specializing in windows, bathrooms, siding, and doors throughout Central New York.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git
- PostgreSQL database (Neon recommended for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/erickflorezny/sash2.0.git
   cd sash2.0
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

3. **Set up environment variables**
   ```bash
   cp .env.development .env
   # Edit .env with your database URL and other configuration
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3014`

## 🏗️ Project Structure

```
sash2.0/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and configurations
│   │   └── assets/        # Static assets
├── server/                 # Express.js backend
├── shared/                 # Shared types and schemas
├── migrations/            # Database migrations
└── dist/                  # Built application
```

## 🛠️ Development Workflow

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

### Client Scripts (from client/ directory)
- `npm run dev` - Start Vite development server
- `npm run build` - Build client for production

## 🎨 Design System

### Color Palette
- **Primary**: `ny-red` (#DC143C) - Crimson red
- **Secondary**: `ny-black` (#1a1a1a) - Dark charcoal
- **Accent**: `ny-gray` (#f8f9fa) - Light gray

### Typography
- Clean, modern fonts with strong hierarchy
- Responsive text sizing for all devices

### Components
- Built with shadcn/ui and Radix UI primitives
- Fully accessible and customizable
- Consistent design language throughout

## 🔧 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Wouter** for routing
- **TanStack Query** for data fetching

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **Apollo Client** for GraphQL (WordPress integration)
- **PostgreSQL** with Drizzle ORM

### Database
- **PostgreSQL** hosted on Neon
- **Drizzle ORM** for type-safe queries
- **Database migrations** with Drizzle Kit

## 📱 Features

### Core Pages
- **Home**: Interactive hero section with cycling headings
- **Windows**: Premium window selection with before/after galleries
- **Bathrooms**: Bathroom remodeling showcase
- **Siding**: Vinyl siding options and color selection
- **Doors**: Entry and patio door selection
- **About**: Company information and testimonials

### Interactive Components
- **AI Chat Interface**: Customer inquiry system
- **Before/After Galleries**: Visual transformation showcases
- **Shareable Links**: Social media and QR code sharing
- **Contact Forms**: Lead generation and consultation booking

### WordPress Integration
- Content management through WordPress GraphQL API
- Fallback content for development and offline use
- SEO optimization with meta tags

## 🤝 Contributing

### Git Workflow
1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes and commit: `git commit -m "feat: add your feature"`
3. Push to your branch: `git push origin feature/your-feature-name`
4. Create a Pull Request on GitHub

### Code Standards
- Use TypeScript for all new code
- Follow React best practices and hooks patterns
- Maintain consistent styling with Tailwind classes
- Write descriptive commit messages

### Component Guidelines
- Use functional components with hooks
- Implement proper TypeScript interfaces
- Follow the established file structure
- Include proper error handling

## 🚀 Deployment

### Vercel Deployment
1. **Connect your GitHub repository** to Vercel
2. **Set environment variables** in Vercel dashboard:
   ```
   NODE_ENV=production
   DATABASE_URL=your_production_db_url
   WORDPRESS_API_URL=your_wordpress_graphql_endpoint
   ```
3. **Deploy**: Vercel will automatically build and deploy using the `vercel.json` configuration

### Manual Deployment
#### Environment Variables
Create `.env.production` with:
```env
NODE_ENV=production
DATABASE_URL=your_production_db_url
VITE_WORDPRESS_API_URL=your_wordpress_graphql_endpoint
```

#### Build Process
```bash
npm run build
npm start
```

## 📚 Documentation

- [WordPress Setup](WORDPRESS_SETUP.md) - CMS integration guide
- [Mapbox Setup](MAPBOX_SETUP.md) - Interactive map configuration
- [Shareable Links](SHAREABLE_LINKS.md) - Social sharing implementation
- [AI Rules](AI_RULES.md) - Development guidelines

## 🐛 Troubleshooting

### Common Issues
- **Database connection**: Check your `.env` DATABASE_URL
- **Build errors**: Run `npm install` in both root and client directories
- **TypeScript errors**: Run `npm run check` to identify issues

### Development Tips
- Use the browser's React DevTools for debugging
- Check the terminal for server logs and errors
- Use `npm run check` frequently to catch TypeScript issues

## 📞 Support

For questions or issues:
- Create an issue on GitHub
- Check existing documentation
- Contact the development team

## 📄 License

MIT License - see LICENSE file for details

---

**New York Sash** - Transforming homes throughout Central New York since 1988</content>
<parameter name="filePath">c:\Users\ErickFlorez\Projects\sash2.0\README.md