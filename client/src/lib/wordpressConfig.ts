import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { gql } from "@apollo/client";

// Check if we're in development mode
const isDev = import.meta.env.DEV;

// WordPress GraphQL endpoint with fallbacks
// In production, this should point to your WordPress GraphQL endpoint
const WORDPRESS_GRAPHQL_ENDPOINT =
  import.meta.env.VITE_WORDPRESS_API_URL ||
  (isDev ? "http://utica.supply/resashgraph" : "http://utica.supply/resashgraph");// Create Apollo Client instance with custom link for GET requests
export const wordpressClient = new ApolloClient({
  link: new HttpLink({
    uri: WORDPRESS_GRAPHQL_ENDPOINT,
    fetchOptions: {
      method: "GET", // Use GET instead of POST
    },
    useGETForQueries: true, // Send queries as GET requests with query in URL
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "network-only", // Always fetch from network, never cache
      errorPolicy: "all",
    }
  }
});

// GraphQL queries
export const WORDPRESS_QUERIES = {
  GET_PAGE_BY_SLUG: gql`
    query GetPageBySlug($slug: String!) {
      pages(where: { name: $slug }) {
        nodes {
          id
          title
          content
          slug
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          modified
          date
        }
      }
    }
  `,
  GET_ALL_PAGES_WITH_CONTENT: gql`
    query GetAllPagesWithContent {
      pages(first: 100) {
        nodes {
          id
          title
          content
          slug
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          modified
          date
        }
      }
    }
  `,
};

// Mock data for development
export const mockPages = {
  "contact": {
    title: "Contact New York Sash",
    content: "<h2>Get in Touch with Our Team</h2><p>Ready to transform your home? Contact New York Sash today for a free consultation and estimate. Our expert team is here to help you with all your home improvement needs.</p><h3>Our Services</h3><ul><li>Windows - Energy-efficient replacement windows</li><li>Doors - Entry doors, patio doors, and storm doors</li><li>Siding - Premium vinyl siding installation</li><li>Bathrooms - Complete bathroom remodeling</li></ul><h3>Why Choose New York Sash?</h3><ul><li>Family-owned and operated since 1988</li><li>EPA Lead-Safe Certified</li><li>Lifetime warranty on our products</li><li>Professional installation team</li><li>Financing options available</li></ul><p>We serve homeowners throughout Central New York including Utica, Syracuse, Rome, and surrounding areas. Contact us today to schedule your free consultation!</p>",
    date: "2023-06-15T12:00:00",
    modified: "2023-08-20T14:30:00",
    contactInfo: {
      phone: "(315) 624-7344",
      email: "info@newyorksash.com",
      address: {
        street: "349 Oriskany Blvd",
        city: "Whitesboro",
        state: "NY",
        zip: "13492"
      },
      hours: {
        weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
        saturday: "Saturday: 9:00 AM - 1:00 PM",
        sunday: "Sunday: Closed"
      },
      emergency: "24/7 Emergency Service Available"
    },
    seo: {
      title: "Contact New York Sash | Free Consultation & Estimate",
      metaDesc: "Contact New York Sash for a free consultation on windows, doors, siding, and bathroom remodeling. Serving Central NY since 1988. Call (315) 624-7344.",
      metaKeywords: "contact new york sash, free estimate, consultation, home improvement, central new york",
      opengraphTitle: "Contact New York Sash | Free Consultation & Estimate",
      opengraphDescription: "Ready to transform your home? Contact New York Sash for a free consultation and estimate. Family-owned and operated since 1988.",
      opengraphImage: { sourceUrl: "" },
      opengraphSiteName: "New York Sash",
      opengraphUrl: "",
      opengraphType: "website",
      schema: { raw: "" }
    }
  }
};
