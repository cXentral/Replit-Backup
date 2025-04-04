import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#1E40AF] via-[#6B46C1] to-[#DB2777] text-white sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="container mx-auto px-4 h-20 flex items-center justify-between"
      >
        <Link href="/">
          <Button variant="link" className="font-bold text-2xl text-white hover:text-gray-200 p-0 transition-all duration-300">
            <span className="sr-only">cXentral</span>
            <motion.img 
              src="/src/assets/cXentral Logo - cXentral_Logo_400x100_hero_gradient.png"
              alt="cXentral"
              className="h-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Button>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-gray-200 bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10 transition-colors duration-300">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg"
                >
                  <Link href="/solutions/cx-platform">
                    <NavigationMenuLink className="block p-4 hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-[1.02]">
                      <div className="font-medium text-gray-900 mb-1">Composable CX Platform</div>
                      <p className="text-sm text-gray-600">Transform your customer experience infrastructure</p>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/solutions/marketplace">
                    <NavigationMenuLink className="block p-4 hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-[1.02]">
                      <div className="font-medium text-gray-900 mb-1">Universal Marketplace</div>
                      <p className="text-sm text-gray-600">Connect and extend your ecosystem</p>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/solutions/ai-network">
                    <NavigationMenuLink className="block p-4 hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-[1.02]">
                      <div className="font-medium text-gray-900 mb-1">AI Agent Network</div>
                      <p className="text-sm text-gray-600">Intelligent automation at scale</p>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/solutions/integration-hub">
                    <NavigationMenuLink className="block p-4 hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-[1.02]">
                      <div className="font-medium text-gray-900 mb-1">Integration Hub</div>
                      <p className="text-sm text-gray-600">Seamless enterprise connectivity</p>
                    </NavigationMenuLink>
                  </Link>
                </motion.div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {["Marketplace", "Developers", "Partners"].map((item) => (
              <NavigationMenuItem key={item}>
                <Link href={`/${item.toLowerCase()}`}>
                  <Button variant="link" className="text-white hover:text-gray-200 transition-colors duration-300">
                    {item}
                  </Button>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white/95 backdrop-blur-sm">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/solutions">
                  <Button variant="ghost" className="w-full justify-start text-lg font-medium">
                    Solutions
                  </Button>
                </Link>
                {["Marketplace", "Developers", "Partners"].map((item) => (
                  <Link key={item} href={`/${item.toLowerCase()}`}>
                    <Button variant="ghost" className="w-full justify-start text-lg font-medium">
                      {item}
                    </Button>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="text-white hover:text-gray-200 transition-colors duration-300"
          >
            Sign In
          </Button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 transition-all duration-300"
              size="lg"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}