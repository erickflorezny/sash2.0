import { useQuery } from '@tanstack/react-query';
import { useParams } from 'wouter';
import { fetchPageBySlug } from '@/lib/wordpressClient';
import type { WordPressPage } from '@shared/schema';
import { useEffect } from 'react';

interface WordPressPageTemplateProps {
  slug?: string;
}

export function WordPressPageTemplate({ slug: propSlug }: WordPressPageTemplateProps) {
  const params = useParams();
  const slug = propSlug || params.slug || '';

  const {
    data: page,
    isLoading,
    error
  } = useQuery<WordPressPage | null>({
    queryKey: ['/api/wordpress/page', slug],
    queryFn: () => fetchPageBySlug(slug),
    enabled: !!slug,
  });

  // Update document title and meta tags
  useEffect(() => {
    if (page) {
      document.title = page.seo?.title || page.title.rendered || 'New York Sash';
      
      // Update meta description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', page.seo?.metaDesc || page.excerpt.rendered || '');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = page.seo?.metaDesc || page.excerpt.rendered || '';
        document.head.appendChild(meta);
      }

      // Update Open Graph tags
      updateOrCreateMetaTag('property', 'og:title', page.seo?.opengraphTitle || page.title.rendered);
      updateOrCreateMetaTag('property', 'og:description', page.seo?.opengraphDescription || page.excerpt.rendered);
      updateOrCreateMetaTag('property', 'og:type', 'website');
      
      if (page.featuredImage?.node?.sourceUrl) {
        updateOrCreateMetaTag('property', 'og:image', page.featuredImage.node.sourceUrl);
        updateOrCreateMetaTag('property', 'og:image:alt', page.featuredImage.node.altText || page.title.rendered);
      }
    }
  }, [page]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="wp-page-skeleton">
                <div className="skeleton-title"></div>
                <div className="skeleton-content">
                  <div className="skeleton-line"></div>
                  <div className="skeleton-line"></div>
                  <div className="skeleton-line short"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !page) {
    return (
      <div className="error-container">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="wp-page-error">
                <h1>Page Not Found</h1>
                <p>The page you're looking for doesn't exist or couldn't be loaded.</p>
                <a href="/" className="btn btn-primary">
                  Return Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wp-page-container">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <article className="wp-page-content">
              {/* Featured Image */}
              {page.featuredImage?.node?.sourceUrl && (
                <div className="wp-page-featured-image">
                  <img 
                    src={page.featuredImage.node.sourceUrl}
                    alt={page.featuredImage.node.altText || page.title.rendered}
                    className="img-fluid"
                    data-testid={`img-featured-${page.slug}`}
                  />
                </div>
              )}

              {/* Page Header */}
              <header className="wp-page-header">
                <h1 
                  className="wp-page-title"
                  data-testid={`title-${page.slug}`}
                  dangerouslySetInnerHTML={{ __html: page.title.rendered }}
                />
                
                {page.excerpt.rendered && (
                  <div 
                    className="wp-page-excerpt"
                    data-testid={`excerpt-${page.slug}`}
                    dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }}
                  />
                )}
              </header>

              {/* Page Content */}
              <div 
                className="wp-page-body"
                data-testid={`content-${page.slug}`}
                dangerouslySetInnerHTML={{ __html: page.content.rendered }}
              />

              {/* Page Meta */}
              <footer className="wp-page-meta">
                <div className="meta-info">
                  <span className="meta-date">
                    Last updated: {new Date(page.modified).toLocaleDateString()}
                  </span>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to update or create meta tags
function updateOrCreateMetaTag(attribute: string, name: string, content: string) {
  let meta = document.querySelector(`meta[${attribute}="${name}"]`);
  if (meta) {
    meta.setAttribute('content', content);
  } else {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  }
}

export default WordPressPageTemplate;