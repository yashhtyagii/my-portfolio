import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { ThemeProvider } from '@/components/theme-provider';

// Pages & Components
import Home from '@/pages/Home';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgress from '@/components/ScrollProgress';
import Chatbot from '@/components/Chatbot';
import { Toaster as SonnerToaster } from 'sonner';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LoadingScreen />
          <ScrollProgress />
          {/* base="/my-portfolio" strips the GitHub Pages prefix before matching routes */}
          <WouterRouter base="/my-portfolio">
            <Router />
          </WouterRouter>
          <Chatbot />
          <Toaster />
          <SonnerToaster position="bottom-left" theme="system" />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
