import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Building2, Truck, BadgePercent, Handshake } from "lucide-react";

export function DealerInquiry() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Join our growing network of dealers and distributors. Grow your business with Dhanush Agro Agencies' trusted product range.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-muted min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Benefits Section */}
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Why Become a Dealer?</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  We value our partners and provide comprehensive support to ensure mutual growth and success in the agricultural market.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <BadgePercent className="h-10 w-10 text-accent mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-2">Attractive Margins</h4>
                  <p className="text-muted-foreground text-sm">
                    Enjoy highly competitive pricing and excellent profit margins on our entire product range.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <Building2 className="h-10 w-10 text-primary mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-2">Brand Trust</h4>
                  <p className="text-muted-foreground text-sm">
                    Leverage our 15+ years of market presence and strong reputation among local farmers.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <Truck className="h-10 w-10 text-primary mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-2">Priority Supply</h4>
                  <p className="text-muted-foreground text-sm">
                    Guaranteed stock availability and priority dispatch even during peak agricultural seasons.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <Handshake className="h-10 w-10 text-accent mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-2">Marketing Support</h4>
                  <p className="text-muted-foreground text-sm">
                    Get promotional materials, shop branding, and support for local farmer meetings.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20 mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Who can apply?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Existing agricultural input retailers looking to expand their product line.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Entrepreneurs planning to start an agri-business with a valid pesticide/fertilizer license.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Large-scale farmers or FPOs looking for bulk direct supply.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:w-1/2">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -z-0"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-foreground mb-2">Dealer Inquiry Form</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out your business details, and our channel manager will contact you shortly.
                  </p>

                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-800 mb-2">Request Submitted!</h3>
                      <p className="text-green-700 mb-6">
                        Thank you for your interest in partnering with Dhanush Agro Agencies. Our team will review your details and contact you within 24-48 hours.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person Name *</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-colors"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
                          <input 
                            type="tel" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-colors"
                            placeholder="10-digit number"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Business / Firm Name *</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-colors"
                          placeholder="Name of your shop or company"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">City / Town *</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-colors"
                            placeholder="City"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">District *</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-colors"
                            placeholder="District"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Do you have valid licenses? *</label>
                        <div className="flex space-x-6">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="license" value="yes" className="text-primary focus:ring-primary w-4 h-4" required />
                            <span className="text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="license" value="no" className="text-primary focus:ring-primary w-4 h-4" required />
                            <span className="text-gray-700">No / In Process</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Interested Products / Requirements *</label>
                        <textarea 
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                          placeholder="E.g., Interested in taking dealership for seeds and fertilizers in my district."
                          required
                        ></textarea>
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 h-auto text-lg shadow-lg hover:shadow-xl transition-all">
                        Request Partnership
                      </Button>
                      <p className="text-xs text-center text-gray-500 mt-4">
                        By submitting this form, you agree to our privacy policy and consent to being contacted by our representatives.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
