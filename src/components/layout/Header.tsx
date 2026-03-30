import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden bg-primary-dark text-white py-2 px-4 md:flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6 container mx-auto">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-accent" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-accent" />
            <span>info@dhanushagro.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-accent" />
            <span>123 Agri Market, Farming District</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary text-white p-2 rounded-lg">
              <span className="font-bold text-xl tracking-tight">DAA</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-primary-dark leading-none">
                Dhanush
              </span>
              <span className="text-sm text-muted-foreground font-medium leading-none">
                Agro Agencies
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Button asChild className="hidden md:flex bg-accent hover:bg-accent-dark text-white">
              <Link to="/dealer-inquiry">Dealer Inquiry</Link>
            </Button>
            
            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium py-2 border-b border-muted ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full bg-accent hover:bg-accent-dark text-white mt-4">
              <Link to="/dealer-inquiry">Dealer Inquiry</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
