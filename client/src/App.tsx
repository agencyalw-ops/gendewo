// Range Journal reminder: route structure should preserve a clear escape route on every page and keep the same editorial shell.

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Latihan from "./pages/Latihan";
import Program from "./pages/Program";
import Pelatih from "./pages/Pelatih";
import Kompetisi from "./pages/Kompetisi";
import Membership from "./pages/Membership";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/latihan" component={Latihan} />
      <Route path="/program" component={Program} />
      <Route path="/pelatih" component={Pelatih} />
      <Route path="/kompetisi" component={Kompetisi} />
      <Route path="/keanggotaan" component={Membership} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
