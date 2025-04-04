import { Switch, Route } from "wouter";
import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import MarketplacePage from "@/pages/MarketplacePage";
import DeveloperPortalPage from "@/pages/DeveloperPortalPage";
import PartnerPortalPage from "@/pages/PartnerPortalPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/products/:slug" component={ProductPage} />
          <Route path="/marketplace" component={MarketplacePage} />
          <Route path="/developers" component={DeveloperPortalPage} />
          <Route path="/partners" component={PartnerPortalPage} />
          <Route>404 Page Not Found</Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
