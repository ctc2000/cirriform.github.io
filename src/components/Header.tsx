import { Button } from './ui/button';
import logoUrl from '@/assets/Logo.svg?url';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-200/50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-purple-500 to-blue-400 p-2 rounded-lg">
            <img src={logoUrl} alt="Cirriform Power" className="w-6 h-6" />
          </div>
          <div>
            <div className="text-gray-900">CIRRIFORM POWER</div>
            <div className="text-xs text-gray-600">Renewable Energy Design & Consulting</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">
            Services
          </a>
          <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
            About
          </a>
          <Button className="bg-gradient-to-r from-purple-500 to-blue-400 hover:from-purple-600 hover:to-blue-500 text-white">
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
}