import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { gql } from "@apollo/client";

// Check if we're in development mode
const isDev = import.meta.env.DEV;

// WordPress GraphQL endpoint with fallbacks
// In production, this should point to your WordPress GraphQL endpoint
const WORDPRESS_GRAPHQL_ENDPOINT =
  import.meta.env.VITE_WORDPRESS_API_URL ||
  (isDev ? "http://sash20.local/graphql" : "https://wordpress-tefyrj53vq-uc.a.run.app/graphql");// Create Apollo Client instance
export const wordpressClient = new ApolloClient({
  link: new HttpLink({
    uri: WORDPRESS_GRAPHQL_ENDPOINT,
    fetchOptions: {
      mode: "cors",
    }
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
          seo {
            title
            metaDesc
            metaKeywords
            metaRobotsNoindex
            metaRobotsNofollow
            opengraphTitle
            opengraphDescription
            opengraphImage {
              sourceUrl
            }
            opengraphSiteName
            opengraphUrl
            opengraphType
            schema {
              raw
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
  "windows": {
    title: "Energy-Efficient Windows",
    content: "<h2>Premium Windows for Your Home</h2><p>New York Sash offers a wide selection of energy-efficient windows designed to enhance your home's comfort and curb appeal.</p><h3>Our Window Options</h3><ul><li>Double-hung windows</li><li>Casement windows</li><li>Bay and bow windows</li><li>Sliding windows</li><li>Picture windows</li></ul><p>All our windows feature fusion-welded frames, LowE glass with Argon gas, and ENERGY STAR certification.</p>",
    date: "2023-06-15T12:00:00",
    modified: "2023-08-20T14:30:00",
    seo: {
      title: "Energy-Efficient Windows | New York Sash",
      metaDesc: "Transform your home with premium, energy-efficient windows from New York Sash. Expert installation serving Utica, Syracuse, Rome and Central NY.",
      metaKeywords: "windows, energy efficient windows, replacement windows, new york sash, central new york",
      opengraphTitle: "Energy-Efficient Windows | New York Sash",
      opengraphDescription: "Premium energy-efficient windows custom manufactured for your home. Featuring fusion-welded frames and LowE glass with Argon.",
      opengraphImage: { sourceUrl: "" },
      opengraphSiteName: "New York Sash",
      opengraphUrl: "",
      opengraphType: "article",
      schema: { raw: "" }
    }
  },
  "doors": {
    title: "Entry & Patio Doors",
    content: "<h2>Beautiful, Secure Doors for Your Home</h2><p>Enhance your home's security and curb appeal with premium entry and patio doors from New York Sash.</p><h3>Our Door Options</h3><ul><li>Fiberglass entry doors</li><li>Steel entry doors</li><li>Sliding patio doors</li><li>French patio doors</li><li>Storm doors</li></ul><p>Our doors offer enhanced security features, energy efficiency, and customizable styles to match your home's architecture.</p>",
    date: "2023-06-15T12:00:00",
    modified: "2023-08-20T14:30:00",
    seo: {
      title: "Entry & Patio Doors | New York Sash",
      metaDesc: "Enhance your home's security and curb appeal with premium entry and patio doors from New York Sash. Expert installation in Central NY.",
      metaKeywords: "entry doors, patio doors, fiberglass doors, steel doors, storm doors, new york sash",
      opengraphTitle: "Entry & Patio Doors | New York Sash",
      opengraphDescription: "Beautiful, secure doors for your home. Options include fiberglass entry doors, steel entry doors, and sliding patio doors.",
      opengraphImage: { sourceUrl: "" },
      opengraphSiteName: "New York Sash",
      opengraphUrl: "",
      opengraphType: "article",
      schema: { raw: "" }
    }
  },
  "siding": {
    title: "Premium Vinyl Siding",
    content: "<h2>Beautiful, Durable Siding Solutions</h2><p>Transform your home's exterior with premium vinyl siding from New York Sash. Our siding products offer exceptional durability, energy efficiency, and minimal maintenance.</p><h3>Our Siding Options</h3><ul><li>Vinyl siding in various profiles and textures</li><li>Insulated vinyl siding for enhanced energy efficiency</li><li>Decorative accents and trim</li><li>Soffit and fascia</li></ul><p>Available in a wide range of colors to complement your home's architecture and your personal style preferences.</p>",
    date: "2023-06-15T12:00:00",
    modified: "2023-08-20T14:30:00",
    seo: {
      title: "Premium Vinyl Siding | New York Sash",
      metaDesc: "Transform your home with beautiful, durable vinyl siding from New York Sash. Energy-efficient options with professional installation in Central NY.",
      metaKeywords: "vinyl siding, insulated siding, house siding, exterior siding, new york sash",
      opengraphTitle: "Premium Vinyl Siding | New York Sash",
      opengraphDescription: "Beautiful, low-maintenance vinyl siding options for your home. Insulated options available for enhanced energy efficiency.",
      opengraphImage: { sourceUrl: "" },
      opengraphSiteName: "New York Sash",
      opengraphUrl: "",
      opengraphType: "article",
      schema: { raw: "" }
    }
  },
  "bathrooms": {
    title: "Bathroom Remodeling",
    content: "<h2>Transform Your Bathroom</h2><p>New York Sash offers complete bathroom renovation services, from simple updates to full remodels. Our solutions are designed for beauty, functionality, and accessibility.</p><h3>Our Bathroom Solutions</h3><ul><li>Tub-to-shower conversions</li><li>Walk-in tubs for accessibility</li><li>Shower systems</li><li>Acrylic bath liners</li><li>Bathroom accessories</li></ul><p>Most installations can be completed in just 1-2 days with minimal disruption to your home.</p>",
    date: "2023-06-15T12:00:00",
    modified: "2023-08-20T14:30:00",
    seo: {
      title: "Bathroom Remodeling | New York Sash",
      metaDesc: "Transform your bathroom with expert remodeling services from New York Sash. Walk-in tubs, tub-to-shower conversions, and more in Central NY.",
      metaKeywords: "bathroom remodeling, tub to shower conversion, walk-in tubs, shower systems, bath liners, new york sash",
      opengraphTitle: "Bathroom Remodeling | New York Sash",
      opengraphDescription: "Complete bathroom remodeling solutions including tub-to-shower conversions, walk-in tubs, shower systems, and acrylic bath liners.",
      opengraphImage: { sourceUrl: "" },
      opengraphSiteName: "New York Sash",
      opengraphUrl: "",
      opengraphType: "article",
      schema: { raw: "" }
    }
  },
  "about": {
    title: "About New York Sash",
    content: "<h2>Our Story</h2><p>Since 1988, New York Sash has been providing quality home improvement products and services to homeowners throughout Central New York.</p><p>As a family-owned and operated business, we take pride in our workmanship and are committed to customer satisfaction. Our team of experienced professionals is dedicated to helping you enhance your home's beauty, comfort, and value.</p><h3>Our Values</h3><ul><li>Quality craftsmanship</li><li>Superior customer service</li><li>Honest pricing</li><li>Environmental responsibility</li><li>Community involvement</li></ul><p>We're proud to be an EPA Lead-Safe Certified company, ensuring that all our renovation work is conducted with the highest safety standards.</p>",
    date: "2023-06-15T12:00:00",
    modified: "2023-08-20T14:30:00",
    seo: {
      title: "About New York Sash | Central NY Home Improvement Experts",
      metaDesc: "Learn about New York Sash, Central New York's trusted home improvement company since 1988. Family-owned and operated, serving Utica, Syracuse, Rome and beyond.",
      metaKeywords: "about new york sash, home improvement company, family owned, utica ny, central new york",
      opengraphTitle: "About New York Sash | Central NY Home Improvement Experts",
      opengraphDescription: "Family-owned and operated since 1988, New York Sash provides quality home improvement products and services throughout Central New York.",
      opengraphImage: { sourceUrl: "" },
      opengraphSiteName: "New York Sash",
      opengraphUrl: "",
      opengraphType: "website",
      schema: { raw: "" }
    }
  },
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
