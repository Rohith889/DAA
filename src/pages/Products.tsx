import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Filter, Leaf, Bug, Sprout, Droplets } from "lucide-react";

// Mock product data
const products = [
  {
    id: 1,
    name: "Dhanush GrowMax NPK 19:19:19",
    category: "fertilizers",
    useCase: "All crops (Vegetative stage)",
    benefits: "Promotes healthy foliage, root development, and overall plant vigor.",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "ClearField Pro Fungicide",
    category: "pesticides",
    useCase: "Vegetables, Fruits (Fungal diseases)",
    benefits: "Broad-spectrum systemic control of powdery mildew and rust.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Hybrid Maize Gold Seeds",
    category: "seeds",
    useCase: "Kharif/Rabi season sowing",
    benefits: "High-yielding, drought-tolerant, and resistant to major pests.",
    image: "https://images.unsplash.com/photo-1595802273736-6e2715112411?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Terminator Plus Insecticide",
    category: "insecticides",
    useCase: "Cotton, Paddy (Sucking pests)",
    benefits: "Quick knockdown effect on aphids, jassids, and whiteflies.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Urea 46% N",
    category: "fertilizers",
    useCase: "Top dressing for all crops",
    benefits: "Provides essential nitrogen for rapid growth and greening.",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c1b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "WeedStop Herbicide",
    category: "pesticides",
    useCase: "Pre-emergence weed control",
    benefits: "Effectively controls broadleaf weeds and grasses in soybean and cotton.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
  },
];

const categories = [
  { id: "all", name: "All Products", icon: null },
  { id: "pesticides", name: "Pesticides", icon: <Bug className="w-4 h-4 mr-2" /> },
  { id: "insecticides", name: "Insecticides", icon: <Leaf className="w-4 h-4 mr-2" /> },
  { id: "fertilizers", name: "Fertilizers", icon: <Droplets className="w-4 h-4 mr-2" /> },
  { id: "seeds", name: "Seeds", icon: <Sprout className="w-4 h-4 mr-2" /> },
];

export function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    if (categoryParam && categories.some(c => c.id === categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [location]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.useCase.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            High-quality agricultural inputs sourced from trusted manufacturers to ensure the best yield for your farm.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-muted min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar / Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-24">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                    <Search className="w-5 h-5 mr-2 text-primary" /> Search
                  </h3>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search products..." 
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                    <Filter className="w-5 h-5 mr-2 text-primary" /> Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-colors ${
                          activeCategory === category.id 
                            ? "bg-primary text-white font-medium" 
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        {category.icon}
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-4 bg-accent/10 rounded-xl border border-accent/20">
                  <h4 className="font-bold text-foreground mb-2">Need Bulk Quantities?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    We offer special pricing for dealers and large-scale farmers.
                  </p>
                  <Button className="w-full bg-accent hover:bg-accent-dark text-white" asChild>
                    <Link to="/dealer-inquiry">Inquire Now</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-foreground">
                  {categories.find(c => c.id === activeCategory)?.name}
                  <span className="text-muted-foreground text-lg font-normal ml-2">({filteredProducts.length})</span>
                </h2>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                      <div className="h-48 bg-gray-200 relative">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full capitalize">
                          {product.category}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                        
                        <div className="mb-4 flex-grow">
                          <div className="mb-2">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Best For:</span>
                            <p className="text-sm text-foreground font-medium">{product.useCase}</p>
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Benefits:</span>
                            <p className="text-sm text-muted-foreground line-clamp-2">{product.benefits}</p>
                          </div>
                        </div>

                        <Button className="w-full mt-auto" asChild>
                          <Link to={`/contact?product=${encodeURIComponent(product.name)}`}>Enquire Price</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-12 rounded-2xl text-center shadow-sm border border-gray-100">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                  <Button variant="outline" onClick={() => {setSearchQuery(""); setActiveCategory("all");}}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
