import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PhoneCall, FileText, Users, Sprout, TrendingUp, ShieldCheck } from "lucide-react";

export function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Farmer Services & Support</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Beyond products, we offer expert guidance to ensure your farming journey is successful, profitable, and sustainable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-primary/20 group">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Sprout className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Crop Advisory</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get personalized advice on crop selection, sowing schedules, and nutrient management based on your soil type and local climate conditions.
              </p>
              <Button variant="link" className="text-primary font-semibold px-0" asChild>
                <Link to="/contact">Request Advisory</Link>
              </Button>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-primary/20 group">
              <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <ShieldCheck className="h-8 w-8 text-accent-dark group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Pest & Disease Diagnosis</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Send us photos of your affected crops, and our experts will diagnose the issue and recommend the most effective and safe pesticide or fungicide.
              </p>
              <Button variant="link" className="text-accent-dark font-semibold px-0" asChild>
                <Link to="/contact">Get Diagnosis</Link>
              </Button>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-primary/20 group">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <FileText className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Soil Health Management</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Guidance on soil testing interpretation and customized fertilizer schedules to restore soil fertility and maximize crop yield without overuse.
              </p>
              <Button variant="link" className="text-primary font-semibold px-0" asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-primary/20 group">
              <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <TrendingUp className="h-8 w-8 text-accent-dark group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Yield Optimization</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                End-to-end support from sowing to harvesting, ensuring you use the right inputs at the right time to achieve maximum possible yield.
              </p>
              <Button variant="link" className="text-accent-dark font-semibold px-0" asChild>
                <Link to="/contact">Optimize Yield</Link>
              </Button>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-primary/20 group">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Users className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Farmer Training Camps</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We regularly organize local training sessions to educate farmers on modern agricultural practices, new product usage, and safety measures.
              </p>
              <Button variant="link" className="text-primary font-semibold px-0" asChild>
                <Link to="/contact">Join Next Camp</Link>
              </Button>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-primary/20 group">
              <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <PhoneCall className="h-8 w-8 text-accent-dark group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">24/7 Helpline Support</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Have an urgent query about a product application or a sudden pest attack? Our dedicated helpline is available to assist you anytime.
              </p>
              <Button variant="link" className="text-accent-dark font-semibold px-0" asChild>
                <a href="tel:+919876543210">Call Now</a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need expert advice for your farm?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-100">
            Our agronomists are ready to help you solve your farming challenges.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent-dark text-white font-bold text-lg px-8 py-6 h-auto" asChild>
            <Link to="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
