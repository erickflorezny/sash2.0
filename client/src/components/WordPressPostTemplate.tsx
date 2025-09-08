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
    // Show dummy blog content while WordPress is not connected
    return (
      <div className="wp-post-container">
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 col-md-4">
              <div className="wp-page-sidebar">
                <h4>Recent Posts</h4>
                <ul className="sidebar-nav">
                  <li><a href="/blog/energy-efficient-windows">Energy Efficient Windows Guide</a></li>
                  <li><a href="/blog/bathroom-renovation-tips">Bathroom Renovation Tips</a></li>
                  <li><a href="/blog/siding-maintenance">Siding Maintenance Guide</a></li>
                  <li><a href="/blog/door-security">Door Security Features</a></li>
                </ul>
                
                <div className="sidebar-cta">
                  <h5>Get Updates</h5>
                  <p>Subscribe to our newsletter for home improvement tips!</p>
                  <a href="/newsletter" className="btn btn-outline-primary btn-sm">
                    Subscribe Now
                  </a>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="col-lg-9 col-md-8">
              <div className="wp-post-content">
                {/* Featured Image */}
                <div className="wp-post-featured-image">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop"
                    alt="Home improvement blog post"
                    className="img-fluid"
                    data-testid={`img-featured-${slug}`}
                  />
                </div>

                {/* Post Header */}
                <header className="wp-post-header">
                  <h1 className="wp-post-title" data-testid={`title-${slug}`}>
                    {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Guide
                  </h1>
                  
                  <div className="wp-post-meta" data-testid={`meta-${slug}`}>
                    <div className="meta-author">
                      By <span className="author-name">New York Sash Team</span>
                    </div>
                    <div className="meta-date">
                      Published: {new Date().toLocaleDateString()}
                    </div>
                    <div className="meta-categories">
                      Categories: Home Improvement, Tips
                    </div>
                  </div>

                  <div className="wp-post-excerpt" data-testid={`excerpt-${slug}`}>
                    Expert advice and insights for your home improvement projects.
                  </div>
                </header>

                {/* Post Content */}
                <div className="wp-post-body" data-testid={`content-${slug}`}>
                  <h2>Professional Home Improvement Insights</h2>
                  <p>Welcome to our home improvement blog! Here you'll find expert tips, guides, and insights to help you make informed decisions about your home renovation projects.</p>
                  
                  <h3>Why Choose Professional Installation?</h3>
                  <p>Professional installation ensures your home improvement projects are completed safely, efficiently, and to the highest standards. Our experienced team brings years of expertise to every project.</p>
                  
                  <div className="content-images">
                    <img 
                      src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop"
                      alt="Professional installation work"
                      className="img-fluid content-image"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop"
                      alt="Quality craftsmanship"
                      className="img-fluid content-image"
                    />
                  </div>
                  
                  <h3>Get Started Today</h3>
                  <p>Ready to transform your home? Contact our team for a free consultation and learn how we can help bring your vision to life.</p>
                </div>

                {/* Post Footer */}
                <footer className="wp-post-footer">
                  <div className="post-tags" data-testid={`tags-${slug}`}>
                    <span className="tags-label">Tags:</span>
                    <span className="tag-item">Home Improvement, Professional Installation, Quality</span>
                  </div>

                  <div className="post-updated">
                    Last updated: {new Date().toLocaleDateString()}
                  </div>
                </footer>

                {/* Call to Action */}
                <div className="wp-page-cta">
                  <div className="cta-content">
                    <h3>Ready for Your Next Project?</h3>
                    <p>Let our experts help you transform your home with professional installation and quality craftsmanship.</p>
                    <div className="cta-buttons">
                      <a href="tel:+15184442321" className="btn btn-primary">
                        Call Now: (518) 444-2321
                      </a>
                      <a href="/consultation" className="btn btn-outline-primary">
                        Free Consultation
                      </a>
                    </div>
                  </div>
                </div>
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