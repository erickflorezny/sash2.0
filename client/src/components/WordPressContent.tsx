import React, { useEffect, useState } from "react";
import { wordpressClient, WORDPRESS_QUERIES, mockPages } from "@/lib/wordpressConfig";
import { gql } from "@apollo/client";
import HeroSection from "./HeroSection";
import Breadcrumbs from "./Breadcrumbs";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface WordPressContentProps {
  slug: string;
  fallbackContent?: React.ReactNode;
  className?: string;
}

const WordPressContent: React.FC<WordPressContentProps> = ({
  slug,
  fallbackContent,
  className = ""
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pageData, setPageData] = useState<any>(null);

  // Generate breadcrumbs based on slug
  const generateBreadcrumbs = (pageSlug: string, pageTitle: string) => {
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

    // Add service-specific breadcrumbs
    if (pageSlug === 'windows') {
      breadcrumbs.push({ label: 'Windows' });
    } else if (pageSlug === 'doors') {
      breadcrumbs.push({ label: 'Doors' });
    } else if (pageSlug === 'siding') {
      breadcrumbs.push({ label: 'Siding' });
    } else if (pageSlug === 'bathrooms') {
      breadcrumbs.push({ label: 'Bathrooms' });
    } else if (pageSlug === 'about') {
      breadcrumbs.push({ label: 'About' });
    } else if (pageSlug === 'contact') {
      breadcrumbs.push({ label: 'Contact' });
    } else {
      breadcrumbs.push({ label: pageTitle });
    }

    return breadcrumbs;
  };

  useEffect(() => {
    console.log(`[${new Date().toISOString()}] ===== COMPONENT MOUNT/UPDATE for slug: "${slug}" =====`);
    console.log(`[${new Date().toISOString()}] WordPress GraphQL endpoint being used:`, import.meta.env.VITE_WORDPRESS_API_URL);

    const testEndpoint = async () => {
      try {
        console.log("Testing GraphQL endpoint accessibility...");
        const response = await fetch('http://utica.supply/resashgraph', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: '{ pages(first: 1) { nodes { slug title } } }'
          })
        });
        console.log("Endpoint test response status:", response.status);
        if (response.ok) {
          const data = await response.json();
          console.log("Endpoint test successful:", data);
        } else {
          console.error("Endpoint test failed with status:", response.status);
        }
      } catch (e) {
        console.error("Endpoint test error:", e);
      }
    };

    testEndpoint();

    const fetchAllPages = async () => {
      try {
        console.log(`[${new Date().toISOString()}] Fetching all available pages from WordPress...`);
        const { data }: { data: any } = await wordpressClient.query({
          query: WORDPRESS_QUERIES.GET_ALL_PAGES_WITH_CONTENT,
        });
        console.log(`[${new Date().toISOString()}] Available pages:`, data.pages.nodes);
        console.log(`[${new Date().toISOString()}] Available page slugs:`, data.pages.nodes.map((p: any) => p.slug).join(', '));
      } catch (e) {
        console.error(`[${new Date().toISOString()}] Failed to fetch all pages:`, e);
      }
    };

    fetchAllPages();

    const fetchPageContent = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try to fetch from WordPress first
        console.log(`[${new Date().toISOString()}] Attempting to fetch WordPress content for page "${slug}"`);

        try {
          // Fetch all pages with full content in one query
          console.log(`[${new Date().toISOString()}] Fetching all pages with content to find "${slug}"...`);
          const { data: allPagesData }: { data: any } = await wordpressClient.query({
            query: WORDPRESS_QUERIES.GET_ALL_PAGES_WITH_CONTENT,
          });

          if (allPagesData?.pages?.nodes) {
            console.log(`[${new Date().toISOString()}] All pages data received:`, allPagesData.pages.nodes.length, 'pages');
            console.log(`[${new Date().toISOString()}] Available slugs:`, allPagesData.pages.nodes.map((p: any) => p.slug).join(', '));

            // Find the page with matching slug
            const pageNode = allPagesData.pages.nodes.find((p: any) => {
              console.log(`[${new Date().toISOString()}] Checking page:`, p.slug, 'against:', slug, 'match:', p.slug === slug);
              return p.slug === slug;
            });

            console.log(`[${new Date().toISOString()}] Found page node:`, pageNode);

            if (pageNode) {
              console.log(`[${new Date().toISOString()}] Successfully loaded WordPress content for "${slug}"`);
              setPageData(pageNode);
              setLoading(false);
              return;
            }
          }

          console.log(`[${new Date().toISOString()}] About to throw error - page not found`);
          throw new Error(`Page with slug "${slug}" not found in WordPress`);
        } catch (wpError: any) {
          console.error(`[${new Date().toISOString()}] WordPress fetch failed for "${slug}":`, wpError);
          console.error(`[${new Date().toISOString()}] Error details:`, wpError.message, wpError.networkError, wpError.graphQLErrors);

          // Fall back to mock data if WordPress fails
          if (mockPages && (mockPages as any)[slug]) {
            console.log(`Using mock data fallback for page "${slug}"`);
            setPageData((mockPages as any)[slug]);
            setError(`WordPress connection failed: ${wpError.message}. Using mock data.`);
            setLoading(false);
            return;
          } else {
            throw new Error(`No mock data available for "${slug}"`);
          }
        }
      } catch (err: any) {
        console.error("Critical error fetching content:", err);
        setError(err.message || "Unknown error");
        setLoading(false);
      }
    };

    fetchPageContent();
  }, [slug]);

  // Show loading state
  if (loading) {
    return (
      <div>
        {/* Hero Section Loading */}
        <div className="min-h-[400px] bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="h-12 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-48 mx-auto"></div>
          </div>
        </div>

        {/* Content Loading */}
        <div className={`${className} py-8 text-center`}>
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto mb-2"></div>
          </div>
        </div>
      </div>
    );
  }

  // Show error state with fallback content
  if (error && !pageData) {
    return fallbackContent ? (
      <div>
        {/* Hero Section with Title - Full Width */}
        <HeroSection
          title={slug.charAt(0).toUpperCase() + slug.slice(1)}
          className="min-h-[400px]"
          showShareButton={true}
          shareTitle={`${slug.charAt(0).toUpperCase() + slug.slice(1)} - New York Sash`}
          shareDescription={`Learn more about ${slug} from New York Sash`}
        />

        {/* Breadcrumbs and Content Container */}
        <div className={className}>
          {/* Breadcrumbs */}
          <div className="bg-gray-50 py-4">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={generateBreadcrumbs(slug, slug.charAt(0).toUpperCase() + slug.slice(1))} />
            </div>
          </div>

          {/* Fallback Content */}
          <div className="container mx-auto px-4 py-8">
            {fallbackContent}
          </div>
        </div>
      </div>
    ) : (
      <div className={`${className} py-8 text-center`}>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-yellow-800 mb-2">Content Loading Issue</h2>
          <p className="text-yellow-700">{error}</p>
        </div>
      </div>
    );
  }

  // Show content
  if (pageData) {
    const breadcrumbs = generateBreadcrumbs(slug, pageData.title);

    return (
      <div>
        {/* Hero Section with Title - Full Width */}
        <HeroSection
          title={pageData.title}
          className="min-h-[400px]"
          showShareButton={true}
          shareTitle={`${pageData.title} - New York Sash`}
          shareDescription={`Learn more about ${pageData.title.toLowerCase()} from New York Sash`}
        />

        {/* Breadcrumbs and Content Container */}
        <div className={className}>
          {/* Breadcrumbs */}
          <div className="bg-gray-50 py-4">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-4 py-8">
            <article className="prose prose-lg max-w-none">
              <div
                className="wp-content text-gray-700"
                dangerouslySetInnerHTML={{ __html: pageData.content }}
              />

              {error && (
                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> This content is being displayed from backup data due to WordPress connection issues.
                  </p>
                </div>
              )}

              <div className="mt-8 text-sm text-gray-500 border-t pt-4">
                <p>Last updated: {new Date(pageData.modified || pageData.date).toLocaleDateString()}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }

  // Fallback if no data at all
  if (fallbackContent) {
    const breadcrumbs = generateBreadcrumbs(slug, slug.charAt(0).toUpperCase() + slug.slice(1));

    return (
      <div>
        {/* Hero Section with Title - Full Width */}
        <HeroSection
          title={slug.charAt(0).toUpperCase() + slug.slice(1)}
          className="min-h-[400px]"
          showShareButton={true}
          shareTitle={`${slug.charAt(0).toUpperCase() + slug.slice(1)} - New York Sash`}
          shareDescription={`Learn more about ${slug} from New York Sash`}
        />

        {/* Breadcrumbs and Content Container */}
        <div className={className}>
          {/* Breadcrumbs */}
          <div className="bg-gray-50 py-4">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          </div>

          {/* Fallback Content */}
          <div className="container mx-auto px-4 py-8">
            {fallbackContent}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} py-8 text-center`}>
      <p className="text-gray-600">Content not available.</p>
    </div>
  );
};

export default WordPressContent;