import { Twitter, Facebook, Instagram, Linkedin, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            <span className="text-lg font-bold text-white">SAFETY ALERT</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-8">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
              About
            </a>
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
              Contact Us
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Safety Alert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
