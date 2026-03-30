import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Target, ShieldCheck, Award } from "lucide-react";

export function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dhanush Agro Agencies</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Your trusted partner in agriculture since 2005. We are committed to empowering farmers with high-quality inputs and expert guidance.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1595802273736-6e2715112411?q=80&w=2070&auto=format&fit=crop" 
                alt="Farming landscape" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded with a vision to revolutionize local farming practices, Dhanush Agro Agencies started as a small retail outlet. Over the years, we have grown into a leading distributor of agricultural inputs, serving thousands of farmers across the region.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We understand that farming is not just a business; it's a livelihood. That's why we don't just sell products; we provide comprehensive solutions tailored to the specific needs of our farmers, ensuring better yields and sustainable practices.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-muted p-6 rounded-xl text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                  <p className="text-foreground font-medium">Years of Trust</p>
                </div>
                <div className="bg-muted p-6 rounded-xl text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">10k+</h3>
                  <p className="text-foreground font-medium">Happy Farmers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide farmers with the highest quality agricultural inputs—pesticides, fertilizers, and seeds—at affordable prices, coupled with expert agronomic advice to maximize crop yield and profitability.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-accent-dark" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the most trusted and reliable partner for farmers and agricultural dealers, driving sustainable agricultural growth and contributing to the prosperity of the farming community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Detailed */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Dhanush Agro Agencies?</h2>
            <p className="text-muted-foreground text-lg">
              We stand out because we prioritize your success above all else. Here is what makes us the preferred choice for thousands of farmers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-8 rounded-2xl hover:border-primary transition-colors">
              <Award className="h-10 w-10 text-primary mb-6" />
              <h4 className="text-xl font-bold text-foreground mb-3">Uncompromising Quality</h4>
              <p className="text-muted-foreground">
                We partner only with reputed national and international brands. Every product on our shelves is tested and proven to deliver results.
              </p>
            </div>
            <div className="border border-gray-200 p-8 rounded-2xl hover:border-primary transition-colors">
              <Users className="h-10 w-10 text-primary mb-6" />
              <h4 className="text-xl font-bold text-foreground mb-3">Expert Agronomic Support</h4>
              <p className="text-muted-foreground">
                Our team includes experienced agronomists who provide free consultation on crop diseases, pest management, and fertilizer schedules.
              </p>
            </div>
            <div className="border border-gray-200 p-8 rounded-2xl hover:border-primary transition-colors">
              <CheckCircle2 className="h-10 w-10 text-primary mb-6" />
              <h4 className="text-xl font-bold text-foreground mb-3">Wide Range of Products</h4>
              <p className="text-muted-foreground">
                From basic fertilizers to advanced systemic pesticides and high-yield hybrid seeds, we are a one-stop-shop for all your farming needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to improve your crop yield?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-100">
            Join thousands of successful farmers who trust Dhanush Agro Agencies for their agricultural needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent-dark text-white font-bold text-lg" asChild>
              <Link to="/products">Explore Our Products</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark font-bold text-lg" asChild>
              <Link to="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
