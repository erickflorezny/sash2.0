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
    console.log(`[${new Date().toISOString()}] Starting fetch process...`);

    const fetchPageData = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log(`[${new Date().toISOString()}] Fetching WordPress data for slug: "${slug}"`);

        // Use server proxy endpoint to avoid CORS issues
        const query = `{ pages(where:{name:"${slug}"}){nodes{id title content slug featuredImage{node{sourceUrl altText}} modified date}} }`;
        const encodedQuery = encodeURIComponent(query);
        const url = `http://localhost:5000/api/wordpress?query=${encodedQuery}`;

        console.log(`[${new Date().toISOString()}] Fetching from URL:`, url);

        // Test basic connectivity first
        try {
          console.log(`[${new Date().toISOString()}] Testing server connectivity...`);
          const testResponse = await fetch('http://localhost:5000/api/ping');
          console.log(`[${new Date().toISOString()}] Server ping response:`, testResponse.status);
        } catch (testError) {
          console.error(`[${new Date().toISOString()}] Server connectivity test failed:`, testError);
        }

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          mode: 'cors', // Try CORS mode
        });

        console.log(`[${new Date().toISOString()}] Response status:`, response.status);
        console.log(`[${new Date().toISOString()}] Response headers:`, Object.fromEntries(response.headers.entries()));

        if (!response.ok) {
          const errorText = await response.text();
          console.log(`[${new Date().toISOString()}] Error response:`, errorText);
          throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
        }

        const data = await response.json();
        console.log(`[${new Date().toISOString()}] Parsed data:`, data);

        console.log(`[${new Date().toISOString()}] WordPress response:`, data);

        if (data?.data?.pages?.nodes && data.data.pages.nodes.length > 0) {
          const page = data.data.pages.nodes[0];
          console.log(`[${new Date().toISOString()}] Found page data:`, page);
          setPageData(page);
        } else {
          console.log(`[${new Date().toISOString()}] No page data found for slug: "${slug}"`);
          setError(`No content found for page: ${slug}`);
        }
      } catch (err) {
        console.error(`[${new Date().toISOString()}] Error fetching WordPress data for slug "${slug}":`, err);
        setError(`Failed to load content: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
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
        {fallbackContent}
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