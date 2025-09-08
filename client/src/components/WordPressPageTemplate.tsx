import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'wouter';
import { fetchPageBySlug } from '@/lib/wordpressClient';
import type { WordPressPage } from '@shared/schema';
import { useEffect, useState } from 'react';
import logoImage from '@assets/new-york-sash_1756146470803.png';

const getRelatedServices = (currentSlug: string) => {
  const services = {
    windows: [
      { title: 'Replacement Windows', href: '/window-replacement' },
      { title: 'New Construction', href: '/new-construction-windows' },
      { title: 'Energy Efficient', href: '/energy-efficient-windows' },
      { title: 'Window Types', href: '/window-types' }
    ],
    'window-replacement': [
      { title: 'All Windows', href: '/windows' },
      { title: 'New Construction', href: '/new-construction-windows' },
      { title: 'Energy Efficient', href: '/energy-efficient-windows' },
      { title: 'Window Types', href: '/window-types' }
    ],
    'new-construction-windows': [
      { title: 'All Windows', href: '/windows' },
      { title: 'Replacement Windows', href: '/window-replacement' },
      { title: 'Energy Efficient', href: '/energy-efficient-windows' },
      { title: 'Window Types', href: '/window-types' }
    ],
    'energy-efficient-windows': [
      { title: 'All Windows', href: '/windows' },
      { title: 'Replacement Windows', href: '/window-replacement' },
      { title: 'New Construction', href: '/new-construction-windows' },
      { title: 'Window Types', href: '/window-types' }
    ],
    'window-types': [
      { title: 'All Windows', href: '/windows' },
      { title: 'Replacement Windows', href: '/window-replacement' },
      { title: 'New Construction', href: '/new-construction-windows' },
      { title: 'Energy Efficient', href: '/energy-efficient-windows' }
    ],
    siding: [
      { title: 'Vinyl Siding', href: '/vinyl-siding' },
      { title: 'Fiber Cement', href: '/fiber-cement-siding' },
      { title: 'Siding Installation', href: '/siding-installation' },
      { title: 'Siding Repair', href: '/siding-repair' }
    ],
    'vinyl-siding': [
      { title: 'All Siding', href: '/siding' },
      { title: 'Fiber Cement', href: '/fiber-cement-siding' },
      { title: 'Siding Installation', href: '/siding-installation' },
      { title: 'Siding Repair', href: '/siding-repair' }
    ],
    'fiber-cement-siding': [
      { title: 'All Siding', href: '/siding' },
      { title: 'Vinyl Siding', href: '/vinyl-siding' },
      { title: 'Siding Installation', href: '/siding-installation' },
      { title: 'Siding Repair', href: '/siding-repair' }
    ],
    'siding-installation': [
      { title: 'All Siding', href: '/siding' },
      { title: 'Vinyl Siding', href: '/vinyl-siding' },
      { title: 'Fiber Cement', href: '/fiber-cement-siding' },
      { title: 'Siding Repair', href: '/siding-repair' }
    ],
    'siding-repair': [
      { title: 'All Siding', href: '/siding' },
      { title: 'Vinyl Siding', href: '/vinyl-siding' },
      { title: 'Fiber Cement', href: '/fiber-cement-siding' },
      { title: 'Siding Installation', href: '/siding-installation' }
    ],
    bathroom: [
      { title: 'Full Remodel', href: '/bathroom-remodeling' },
      { title: 'Walk-in Showers', href: '/walk-in-showers' },
      { title: 'Tub to Shower', href: '/tub-to-shower' },
      { title: 'Bathroom Repair', href: '/bathroom-repair' }
    ],
    'bathroom-remodeling': [
      { title: 'All Bathrooms', href: '/bathroom' },
      { title: 'Walk-in Showers', href: '/walk-in-showers' },
      { title: 'Tub to Shower', href: '/tub-to-shower' },
      { title: 'Bathroom Repair', href: '/bathroom-repair' }
    ],
    'walk-in-showers': [
      { title: 'All Bathrooms', href: '/bathroom' },
      { title: 'Full Remodel', href: '/bathroom-remodeling' },
      { title: 'Tub to Shower', href: '/tub-to-shower' },
      { title: 'Bathroom Repair', href: '/bathroom-repair' }
    ],
    'tub-to-shower': [
      { title: 'All Bathrooms', href: '/bathroom' },
      { title: 'Full Remodel', href: '/bathroom-remodeling' },
      { title: 'Walk-in Showers', href: '/walk-in-showers' },
      { title: 'Bathroom Repair', href: '/bathroom-repair' }
    ],
    'bathroom-repair': [
      { title: 'All Bathrooms', href: '/bathroom' },
      { title: 'Full Remodel', href: '/bathroom-remodeling' },
      { title: 'Walk-in Showers', href: '/walk-in-showers' },
      { title: 'Tub to Shower', href: '/tub-to-shower' }
    ],
    doors: [
      { title: 'Entry Doors', href: '/entry-doors' },
      { title: 'Patio Doors', href: '/patio-doors' },
      { title: 'Storm Doors', href: '/storm-doors' },
      { title: 'French Doors', href: '/french-doors' }
    ],
    'entry-doors': [
      { title: 'All Doors', href: '/doors' },
      { title: 'Patio Doors', href: '/patio-doors' },
      { title: 'Storm Doors', href: '/storm-doors' },
      { title: 'French Doors', href: '/french-doors' }
    ],
    'patio-doors': [
      { title: 'All Doors', href: '/doors' },
      { title: 'Entry Doors', href: '/entry-doors' },
      { title: 'Storm Doors', href: '/storm-doors' },
      { title: 'French Doors', href: '/french-doors' }
    ],
    'storm-doors': [
      { title: 'All Doors', href: '/doors' },
      { title: 'Entry Doors', href: '/entry-doors' },
      { title: 'Patio Doors', href: '/patio-doors' },
      { title: 'French Doors', href: '/french-doors' }
    ],
    'french-doors': [
      { title: 'All Doors', href: '/doors' },
      { title: 'Entry Doors', href: '/entry-doors' },
      { title: 'Patio Doors', href: '/patio-doors' },
      { title: 'Storm Doors', href: '/storm-doors' }
    ]
  };

  return services[currentSlug as keyof typeof services] || [
    { title: 'Windows', href: '/windows' },
    { title: 'Siding', href: '/siding' },
    { title: 'Bathrooms', href: '/bathroom' },
    { title: 'Doors', href: '/doors' }
  ];
};

