import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { Features, Footer } from "@/components/FooterFeatures";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Features />
    <ProductGrid />
    <Footer />
  </div>
);

export default Index;
