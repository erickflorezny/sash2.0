# Mapbox API Setup

To enable the interactive map in the CustomerMapGallery component, you need a Mapbox API key:

## Getting a Mapbox API Key

1. Go to [mapbox.com](https://mapbox.com) and sign up for a free account
2. Once logged in, go to your account settings
3. Navigate to "Access Tokens"
4. Create a new token or copy your default public token
5. The token will look like: `pk.eyJ1...`

## Setting up the API Key

### Option 1: Environment Variable (Recommended)

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add your API key:
   ```
   VITE_MAPBOX_API_KEY=pk.eyJ1...
   ```
3. Restart your development server

### Option 2: Direct Configuration

You can also pass the API key directly in the component:

```tsx
<CustomerMapGallery
  projects={sampleProjects}
  mapConfig={{
    center: { latitude: 42.8, longitude: -73.9 },
    zoom: 8,
    apiKey: 'pk.eyJ1...' // Your API key here
  }}
/>
```

## Features

- Interactive map with clickable project pins
- Project details modal with photo gallery
- Full-screen photo viewer
- Responsive design
- TypeScript support
- Configurable styling and behavior

## Without API Key

If no API key is provided, the component will show:
- A placeholder with instructions
- A list of project locations
- All interactive features still work (modals, photo gallery)

The map will automatically switch to the interactive version once a valid API key is provided.