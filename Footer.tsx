import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2B54F0] via-[#8B4BDB] to-[#E85B86] text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          {/* Logo and Copyright */}
          <div className="flex items-center mb-8 md:mb-0">
            <div className="mr-4">
              <img 
                src="/src/assets/logo-footer.png" 
                alt="cXentral Logo" 
                className="w-10 h-10"
              />
            </div>
            <div>
              <p className="text-sm">
                Powered by cXentral<sup>®</sup> | cXonnect Hub™ | cXintegrate Hub™
              </p>
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} cXentral. All rights reserved.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium text-white mb-4">Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/products/cx-platform">Composable CX Platform</Link></li>
                <li><Link href="/products/marketplace">Universal Marketplace Hub</Link></li>
                <li><Link href="/products/ai-network">AI Agent Network</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/developers">Developer Portal</Link></li>
                <li><Link href="/partners">Partner Portal</Link></li>
                <li><Link href="/documentation">Documentation</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Suite Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-800">
          <div>
            <h4 className="font-semibold text-white mb-2">cXonnect Hub™</h4>
            <p className="text-sm text-gray-400">Community & Collaboration</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">cXintegrate Hub™</h4>
            <p className="text-sm text-gray-400">Integration & APIs</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">cXperience Hub™</h4>
            <p className="text-sm text-gray-400">Experience Management</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">cXcelerate Hub™</h4>
            <p className="text-sm text-gray-400">Innovation & Growth</p>
          </div>
        </div>
      </div>
    </footer>
  );
}