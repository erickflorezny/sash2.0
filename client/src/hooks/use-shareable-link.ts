import { useLocation } from 'wouter';

/**
 * Hook to get the current page URL and generate shareable links
 */
export const useShareableLink = () => {
  const [location] = useLocation();

  // Get the current full URL
  const getCurrentUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return '';
  };

  // Get the current path (useful for relative links)
  const getCurrentPath = () => {
    return location;
  };

  // Generate a shareable link for a specific path
  const generateShareableLink = (path: string, baseUrl?: string) => {
    const base = baseUrl || (typeof window !== 'undefined' ? window.location.origin : '');
    return `${base}${path}`;
  };

  // Generate social media share URLs
  const generateSocialShareUrls = (url: string, title: string = '', description: string = '') => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description);

    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`
    };
  };

  // Copy link to clipboard
  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      return true;
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    }
  };

  return {
    getCurrentUrl,
    getCurrentPath,
    generateShareableLink,
    generateSocialShareUrls,
    copyToClipboard
  };
};

/**
 * Utility function to create a shareable link for the current page
 */
export const createShareableLink = (path?: string) => {
  if (typeof window === 'undefined') return '';

  const baseUrl = window.location.origin;
  const fullPath = path || window.location.pathname;

  return `${baseUrl}${fullPath}`;
};

/**
 * Generate a short shareable link (useful for QR codes or SMS)
 */
export const createShortShareableLink = (path?: string) => {
  // For now, just return the regular link
  // In production, you could integrate with a URL shortener service
  return createShareableLink(path);
};