import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Pesticide for Your Crop",
    excerpt: "Selecting the correct pesticide is crucial for effective pest control without damaging your crop or the environment. Learn the key factors to consider before making a purchase.",
    date: "March 15, 2026",
    author: "Dr. Sharma, Agronomist",
    category: "Pest Management",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c1b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Best Fertilizers for High Yield in Paddy Cultivation",
    excerpt: "Paddy requires specific nutrients at different growth stages. Discover the optimal fertilizer schedule and the best NPK ratios to maximize your paddy harvest this season.",
    date: "February 28, 2026",
    author: "Ramesh Kumar, Field Expert",
    category: "Crop Nutrition",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Common Cotton Diseases and Effective Solutions",
    excerpt: "From leaf curl virus to bollworms, cotton crops face numerous threats. We break down the most common diseases and provide actionable, proven solutions to protect your yield.",
    date: "February 10, 2026",
    author: "Dr. Sharma, Agronomist",
    category: "Disease Control",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Seasonal Farming Tips: Preparing for the Kharif Season",
    excerpt: "The Kharif season brings its own set of challenges and opportunities. Get your farm ready with our comprehensive guide on soil preparation, seed selection, and early pest management.",
    date: "January 25, 2026",
    author: "Venkatesh Rao, Senior Advisor",
    category: "Seasonal Advice",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
  },
];

export function Blog() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Knowledge Center</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Expert advice, farming tips, and the latest agricultural insights to help you grow better.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-muted min-h-screen">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                <div className="h-64 bg-gray-200 relative overflow-hidden group">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                    <Link to="#">{post.title}</Link>
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="text-primary font-semibold px-0 w-fit hover:text-primary-dark" asChild>
                    <Link to="#">Read Full Article <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-16 flex justify-center">
            <div className="flex space-x-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button className="bg-primary text-white">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with Farming Tips</h2>
          <p className="text-xl mb-8 text-primary-100">
            Subscribe to our newsletter to receive the latest agricultural advice, product updates, and seasonal tips directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-6 py-3 rounded-lg text-foreground w-full sm:w-auto flex-grow max-w-md focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <Button type="submit" size="lg" className="bg-accent hover:bg-accent-dark text-white font-bold h-auto py-3">
              Subscribe Now
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
