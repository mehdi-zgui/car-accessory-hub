import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { products, categories } from "@/data/products";

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
  >
    {product.badge && (
      <span className="absolute left-3 top-3 z-10 rounded-md bg-accent px-2 py-1 font-display text-[10px] font-bold tracking-wider text-accent-foreground">
        {product.badge}
      </span>
    )}
    <div className="aspect-square overflow-hidden bg-secondary">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={400}
        height={400}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-5">
      <p className="mb-1 font-body text-xs font-medium tracking-wider text-primary">
        {product.category.toUpperCase()}
      </p>
      <h3 className="font-body text-sm font-semibold leading-snug text-foreground">
        {product.name}
      </h3>
      <div className="mt-2 flex items-center gap-1">
        <Star size={12} className="fill-accent text-accent" />
        <span className="font-body text-xs text-muted-foreground">{product.rating}</span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="font-display text-lg font-bold text-foreground">${product.price}</p>
        <button className="flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-2 font-body text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
          <ShoppingCart size={14} />
          Add
        </button>
      </div>
    </div>
  </motion.div>
);

const ProductGrid = () => {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Featured <span className="text-gradient-cyan">Products</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-muted-foreground">
            Hand-picked accessories to elevate your driving experience
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-2" id="categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 font-body text-xs font-medium tracking-wider transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
