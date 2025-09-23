import { cn } from "@/lib/utils";
import synchronyLogo from "@/assets/synchrony-logo.svg";

interface PageHeroProps {
  title: string;
  description?: string;
  image?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({ 
  title, 
  description, 
  image,
  className,
  children 
}: PageHeroProps) {
  return (
    <div className={cn(
      "relative min-h-[600px] bg-gradient-to-br from-black to-gray-900 flex items-center overflow-hidden py-24",
      image && "bg-cover bg-center bg-no-repeat",
      className
    )} style={image ? { backgroundImage: `url(${image})` } : undefined}>
      {/* Diagonal pattern overlay */}
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px',
        }}
      />
      
      {/* Dark gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      
      <div className="container max-w-5xl relative z-10 py-36">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
          {/* Future breadcrumbs will go here */}
          {children}
        </div>
      </div>
    </div>
  );
}

interface ContentSectionProps {
  className?: string;
  children: React.ReactNode;
  showSidebar?: boolean;
}

export function ContentSection({
  className,
  children,
  showSidebar = true
}: ContentSectionProps) {
  if (!showSidebar) {
    return (
      <div className={cn(
        "container max-w-4xl py-8 md:py-12",
        className
      )}>
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "container max-w-6xl py-8 md:py-12",
      className
    )}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
        <PageSidebar />
      </div>
    </div>
  );
}

interface SidebarSectionProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

function SidebarSection({ title, className, children }: SidebarSectionProps) {
  return (
    <div className={cn("bg-white shadow-md rounded-lg overflow-hidden", className)}>
      <div className="bg-black text-white py-3 px-4">
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

interface PageSidebarProps {
  className?: string;
}

export function PageSidebar({ className }: PageSidebarProps) {
  return (
    <aside className={cn("space-y-6", className)}>
      {/* Contact Section */}
      <SidebarSection title="Contact Us">
        <div className="space-y-4">
          <div>
            <div className="font-semibold mb-1">Address:</div>
            <a 
              href="https://goo.gl/maps/123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800 hover:underline"
            >
              349 Oriskany Blvd. Whitesboro, NY
            </a>
          </div>
          <div>
            <div className="font-semibold mb-1">Text or Call:</div>
            <a href="tel:3156247344" className="text-red-600 hover:text-red-800 hover:underline">
              (315) 624-7344
            </a>
          </div>
          <div>
            <div className="font-semibold mb-1">Email:</div>
            <a href="mailto:info@newyorksash.com" className="text-red-600 hover:text-red-800 hover:underline">
              info@newyorksash.com
            </a>
          </div>
        </div>
      </SidebarSection>

      {/* Service Section */}
      <SidebarSection title="Service">
        <div className="space-y-3">
          <a href="/request-service" className="block text-red-600 hover:text-red-800 hover:underline">
            Request Service
          </a>
          <a href="/reviews" className="block text-red-600 hover:text-red-800 hover:underline">
            Window, Siding & Bath Installation Reviews
          </a>
          <a href="/financing" className="block text-red-600 hover:text-red-800 hover:underline">
            Apply For Financing
          </a>
        </div>
      </SidebarSection>

      {/* Quick Actions */}
      <div className="space-y-4">
        <a 
          href="/schedule" 
          className="flex items-center justify-center gap-2 w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
        >
          <i className="bi bi-calendar-check text-xl"></i>
          SCHEDULE A FREE ESTIMATE
        </a>
        <a 
          href="/quote" 
          className="flex items-center justify-center gap-2 w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
        >
          <i className="bi bi-calculator text-xl"></i>
          GET A PRICE QUOTE
        </a>
      </div>

      {/* Financing Banner */}
      <div className="bg-black text-white p-4 rounded-lg">
        <div className="flex justify-start mb-3">
          <img src={synchronyLogo} alt="Synchrony" className="h-8 w-auto" />
        </div>
        <div className="text-yellow-400 font-bold">AVAILABLE NOW:</div>
        <div className="text-2xl font-bold mb-2">Promotional Financing</div>
        <div className="mb-4">with the Home Design credit card.*</div>
        <a 
          href="/apply" 
          className="inline-block bg-yellow-400 text-black px-6 py-2 rounded font-bold hover:bg-yellow-500 transition-colors"
        >
          APPLY TODAY
        </a>
        <div className="text-xs mt-2">*Subject to credit approval.</div>
      </div>
    </aside>
  );
}

interface PageErrorProps {
  title?: string;
  message?: string;
  action?: React.ReactNode;
}

export function PageError({
  title = "Page Not Found",
  message = "The page you're looking for doesn't exist or has been moved.",
  action
}: PageErrorProps) {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground mb-8">{message}</p>
        {action}
      </div>
    </div>
  );
}

interface PageSkeletonProps {
  hasHero?: boolean;
  hasSidebar?: boolean;
}

export function PageSkeleton({
  hasHero = true,
  hasSidebar = false
}: PageSkeletonProps) {
  return (
    <div className="animate-pulse">
      {hasHero && (
        <div className="h-[300px] bg-muted" />
      )}
      <div className="container py-8 md:py-12">
        {hasSidebar ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-4 bg-muted rounded w-full" />
              ))}
            </div>
            <div className="space-y-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="h-4 bg-muted rounded w-full" />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 bg-muted rounded w-full" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}