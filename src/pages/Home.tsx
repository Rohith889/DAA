import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  Bug, 
  Sprout, 
  Droplets, 
  CheckCircle2, 
  Award, 
  Users, 
  TrendingUp,
  PhoneCall,
  ArrowRight
} from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-primary-dark text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop" 
            alt="Farming background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Farmers with <span className="text-accent">Quality Inputs</span> for Better Yields
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Your trusted partner in agriculture. We provide top-grade pesticides, fertilizers, and seeds to ensure your crops thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent-dark text-white font-semibold text-lg" asChild>
                <Link to="/contact">Get Expert Advice</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark font-semibold text-lg" asChild>
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">15+</h3>
              <p className="text-muted-foreground font-medium">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">10k+</h3>
              <p className="text-muted-foreground font-medium">Happy Farmers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">100%</h3>
              <p className="text-muted-foreground font-medium">Quality Assured</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">50+</h3>
              <p className="text-muted-foreground font-medium">Trusted Brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Categories</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need for a successful harvest, sourced from the best manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1 */}
            <div className="group bg-muted rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20">
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Bug className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Pesticides</h3>
              <p className="text-muted-foreground mb-6">
                Protect your crops from harmful diseases and pests effectively.
              </p>
              <Button variant="link" className="text-primary font-semibold group-hover:text-primary-dark" asChild>
                <Link to="/products?category=pesticides">View Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            {/* Category 2 */}
            <div className="group bg-muted rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20">
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Insecticides</h3>
              <p className="text-muted-foreground mb-6">
                Targeted solutions to eliminate crop-damaging insects safely.
              </p>
              <Button variant="link" className="text-primary font-semibold group-hover:text-primary-dark" asChild>
                <Link to="/products?category=insecticides">View Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            {/* Category 3 */}
            <div className="group bg-muted rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20">
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Droplets className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Fertilizers</h3>
              <p className="text-muted-foreground mb-6">
                Essential nutrients to boost plant growth and maximize yield.
              </p>
              <Button variant="link" className="text-primary font-semibold group-hover:text-primary-dark" asChild>
                <Link to="/products?category=fertilizers">View Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            {/* Category 4 */}
            <div className="group bg-muted rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20">
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Sprout className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Quality Seeds</h3>
              <p className="text-muted-foreground mb-6">
                High-germination seeds for various seasonal and cash crops.
              </p>
              <Button variant="link" className="text-primary font-semibold group-hover:text-primary-dark" asChild>
                <Link to="/products?category=seeds">View Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c1b?q=80&w=2070&auto=format&fit=crop" 
                alt="Farmer in field" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Farmers Trust Dhanush Agro</h2>
                <p className="text-gray-300 text-lg">
                  We don't just sell products; we provide solutions. Our goal is to see your farm prosper through the right guidance and quality inputs.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-2 rounded-lg shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Quality Assurance</h4>
                    <p className="text-gray-300">We source only from certified, top-tier manufacturers to guarantee effectiveness.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-2 rounded-lg shrink-0 mt-1">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Expert Guidance</h4>
                    <p className="text-gray-300">Our agronomists help you choose the exact product needed for your specific crop issue.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-2 rounded-lg shrink-0 mt-1">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Affordable Pricing</h4>
                    <p className="text-gray-300">Competitive rates ensuring you get the best ROI for your farming investments.</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-white text-primary-dark hover:bg-gray-100 font-bold" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Products</h2>
              <p className="text-muted-foreground text-lg">
                Top-performing solutions currently in high demand for the season.
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2072&auto=format&fit=crop" 
                  alt="Product" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Fertilizer
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Dhanush GrowMax NPK</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Complete nutrient solution for early vegetative growth. Ideal for cotton and paddy.
                </p>
                <Button className="w-full" asChild>
                  <Link to="/contact">Enquire Now</Link>
                </Button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop" 
                  alt="Product" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Pesticide
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">ClearField Pro</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Broad-spectrum systemic fungicide for effective disease control in vegetables.
                </p>
                <Button className="w-full" asChild>
                  <Link to="/contact">Enquire Now</Link>
                </Button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1595802273736-6e2715112411?q=80&w=2070&auto=format&fit=crop" 
                  alt="Product" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-accent-dark text-white text-xs font-bold px-3 py-1 rounded-full">
                  Seeds
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Hybrid Maize Gold</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  High-yielding, drought-tolerant maize seeds suitable for varied soil types.
                </p>
                <Button className="w-full" asChild>
                  <Link to="/contact">Enquire Now</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Farmer Support / CTA */}
      <section className="py-16 bg-accent text-foreground">
        <div className="container mx-auto px-4 text-center">
          <PhoneCall className="h-16 w-16 mx-auto mb-6 text-primary-dark" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Confused about what your crop needs?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">
            Don't guess. Talk to our agricultural experts for free advice on pest control, fertilizers, and seed selection.
          </p>
          <Button size="lg" className="bg-primary-dark hover:bg-primary text-white font-bold text-lg px-8" asChild>
            <a href="tel:+919876543210">Call Expert Now: +91 98765 43210</a>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Farmers Say</h2>
            <p className="text-muted-foreground text-lg">
              Real results from farmers who trust Dhanush Agro Agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-muted p-8 rounded-2xl relative">
              <div className="text-accent text-4xl font-serif absolute top-4 left-4 opacity-50">"</div>
              <p className="text-foreground relative z-10 mb-6 italic">
                "The guidance I received for my cotton crop saved me from a massive pest attack. The products recommended were highly effective and reasonably priced."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Farmer" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Ramesh Kumar</h4>
                  <p className="text-sm text-muted-foreground">Cotton Farmer</p>
                </div>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-2xl relative">
              <div className="text-accent text-4xl font-serif absolute top-4 left-4 opacity-50">"</div>
              <p className="text-foreground relative z-10 mb-6 italic">
                "I have been buying fertilizers from Dhanush Agro for 5 years. Their quality is always consistent, and my paddy yield has increased significantly."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Farmer" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Srinivas Reddy</h4>
                  <p className="text-sm text-muted-foreground">Paddy Farmer</p>
                </div>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-2xl relative">
              <div className="text-accent text-4xl font-serif absolute top-4 left-4 opacity-50">"</div>
              <p className="text-foreground relative z-10 mb-6 italic">
                "Very knowledgeable staff. They don't just sell; they explain how and when to use the pesticide. Highly recommended for all farmers."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=100&auto=format&fit=crop" alt="Farmer" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Venkatesh Rao</h4>
                  <p className="text-sm text-muted-foreground">Vegetable Grower</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-primary p-10 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Need Bulk Supply or Dealership?</h2>
              <p className="mb-8 text-primary-100">
                Leave your details below and our team will get back to you within 24 hours with the best quotes and partnership details.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>Special pricing for bulk orders</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>Priority delivery</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 p-10 bg-white">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none text-foreground"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none text-foreground"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Requirement</label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none text-foreground resize-none"
                    placeholder="Tell us what you need (e.g., Bulk pesticides, Dealership inquiry)"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent-dark text-white font-bold text-lg h-12">
                  Get Call Back
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