// Dummy content for development/fallback
interface DummyContent {
  title: string;
  excerpt: string;
  content: JSX.Element;
  featuredImage: string;
  additionalImages: Array<{ src: string; alt: string }>;
}

function getDummyContentForSlug(slug: string): DummyContent {
  const dummyContent: Record<string, DummyContent> = {
    windows: {
      title: 'Professional Window Installation & Replacement',
      excerpt: 'Transform your home with energy-efficient windows that combine beauty, performance, and lasting value.',
      featuredImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
      content: (
        <div>
          <h2>Why Choose Our Window Services?</h2>
          <p>Our premium window installation services deliver exceptional energy efficiency, enhanced curb appeal, and long-lasting performance. We specialize in both new construction and replacement windows.</p>
          
          <h3>Our Window Options</h3>
          <ul>
            <li><strong>Double-Hung Windows</strong> - Classic style with easy maintenance</li>
            <li><strong>Casement Windows</strong> - Maximum ventilation and energy efficiency</li>
            <li><strong>Bay & Bow Windows</strong> - Expand your view and interior space</li>
            <li><strong>Sliding Windows</strong> - Modern convenience with smooth operation</li>
          </ul>
          
          <h3>Energy Efficiency Benefits</h3>
          <p>Our windows feature advanced Low-E glass coatings, argon gas fills, and insulated frames that can reduce your energy bills by up to 25%.</p>
        </div>
      ),
      additionalImages: [
        { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop', alt: 'Modern home with new windows' },
        { src: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop', alt: 'Window installation process' }
      ]
    },
    siding: {
      title: 'Premium Siding Installation & Repair',
      excerpt: 'Protect and beautify your home with durable, low-maintenance siding solutions that stand the test of time.',
      featuredImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=400&fit=crop',
      content: (
        <div>
          <h2>Complete Siding Solutions</h2>
          <p>Our expert siding installation transforms your home's exterior while providing superior protection against the elements. We offer a variety of materials and styles to match your vision.</p>
          
          <h3>Siding Materials We Install</h3>
          <ul>
            <li><strong>Vinyl Siding</strong> - Low maintenance and cost-effective</li>
            <li><strong>Fiber Cement</strong> - Durable and fire-resistant</li>
            <li><strong>Wood Siding</strong> - Classic beauty with natural appeal</li>
            <li><strong>Metal Siding</strong> - Modern style with excellent durability</li>
          </ul>
          
          <h3>Professional Installation</h3>
          <p>Our certified installers ensure proper ventilation, moisture barriers, and precise fitting for maximum performance and longevity.</p>
        </div>
      ),
      additionalImages: [
        { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop', alt: 'Beautiful home with new siding' },
        { src: 'https://images.unsplash.com/photo-1521951843215-1c9e8e6ad666?w=400&h=300&fit=crop', alt: 'Siding installation details' }
      ]
    },
    bathroom: {
      title: 'Complete Bathroom Remodeling',
      excerpt: 'Create your dream bathroom with our full-service remodeling solutions, from design to completion.',
      featuredImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=400&fit=crop',
      content: (
        <div>
          <h2>Transform Your Bathroom</h2>
          <p>Our comprehensive bathroom remodeling services turn your vision into reality. From luxury master baths to functional family bathrooms, we handle every detail.</p>
          
          <h3>Our Bathroom Services</h3>
          <ul>
            <li><strong>Full Bathroom Remodels</strong> - Complete transformation</li>
            <li><strong>Shower & Tub Installation</strong> - Custom solutions</li>
            <li><strong>Vanity & Cabinet Work</strong> - Storage and style</li>
            <li><strong>Tile & Flooring</strong> - Beautiful, water-resistant options</li>
          </ul>
          
          <h3>Quality Craftsmanship</h3>
          <p>Our licensed contractors ensure proper plumbing, electrical, and waterproofing for a bathroom that looks great and functions perfectly for years to come.</p>
        </div>
      ),
      additionalImages: [
        { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop', alt: 'Luxury bathroom remodel' },
        { src: 'https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=400&h=300&fit=crop', alt: 'Modern bathroom design' }
      ]
    },
    doors: {
      title: 'Entry Doors & Patio Door Installation',
      excerpt: 'Enhance your home\'s security, energy efficiency, and curb appeal with professionally installed doors.',
      featuredImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=400&fit=crop',
      content: (
        <div>
          <h2>Professional Door Installation</h2>
          <p>Our door installation services improve your home's security, energy efficiency, and aesthetic appeal. We install entry doors, patio doors, and storm doors with precision and care.</p>
          
          <h3>Door Types We Install</h3>
          <ul>
            <li><strong>Entry Doors</strong> - Steel, fiberglass, and wood options</li>
            <li><strong>Patio Doors</strong> - Sliding and French door styles</li>
            <li><strong>Storm Doors</strong> - Added protection and ventilation</li>
            <li><strong>Security Doors</strong> - Enhanced protection features</li>
          </ul>
          
          <h3>Energy Efficiency</h3>
          <p>Our doors feature weatherstripping, insulated cores, and high-performance glass to keep your home comfortable year-round.</p>
        </div>
      ),
      additionalImages: [
        { src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop', alt: 'Beautiful front door installation' },
        { src: 'https://images.unsplash.com/photo-1585128903026-5a0d8ba8c7b3?w=400&h=300&fit=crop', alt: 'Patio door installation' }
      ]
    },
  };

  return dummyContent[slug] || {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} Services`,
    excerpt: 'Professional home improvement services tailored to your needs.',
    featuredImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop',
    content: (
      <div>
        <h2>Professional Service</h2>
        <p>We provide expert home improvement services with quality craftsmanship and attention to detail.</p>
        <p>Contact us today to learn more about our {slug} services and get your free consultation.</p>
      </div>
    ),
    additionalImages: [
      { src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop', alt: 'Professional installation' },
      { src: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop', alt: 'Quality workmanship' }
    ]
  };
}

interface WordPressPageTemplateProps {
  slug?: string;
}

export function WordPressPageTemplate({ slug: propSlug }: WordPressPageTemplateProps) {
  const params = useParams();
  const slug = propSlug || params.slug || '';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    // Show dummy content while WordPress is not connected
    const dummyContent = getDummyContentForSlug(slug);
    
    return (
      <div className="wp-page-container">
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
                <Link href="/windows" className="nav-main" data-testid="nav-windows" onClick={() => setIsMenuOpen(false)}>Windows</Link>
                <div className="nav-submenu">
                  <Link href="/window-replacement" onClick={() => setIsMenuOpen(false)}>Replacement Windows</Link>
                  <Link href="/new-construction-windows" onClick={() => setIsMenuOpen(false)}>New Construction</Link>
                  <Link href="/energy-efficient-windows" onClick={() => setIsMenuOpen(false)}>Energy Efficient</Link>
                  <Link href="/window-types" onClick={() => setIsMenuOpen(false)}>Window Types</Link>
                </div>
              </div>
              
              <div className="nav-section">
                <Link href="/siding" className="nav-main" data-testid="nav-siding" onClick={() => setIsMenuOpen(false)}>Siding</Link>
                <div className="nav-submenu">
                  <Link href="/vinyl-siding" onClick={() => setIsMenuOpen(false)}>Vinyl Siding</Link>
                  <Link href="/fiber-cement-siding" onClick={() => setIsMenuOpen(false)}>Fiber Cement</Link>
                  <Link href="/siding-installation" onClick={() => setIsMenuOpen(false)}>Siding Installation</Link>
                  <Link href="/siding-repair" onClick={() => setIsMenuOpen(false)}>Siding Repair</Link>
                </div>
              </div>
              
              <div className="nav-section">
                <Link href="/bathroom" className="nav-main" data-testid="nav-bath" onClick={() => setIsMenuOpen(false)}>Bathrooms</Link>
                <div className="nav-submenu">
                  <Link href="/bathroom-remodeling" onClick={() => setIsMenuOpen(false)}>Full Remodel</Link>
                  <Link href="/walk-in-showers" onClick={() => setIsMenuOpen(false)}>Walk-in Showers</Link>
                  <Link href="/tub-to-shower" onClick={() => setIsMenuOpen(false)}>Tub to Shower</Link>
                  <Link href="/bathroom-repair" onClick={() => setIsMenuOpen(false)}>Bathroom Repair</Link>
                </div>
              </div>
              
              <div className="nav-section">
                <Link href="/doors" className="nav-main" data-testid="nav-doors" onClick={() => setIsMenuOpen(false)}>Doors</Link>
                <div className="nav-submenu">
                  <Link href="/entry-doors" onClick={() => setIsMenuOpen(false)}>Entry Doors</Link>
                  <Link href="/patio-doors" onClick={() => setIsMenuOpen(false)}>Patio Doors</Link>
                  <Link href="/storm-doors" onClick={() => setIsMenuOpen(false)}>Storm Doors</Link>
                  <Link href="/french-doors" onClick={() => setIsMenuOpen(false)}>French Doors</Link>
                </div>
              </div>
              
              <div className="nav-section">
                <Link href="/about" className="nav-main" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link href="/gallery" className="nav-main" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                <Link href="/testimonials" className="nav-main" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
                <Link href="/contact" className="nav-main" onClick={() => setIsMenuOpen(false)}>Contact</Link>
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
                <h4>Related Services</h4>
                <ul className="sidebar-nav">
                  {getRelatedServices(slug).map((service, index) => (
                    <li key={index}>
                      <Link href={service.href}>{service.title}</Link>
                    </li>
                  ))}
                </ul>
                
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
              <div className="wp-page-content">
                {/* Page Header */}
                <header className="wp-page-header">
                  <h1 className="wp-page-title" data-testid={`title-${slug}`}>
                    {dummyContent.title}
                  </h1>
                  <div className="wp-page-excerpt" data-testid={`excerpt-${slug}`}>
                    {dummyContent.excerpt}
                  </div>
                </header>

                {/* Featured Image */}
                <div className="wp-page-featured-image">
                  <img 
                    src={dummyContent.featuredImage}
                    alt={dummyContent.title}
                    className="img-fluid"
                    data-testid={`img-featured-${slug}`}
                  />
                </div>

                {/* Page Content */}
                <div className="wp-page-body" data-testid={`content-${slug}`}>
                  {dummyContent.content}
                  
                  {/* Additional Images */}
                  <div className="content-images">
                    {dummyContent.additionalImages.map((img, index) => (
                      <img 
                        key={index}
                        src={img.src}
                        alt={img.alt}
                        className="img-fluid content-image"
                      />
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="wp-page-cta">
                  <div className="cta-content">
                    <h3>Ready to Get Started?</h3>
                    <p>Contact us today for a free consultation and estimate.</p>
                    <div className="cta-buttons">
                      <a href="tel:+15184442321" className="btn btn-primary">
                        Call Now: (518) 444-2321
                      </a>
                      <a href="/consultation" className="btn btn-outline-primary">
                        Schedule Consultation
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