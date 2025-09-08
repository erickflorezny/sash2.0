import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Chat from "@/pages/chat";
import NotFound from "@/pages/not-found";
import WordPressPageTemplate from "@/components/WordPressPageTemplate";
import WordPressPostTemplate from "@/components/WordPressPostTemplate";

// Route wrapper components to handle router params
function WordPressPageRoute({ params }: { params: { slug: string } }) {
  return <WordPressPageTemplate slug={params.slug} />;
}

function WordPressPostRoute({ params }: { params: { slug: string } }) {
  return <WordPressPostTemplate slug={params.slug} />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/chat" component={Chat} />
      
      {/* WordPress Post Routes */}
      <Route path="/blog/:slug" component={WordPressPostRoute} />
      <Route path="/post/:slug" component={WordPressPostRoute} />
      
      {/* WordPress Page Routes - These should come last to catch all other URLs */}
      <Route path="/:slug" component={WordPressPageRoute} />
      
      {/* 404 Fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
