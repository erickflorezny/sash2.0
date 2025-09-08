import { initializeWordPressClient } from './wordpressClient';

// WordPress configuration interface
export interface WordPressConfig {
  endpoint: string;
  headers?: Record<string, string>;
}

// Global WordPress configuration state
let isWordPressInitialized = false;
let currentConfig: WordPressConfig | null = null;

/**
 * Initialize WordPress GraphQL client with provided configuration
 * Call this function when you have the WordPress endpoint and authentication details
 */
export function setupWordPress(config: WordPressConfig): void {
  try {
    initializeWordPressClient(config.endpoint, config.headers);
    currentConfig = config;
    isWordPressInitialized = true;
    
    console.log('WordPress GraphQL client initialized successfully');
    console.log('Endpoint:', config.endpoint);
    
    // You can now navigate to WordPress pages/posts
    // Example: /windows will try to load a WordPress page with slug "windows"
  } catch (error) {
    console.error('Failed to initialize WordPress client:', error);
    isWordPressInitialized = false;
  }
}

/**
 * Check if WordPress client is initialized and ready to use
 */
export function isWordPressReady(): boolean {
  return isWordPressInitialized;
}

/**
 * Get current WordPress configuration
 */
export function getWordPressConfig(): WordPressConfig | null {
  return currentConfig;
}

/**
 * Reset WordPress configuration (useful for switching between different WordPress instances)
 */
export function resetWordPressConfig(): void {
  isWordPressInitialized = false;
  currentConfig = null;
  console.log('WordPress configuration reset');
}

// Example usage (you'll replace this with your actual WordPress details):
/*
setupWordPress({
  endpoint: 'https://your-wordpress-site.com/graphql',
  headers: {
    // Add any authentication headers if needed
    // 'Authorization': 'Bearer your-token-here'
  }
});
*/