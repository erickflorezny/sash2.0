import { useQuery } from '@tanstack/react-query';
import { useParams } from 'wouter';
import { fetchPostBySlug } from '@/lib/wordpressClient';
import type { WordPressPost } from '@shared/schema';
import { useEffect } from 'react';

interface WordPressPostTemplateProps {
  slug?: string;
}

export function WordPressPostTemplate({ slug: propSlug }: WordPressPostTemplateProps) {
  const params = useParams();
  const slug = propSlug || params.slug || '';

  const {
    data: post,
    isLoading,
    error
  } = useQuery<WordPressPost | null>({
    queryKey: ['/api/wordpress/post', slug],
    queryFn: () => fetchPostBySlug(slug),
    enabled: !!slug,
  });

  // Update document title and meta tags
  useEffect(() => {
    if (post) {
      document.title = post.seo?.title || post.title.rendered || 'New York Sash';
      
      // Update meta description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', post.seo?.metaDesc || post.excerpt.rendered || '');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = post.seo?.metaDesc || post.excerpt.rendered || '';
        document.head.appendChild(meta);
      }

      // Update Open Graph tags
      updateOrCreateMetaTag('property', 'og:title', post.seo?.opengraphTitle || post.title.rendered);
      updateOrCreateMetaTag('property', 'og:description', post.seo?.opengraphDescription || post.excerpt.rendered);
      updateOrCreateMetaTag('property', 'og:type', 'article');
      
      if (post.featuredImage?.node?.sourceUrl) {
        updateOrCreateMetaTag('property', 'og:image', post.featuredImage.node.sourceUrl);
        updateOrCreateMetaTag('property', 'og:image:alt', post.featuredImage.node.altText || post.title.rendered);
      }
    }
  }, [post]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="wp-post-skeleton">
                <div className="skeleton-title"></div>
                <div className="skeleton-meta"></div>
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

  if (error || !post) {
    return (
      <div className="error-container">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="wp-post-error">
                <h1>Post Not Found</h1>
                <p>The post you're looking for doesn't exist or couldn't be loaded.</p>
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
    <div className="wp-post-container">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <article className="wp-post-content">
              {/* Featured Image */}
              {post.featuredImage?.node?.sourceUrl && (
                <div className="wp-post-featured-image">
                  <img 
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText || post.title.rendered}
                    className="img-fluid"
                    data-testid={`img-featured-${post.slug}`}
                  />
                </div>
              )}

              {/* Post Header */}
              <header className="wp-post-header">
                <h1 
                  className="wp-post-title"
                  data-testid={`title-${post.slug}`}
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                
                {/* Post Meta */}
                <div className="wp-post-meta" data-testid={`meta-${post.slug}`}>
                  <div className="meta-author">
                    By <span className="author-name">{post.author.node.name}</span>
                  </div>
                  <div className="meta-date">
                    Published: {new Date(post.date).toLocaleDateString()}
                  </div>
                  {post.categories.nodes.length > 0 && (
                    <div className="meta-categories">
                      Categories: {post.categories.nodes.map(cat => cat.name).join(', ')}
                    </div>
                  )}
                </div>

                {post.excerpt.rendered && (
                  <div 
                    className="wp-post-excerpt"
                    data-testid={`excerpt-${post.slug}`}
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                )}
              </header>

              {/* Post Content */}
              <div 
                className="wp-post-body"
                data-testid={`content-${post.slug}`}
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />

              {/* Post Footer */}
              <footer className="wp-post-footer">
                {/* Tags */}
                {post.tags.nodes.length > 0 && (
                  <div className="post-tags" data-testid={`tags-${post.slug}`}>
                    <span className="tags-label">Tags:</span>
                    {post.tags.nodes.map((tag, index) => (
                      <span key={tag.slug} className="tag-item">
                        {tag.name}
                        {index < post.tags.nodes.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                )}

                {/* Updated Date */}
                <div className="post-updated">
                  Last updated: {new Date(post.modified).toLocaleDateString()}
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

export default WordPressPostTemplate;