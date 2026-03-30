import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export function Contact() {
  const location = useLocation();
  const [productInquiry, setProductInquiry] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const product = params.get("product");
    if (product) {
      setProductInquiry(`I am interested in knowing the price and details for: ${product}`);
    }
  }, [location]);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            We are here to help. Reach out to us for product inquiries, expert advice, or any other assistance.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-muted min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Information */}
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Our Location</h4>
                      <p className="text-muted-foreground">
                        123 Agri Market, Farming District,<br />
                        State, Country - 123456
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Phone Number</h4>
                      <p className="text-muted-foreground">+91 85322 35436</p>
                      <p className="text-muted-foreground">+91 9448690118</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Email Address</h4>
                      <p className="text-muted-foreground">dhanushagro666@gmail.com</p>
                      <p className="text-muted-foreground">support@dhanushagro.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Working Hours</h4>
                      <p className="text-muted-foreground">Mon - Sat: 8:00 AM - 8:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="font-bold text-foreground mb-4">Quick Chat</h4>
                  <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center" asChild>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-colors"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-colors"
                        placeholder="Enter your mobile number"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-colors"
                        placeholder="Enter your email (optional)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-colors bg-white" required>
                        <option value="">Select a subject</option>
                        <option value="product">Product Inquiry</option>
                        <option value="advisory">Crop Advisory</option>
                        <option value="complaint">Feedback / Complaint</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                      placeholder="How can we help you?"
                      value={productInquiry}
                      onChange={(e) => setProductInquiry(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white font-bold px-10 py-4 h-auto text-lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative w-full">
        {/* Replace with actual Google Maps iframe */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 flex-col">
          <MapPin className="h-12 w-12 mb-4 text-gray-400" />
          <p className="text-lg font-medium">Google Maps Embed Placeholder</p>
          <p className="text-sm"> Raichur - Wadi Rd, Osman Gunj, Raichur, Karnataka 584102</p>
        </div>
      </section>
    </div>
  );
}
