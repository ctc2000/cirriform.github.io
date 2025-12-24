import { Zap, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-purple-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-purple-500 to-blue-400 p-2 rounded-lg">
                <img src="/Logo.svg" alt="Cirriform Power Logo" className="h-6" />
              </div>
              <div>
                <div className="text-gray-900">CIRRIFORM POWER</div>
                <div className="text-xs text-gray-600">Renewable Energy Design & Consulting</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Innovation to support your iterations. 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-600">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-500" />
                <span>info@cirriformpower.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-500" />
                <span>+1 (719) 776-0831</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-500" />
                <span>4845 Pearl East Cir Ste 118 #634673 <br />Boulder, CO 80301</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2025 CIRRIFORM POWER LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
