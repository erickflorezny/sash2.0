# WordPress GraphQL Integration Setup

This guide will help you connect your React application to your local WordPress installation with GraphQL.

## Prerequisites

1. **WordPress Installation** with GraphQL support
2. **WPGraphQL Plugin** installed and activated
3. **Local WordPress site** running (typically on `http://localhost:8080` or similar)

## Step 1: Install Required WordPress Plugins

1. Install and activate the **WPGraphQL** plugin
2. (Optional) Install **WPGraphQL for Advanced Custom Fields** if you use ACF
3. (Optional) Install **WPGraphQL SEO** for SEO data

## Step 2: Configure GraphQL Endpoint

Your WordPress GraphQL endpoint should be available at:
```
http://localhost:8080/graphql
```

## Step 3: Update Configuration

Edit `client/src/lib/wordpressConfig.ts` and update the endpoint:

```typescript
setupWordPress({
  endpoint: 'http://localhost:8080/graphql', // Your WordPress GraphQL endpoint
  headers: {
    // Add authentication headers if needed
    // 'Authorization': 'Bearer your-token-here'
  }
});
```

## Step 4: Create WordPress Pages

In your WordPress admin, create pages that match your navigation structure:

1. **About Us** (slug: `about`)
2. **Windows** (slug: `windows`)
3. **Siding** (slug: `siding`)
4. **Baths** (slug: `bathrooms`)
5. **Doors** (slug: `doors`)

## Step 5: Create Navigation Menu

1. Go to **WordPress Admin → Appearance → Menus**
2. Create a new menu called "Main Menu"
3. Add your pages to the menu
4. Set the menu location to "Primary" or your theme's main navigation location

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Visit `http://localhost:3002/wp-admin` to see the WordPress integration status
3. Check that your navigation menu items appear in the header
4. Click on navigation items to test page loading

## Features Included

### ✅ Dynamic Navigation Menu
- Automatically loads menu items from WordPress
- Fallback to static menu if WordPress is unavailable
- Loading states and error handling

### ✅ Page Content Loading
- WordPress pages load dynamically via GraphQL
- SEO metadata integration
- Featured images support
- Parent/child page relationships

### ✅ Admin Interface
- `/wp-admin` page shows connection status
- Lists all available WordPress pages
- Menu preview functionality
- Error diagnostics

### ✅ Error Handling
- Graceful fallbacks when WordPress is unavailable
- Loading states for better UX
- Detailed error messages for debugging

## Troubleshooting

### WordPress Connection Issues

1. **Check GraphQL Endpoint**: Visit `http://localhost:8080/graphql` in your browser
2. **WPGraphQL Plugin**: Ensure the plugin is activated
3. **CORS Issues**: Add this to your `wp-config.php`:
   ```php
   // Allow CORS for GraphQL
   add_action('init', function() {
     header('Access-Control-Allow-Origin: *');
     header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
     header('Access-Control-Allow-Headers: Content-Type, Authorization');
   });
   ```

### Menu Not Loading

1. **Menu Name**: Ensure your menu is named "main-menu" in WordPress
2. **Menu Location**: Set the menu location in WordPress admin
3. **Menu Items**: Add pages to your menu

### Pages Not Loading

1. **Page Slugs**: Ensure page slugs match your routes
2. **Page Status**: Pages should be published
3. **GraphQL Permissions**: Check that GraphQL can access your pages

## Advanced Configuration

### Authentication
If your WordPress site requires authentication:

```typescript
setupWordPress({
  endpoint: 'https://your-wordpress-site.com/graphql',
  headers: {
    'Authorization': 'Bearer your-jwt-token'
  }
});
```

### Custom Menu Name
To use a different menu name:

Edit `client/src/lib/wordpressClient.ts` and change:
```typescript
GET_MAIN_MENU: `
  query GetMainMenu {
    menu(id: "your-menu-slug", idType: SLUG) {
```

### Additional GraphQL Fields
Add more fields to your queries in `wordpressClient.ts`:

```typescript
const PAGE_FIELDS = `
  ${NODE_FIELDS}
  template {
    templateName
  }
  parent {
    node {
      slug
    }
  }
  // Add your custom fields here
  customField
`;
```

## Support

If you encounter issues:

1. Check the browser console for error messages
2. Visit `/wp-admin` to see connection status
3. Verify your WordPress GraphQL endpoint is accessible
4. Ensure WPGraphQL plugin is properly configured

The integration includes comprehensive error handling and fallback mechanisms to ensure your site remains functional even if WordPress is unavailable.