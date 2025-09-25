import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Chat from "@/pages/chat";
import About from "@/pages/about";
import Windows from "@/pages/windows";
import Siding from "@/pages/siding";
import Bathrooms from "@/pages/bathrooms";
import Doors from "@/pages/doors";
import Contact from "@/pages/Contact";
import ComingSoon from "@/pages/ComingSoon";
import NotFound from "@/pages/not-found";
import Header from "@/components/Header";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/chat" component={Chat} />
      <Route path="/about" component={About} />
      <Route path="/windows" component={Windows} />
      <Route path="/siding" component={Siding} />
      <Route path="/bathrooms" component={Bathrooms} />
      <Route path="/doors" component={Doors} />
      <Route path="/contact" component={Contact} />
      <Route path="/coming-soon" component={ComingSoon} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Header />
        <main>
          <Router />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
