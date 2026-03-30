import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-primary text-white p-2 rounded-lg">
                <span className="font-bold text-xl tracking-tight">DAA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-none">
                  Dhanush
                </span>
                <span className="text-sm text-gray-400 font-medium leading-none">
                  Agro Agencies
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering farmers with high-quality agricultural inputs. Your trusted partner for better yields and sustainable farming since 2005.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-accent transition-colors text-sm">Our Products</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-accent transition-colors text-sm">Farmer Services</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-accent transition-colors text-sm">Knowledge Center</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Our Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products?category=pesticides" className="text-gray-400 hover:text-accent transition-colors text-sm">Pesticides</Link>
              </li>
              <li>
                <Link to="/products?category=insecticides" className="text-gray-400 hover:text-accent transition-colors text-sm">Insecticides</Link>
              </li>
              <li>
                <Link to="/products?category=fertilizers" className="text-gray-400 hover:text-accent transition-colors text-sm">Fertilizers</Link>
              </li>
              <li>
                <Link to="/products?category=seeds" className="text-gray-400 hover:text-accent transition-colors text-sm">Quality Seeds</Link>
              </li>
              <li>
                <Link to="/dealer-inquiry" className="text-accent hover:text-white transition-colors text-sm font-semibold mt-2 block">Become a Dealer</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  123 Agri Market, Farming District, <br />
                  State, Country - 123456
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span className="text-gray-400 text-sm">info@dhanushagro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dhanush Agro Agencies. All rights reserved.
          </p>
          <div className="space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
