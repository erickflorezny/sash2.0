import { GraphQLClient } from 'graphql-request';
import type { 
  WordPressPage, 
  WordPressPost, 
  WordPressPageResponse, 
  WordPressPostResponse,
  WordPressPagesResponse,
  WordPressPostsResponse,
  WordPressMenuResponse
} from '@shared/schema';

// WordPress GraphQL Client Configuration
let wpGraphQLClient: GraphQLClient | null = null;

export function initializeWordPressClient(endpoint: string, headers?: Record<string, string>) {
  wpGraphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  });
}

export function getWordPressClient(): GraphQLClient {
  if (!wpGraphQLClient) {
    throw new Error('WordPress GraphQL client not initialized. Call initializeWordPressClient() first.');
  }
  return wpGraphQLClient;
}

// GraphQL Queries
export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: SLUG) {
      id
      title {
        rendered
      }
      content {
        rendered
      }
      slug
      status
      date
      modified
      excerpt {
        rendered
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
      }
    }
  }
`;

export const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title {
        rendered
      }
      content {
        rendered
      }
      slug
      status
      date
      modified
      excerpt {
        rendered
      }
      categories {
        nodes {
          name
          slug
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
      author {
        node {
          name
          slug
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
      }
    }
  }
`;

export const GET_ALL_PAGES = `
  query GetAllPages($first: Int = 100) {
    pages(first: $first, where: {status: PUBLISH}) {
      nodes {
        id
        title {
          rendered
        }
        slug
        date
        modified
        excerpt {
          rendered
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export const GET_ALL_POSTS = `
  query GetAllPosts($first: Int = 10, $after: String) {
    posts(first: $first, after: $after, where: {status: PUBLISH}) {
      nodes {
        id
        title {
          rendered
        }
        slug
        date
        modified
        excerpt {
          rendered
        }
        categories {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const GET_MENU_ITEMS = `
  query GetMenuItems($location: MenuLocationEnum!) {
    menuItems(where: {location: $location}) {
      nodes {
        id
        label
        url
        target
        title
        cssClasses
        childItems {
          nodes {
            id
            label
            url
            target
            title
            cssClasses
          }
        }
      }
    }
  }
`;

// API Functions
export async function fetchPageBySlug(slug: string): Promise<WordPressPage | null> {
  try {
    const client = getWordPressClient();
    const data: WordPressPageResponse = await client.request(GET_PAGE_BY_SLUG, { slug });
    return data.page;
  } catch (error) {
    console.error('Error fetching WordPress page:', error);
    return null;
  }
}

export async function fetchPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const client = getWordPressClient();
    const data: WordPressPostResponse = await client.request(GET_POST_BY_SLUG, { slug });
    return data.post;
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
}

export async function fetchAllPages(): Promise<WordPressPage[]> {
  try {
    const client = getWordPressClient();
    const data: WordPressPagesResponse = await client.request(GET_ALL_PAGES);
    return data.pages.nodes;
  } catch (error) {
    console.error('Error fetching WordPress pages:', error);
    return [];
  }
}

export async function fetchAllPosts(first: number = 10, after?: string): Promise<{ posts: WordPressPost[], hasNextPage: boolean, endCursor: string | null }> {
  try {
    const client = getWordPressClient();
    const data: WordPressPostsResponse = await client.request(GET_ALL_POSTS, { first, after });
    return {
      posts: data.posts.nodes,
      hasNextPage: data.posts.pageInfo?.hasNextPage || false,
      endCursor: data.posts.pageInfo?.endCursor || null
    };
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return { posts: [], hasNextPage: false, endCursor: null };
  }
}

export async function fetchMenuItems(location: string): Promise<any[]> {
  try {
    const client = getWordPressClient();
    const data: WordPressMenuResponse = await client.request(GET_MENU_ITEMS, { location });
    return data.menuItems.nodes;
  } catch (error) {
    console.error('Error fetching WordPress menu items:', error);
    return [];
  }
}