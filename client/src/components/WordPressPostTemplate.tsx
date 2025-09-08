import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'wouter';
import { fetchPostBySlug } from '@/lib/wordpressClient';
import type { WordPressPost } from '@shared/schema';
import { useEffect, useState } from 'react';
import logoImage from '@assets/new-york-sash_1756146470803.png';

interface WordPressPostTemplateProps {
  slug?: string;
}

export function WordPressPostTemplate({ slug: propSlug }: WordPressPostTemplateProps) {
  const params = useParams();
  const slug = propSlug || params.slug || '';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{[key: string]: boolean}>({});
  
  const toggleDropdown = (section: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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
        {/* Top Bar */}
        <div className="wp-top-bar">
          <div className="container-fluid">
            <div className="top-bar-content">
              <Link href="/" className="top-bar-logo">
                <img src={logoImage} alt="New York Sash" />
              </Link>
              
              <button 
                className="top-bar-menu-btn"
                onClick={() => setIsMenuOpen(true)}
                data-testid="top-bar-menu"
                aria-label="Open menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        {/* Full Page Navigation Overlay */}
        {isMenuOpen && (
          <div className="nav-overlay">
            <button 
              className="close-btn"
              onClick={() => setIsMenuOpen(false)}
              data-testid="close-menu"
              aria-label="Close menu"
            >
              ×
            </button>
            <nav className="nav-links">
              <div className="nav-section">
                <Link href="/about" className="nav-main" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                <div className="nav-submenu">
                  <Link href="/showroom" onClick={() => setIsMenuOpen(false)}>Showroom</Link>
                  <Link href="/staff" onClick={() => setIsMenuOpen(false)}>Meet Our Team</Link>
                  <Link href="/jobs" onClick={() => setIsMenuOpen(false)}>Job Openings</Link>
                </div>
              </div>
              
              <div className="nav-section">
                <Link href="/windows" className="nav-main" data-testid="nav-windows" onClick={() => setIsMenuOpen(false)}>Windows</Link>
                <div className="nav-submenu">
                  <Link href="/windows/double-hung" onClick={() => setIsMenuOpen(false)}>Double Hung Windows</Link>
                  <Link href="/windows/bay-bow-picture-windows" onClick={() => setIsMenuOpen(false)}>Bay, Bow and Picture Windows</Link>
                  <Link href="/windows/slider-windows" onClick={() => setIsMenuOpen(false)}>Slider Windows</Link>
                  <Link href="/windows/vinyl-awning-windows" onClick={() => setIsMenuOpen(false)}>Awning Windows</Link>
                  <Link href="/windows/hopper-casement" onClick={() => setIsMenuOpen(false)}>Hopper Windows</Link>
                </div>
              </div>
              
              <div className="nav-section">
                <Link href="/siding" className="nav-main" data-testid="nav-siding" onClick={() => setIsMenuOpen(false)}>Siding</Link>
                <div className="nav-submenu">
                  <Link href="/siding/engineered-wood-siding" onClick={() => setIsMenuOpen(false)}>Engineered Wood Siding</Link>
                  <Link href="/siding/reinforced-vinyl-siding" onClick={() => setIsMenuOpen(false)}>Reinforced Vinyl Siding</Link>
                  <Link href="/siding/monogram-46-vinyl-clapboard-siding" onClick={() => setIsMenuOpen(false)}>Traditional Vinyl Siding</Link>
                  <Link href="/siding/shake-shingle-vinyl-siding" onClick={() => setIsMenuOpen(false)}>Cedar Shake Vinyl Siding</Link>
                  <Link href="/siding/board-batten-vinyl-siding" onClick={() => setIsMenuOpen(false)}>Board & Batten Vertical Vinyl Siding</Link>
                  <Link href="/siding/exteria-stacked-stone-vinyl-siding" onClick={() => setIsMenuOpen(false)}>Stacked Stone</Link>
                </div>
              </div>
              
              <div className="nav-section">
                <Link href="/bathrooms" className="nav-main" data-testid="nav-bath" onClick={() => setIsMenuOpen(false)}>Baths</Link>
                <div className="nav-submenu">
                  <Link href="/bathrooms/tub-shower-conversion" onClick={() => setIsMenuOpen(false)}>Tub To Shower Conversion</Link>
                  <Link href="/bathrooms/safety-tubs" onClick={() => setIsMenuOpen(false)}>Safety Tubs</Link>
                  <Link href="/bathrooms/premium-shower-doors" onClick={() => setIsMenuOpen(false)}>Shower Doors</Link>
                  <Link href="/bathrooms/toilets" onClick={() => setIsMenuOpen(false)}>Toilets</Link>
                  <Link href="/bathrooms/bathroom-accessories" onClick={() => setIsMenuOpen(false)}>Accessories</Link>
                  <Link href="/bathrooms/bathroom-color-texture-wall-options" onClick={() => setIsMenuOpen(false)}>Color & Texture Options</Link>
                </div>
              </div>
              
              <div className="nav-section">
                <Link href="/doors" className="nav-main" data-testid="nav-doors" onClick={() => setIsMenuOpen(false)}>Doors</Link>
                <div className="nav-submenu">
                  <Link href="/doors/entry-doors" onClick={() => setIsMenuOpen(false)}>Entry Doors</Link>
                  <Link href="/doors/storm-doors" onClick={() => setIsMenuOpen(false)}>Storm Doors</Link>
                  <Link href="/doors/patio-doors" onClick={() => setIsMenuOpen(false)}>Patio Doors</Link>
                </div>
              </div>
              
              <div className="nav-section">
                <Link href="/quote" className="nav-main" onClick={() => setIsMenuOpen(false)}>Free Quote</Link>
                <Link href="/financing" className="nav-main" onClick={() => setIsMenuOpen(false)}>Financing</Link>
                <Link href="/review-new-york-sash" className="nav-main" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
                <Link href="/chat" className="nav-main" data-testid="nav-chat" onClick={() => setIsMenuOpen(false)}>Chat with AI</Link>
              </div>
            </nav>
          </div>
        )}

        <div className="container-fluid">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 col-md-4">
              <div className="wp-page-sidebar">
                <h4>Our Services</h4>
                <div className="sidebar-dropdown-nav">
                  
                  {/* About Us */}
                  <div className="sidebar-section">
                    <button 
                      className={`sidebar-dropdown-toggle ${openDropdowns.about ? 'active' : ''}`}
                      onClick={() => toggleDropdown('about')}
                      data-testid="dropdown-about"
                    >
                      <span>About Us</span>
                      <i className={`bi ${openDropdowns.about ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                    </button>
                    <div className={`sidebar-dropdown-content ${openDropdowns.about ? 'open' : ''}`}>
                      <Link href="/showroom" data-testid="link-showroom">Showroom</Link>
                      <Link href="/staff" data-testid="link-staff">Meet Our Team</Link>
                      <Link href="/jobs" data-testid="link-jobs">Job Openings</Link>
                    </div>
                  </div>
                  
                  {/* Windows */}
                  <div className="sidebar-section">
                    <button 
                      className={`sidebar-dropdown-toggle ${openDropdowns.windows ? 'active' : ''}`}
                      onClick={() => toggleDropdown('windows')}
                      data-testid="dropdown-windows"
                    >
                      <span>Windows</span>
                      <i className={`bi ${openDropdowns.windows ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                    </button>
                    <div className={`sidebar-dropdown-content ${openDropdowns.windows ? 'open' : ''}`}>
                      <Link href="/windows/double-hung" data-testid="link-double-hung">Double Hung Windows</Link>
                      <Link href="/windows/bay-bow-picture-windows" data-testid="link-bay-bow">Bay, Bow and Picture Windows</Link>
                      <Link href="/windows/slider-windows" data-testid="link-slider">Slider Windows</Link>
                      <Link href="/windows/vinyl-awning-windows" data-testid="link-awning">Awning Windows</Link>
                      <Link href="/windows/hopper-casement" data-testid="link-hopper">Hopper Windows</Link>
                    </div>
                  </div>
                  
                  {/* Siding */}
                  <div className="sidebar-section">
                    <button 
                      className={`sidebar-dropdown-toggle ${openDropdowns.siding ? 'active' : ''}`}
                      onClick={() => toggleDropdown('siding')}
                      data-testid="dropdown-siding"
                    >
                      <span>Siding</span>
                      <i className={`bi ${openDropdowns.siding ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                    </button>
                    <div className={`sidebar-dropdown-content ${openDropdowns.siding ? 'open' : ''}`}>
                      <Link href="/siding/engineered-wood-siding" data-testid="link-engineered-wood">Engineered Wood Siding</Link>
                      <Link href="/siding/reinforced-vinyl-siding" data-testid="link-reinforced-vinyl">Reinforced Vinyl Siding</Link>
                      <Link href="/siding/monogram-46-vinyl-clapboard-siding" data-testid="link-traditional-vinyl">Traditional Vinyl Siding</Link>
                      <Link href="/siding/shake-shingle-vinyl-siding" data-testid="link-cedar-shake">Cedar Shake Vinyl Siding</Link>
                      <Link href="/siding/board-batten-vinyl-siding" data-testid="link-board-batten">Board & Batten Vertical Vinyl Siding</Link>
                      <Link href="/siding/exteria-stacked-stone-vinyl-siding" data-testid="link-stacked-stone">Stacked Stone</Link>
                    </div>
                  </div>
                  
                  {/* Baths */}
                  <div className="sidebar-section">
                    <button 
                      className={`sidebar-dropdown-toggle ${openDropdowns.baths ? 'active' : ''}`}
                      onClick={() => toggleDropdown('baths')}
                      data-testid="dropdown-baths"
                    >
                      <span>Baths</span>
                      <i className={`bi ${openDropdowns.baths ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                    </button>
                    <div className={`sidebar-dropdown-content ${openDropdowns.baths ? 'open' : ''}`}>
                      <Link href="/bathrooms/tub-shower-conversion" data-testid="link-tub-shower">Tub To Shower Conversion</Link>
                      <Link href="/bathrooms/safety-tubs" data-testid="link-safety-tubs">Safety Tubs</Link>
                      <Link href="/bathrooms/premium-shower-doors" data-testid="link-shower-doors">Shower Doors</Link>
                      <Link href="/bathrooms/toilets" data-testid="link-toilets">Toilets</Link>
                      <Link href="/bathrooms/bathroom-accessories" data-testid="link-accessories">Accessories</Link>
                      <Link href="/bathrooms/bathroom-color-texture-wall-options" data-testid="link-color-texture">Color & Texture Options</Link>
                    </div>
                  </div>
                  
                  {/* Doors */}
                  <div className="sidebar-section">
                    <button 
                      className={`sidebar-dropdown-toggle ${openDropdowns.doors ? 'active' : ''}`}
                      onClick={() => toggleDropdown('doors')}
                      data-testid="dropdown-doors"
                    >
                      <span>Doors</span>
                      <i className={`bi ${openDropdowns.doors ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                    </button>
                    <div className={`sidebar-dropdown-content ${openDropdowns.doors ? 'open' : ''}`}>
                      <Link href="/doors/entry-doors" data-testid="link-entry-doors">Entry Doors</Link>
                      <Link href="/doors/storm-doors" data-testid="link-storm-doors">Storm Doors</Link>
                      <Link href="/doors/patio-doors" data-testid="link-patio-doors">Patio Doors</Link>
                    </div>
                  </div>
                  
                </div>
                
                <div className="sidebar-cta">
                  <h5>Need Help?</h5>
                  <p>Get a free consultation today!</p>
                  <a href="tel:+15184442321" className="btn btn-outline-primary btn-sm">
                    Call (518) 444-2321
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