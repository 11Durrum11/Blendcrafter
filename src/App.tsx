import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Builder from "@/pages/builder";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Builder} />
      <Route path="/step/:step" component={Builder} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router hook={useHashLocation}>
        <AppRouter />
      </Router>
    </TooltipProvider>
  );
}

export default App;
