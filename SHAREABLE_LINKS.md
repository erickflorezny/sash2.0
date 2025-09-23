# Shareable Links Guide

This guide explains how to create and use shareable links in your React application.

## Overview

Your app now supports multiple ways to create shareable links:

1. **Social Media Sharing** - Share pages on Facebook, Twitter, LinkedIn, etc.
2. **Direct Link Copying** - Copy URLs to clipboard
3. **QR Code Generation** - Generate QR codes for offline sharing
4. **Custom Shareable URLs** - Generate links for specific pages

## Components

### ShareButton Component

A dropdown button that provides multiple sharing options.

```tsx
import ShareButton from '@/components/ShareButton';

// Basic usage - shares current page
<ShareButton />

// Custom usage
<ShareButton
  url="https://yourapp.com/windows"
  title="Premium Windows - New York Sash"
  description="Transform your home with premium windows"
  variant="outline"
  size="sm"
/>
```

### useShareableLink Hook

A React hook for generating and managing shareable links.

```tsx
import { useShareableLink } from '@/hooks/use-shareable-link';

const MyComponent = () => {
  const {
    getCurrentUrl,
    getCurrentPath,
    generateShareableLink,
    generateSocialShareUrls,
    copyToClipboard
  } = useShareableLink();

  const handleShare = async () => {
    const url = getCurrentUrl();
    const socialUrls = generateSocialShareUrls(url, 'My Page Title');

    // Copy to clipboard
    await copyToClipboard(url);

    // Open Facebook share
    window.open(socialUrls.facebook, '_blank');
  };

  return (
    <button onClick={handleShare}>Share This Page</button>
  );
};
```

### QRCodeGenerator Component

Generate QR codes for shareable links.

```tsx
import QRCodeGenerator, { ShareableLinkDisplay } from '@/components/QRCodeGenerator';

// QR Code for current page
<QRCodeGenerator size={200} />

// QR Code for specific URL
<QRCodeGenerator url="https://yourapp.com/windows" size={150} />

// Simple link display
<ShareableLinkDisplay
  title="Share this page"
  url="https://yourapp.com/windows"
/>
```

## Utility Functions

### createShareableLink()

Generate a shareable link for any path.

```tsx
import { createShareableLink } from '@/hooks/use-shareable-link';

// For current page
const currentLink = createShareableLink();

// For specific path
const windowsLink = createShareableLink('/windows');

// For full URL
const fullLink = createShareableLink('/contact');
```

## Implementation Examples

### Adding Share Button to a Page

```tsx
import ShareButton from '@/components/ShareButton';

const MyPage = () => {
  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <h1>My Page Title</h1>
        <ShareButton
          title="My Page Title"
          description="Description of what this page is about"
        />
      </div>
      {/* Page content */}
    </div>
  );
};
```

### Social Media Integration

```tsx
import { useShareableLink } from '@/hooks/use-shareable-link';

const SocialShareButtons = () => {
  const { generateSocialShareUrls, getCurrentUrl } = useShareableLink();
  const url = getCurrentUrl();
  const socialUrls = generateSocialShareUrls(url, 'Check this out!');

  return (
    <div className="flex space-x-2">
      <a href={socialUrls.facebook} target="_blank" rel="noopener">
        Facebook
      </a>
      <a href={socialUrls.twitter} target="_blank" rel="noopener">
        Twitter
      </a>
      <a href={socialUrls.linkedin} target="_blank" rel="noopener">
        LinkedIn
      </a>
    </div>
  );
};
```

## Deployment Considerations

### For Vercel/Netlify Deployment

When deployed, your shareable links will automatically use the production domain:

- **Development**: `http://localhost:5173/windows`
- **Production**: `https://yourapp.vercel.app/windows` or `https://yourapp.netlify.app/windows`

### Custom Domain

If using a custom domain, update your environment variables:

```env
VITE_APP_URL=https://yourcustomdomain.com
```

### Meta Tags for Better Sharing

Add these meta tags to your `index.html` for better social media sharing:

```html
<meta property="og:title" content="New York Sash - Premium Windows & Doors" />
<meta property="og:description" content="Transform your home with premium windows and doors" />
<meta property="og:image" content="https://yourapp.com/og-image.jpg" />
<meta property="og:url" content="https://yourapp.com" />
<meta name="twitter:card" content="summary_large_image" />
```

## Testing Shareable Links

1. **Local Development**: Links will use `localhost:5173`
2. **Staging**: Test with your staging URL
3. **Production**: Verify all social media platforms display correctly

## Browser Compatibility

- **Copy to Clipboard**: Works in all modern browsers, falls back to older methods
- **Social Sharing**: Works in all browsers that support `window.open`
- **QR Codes**: Requires canvas support (all modern browsers)

## Troubleshooting

### Links not working in production?
- Check that your domain is correctly configured
- Verify environment variables are set
- Test with browser developer tools

### Social media not showing correct preview?
- Add proper meta tags to your HTML
- Test with Facebook's sharing debugger
- Allow time for caches to update

### QR codes not generating?
- Ensure canvas element is properly rendered
- Check browser console for errors
- Consider using a dedicated QR code library for production