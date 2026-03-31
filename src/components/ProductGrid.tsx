import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { categories, products, Product } from "@/data/products";
import { useLang } from "@/i18n/LanguageContext";

const ProductCard = ({ product, index, onAdd }: { product: Product; index: number; onAdd: (p: Product) => void }) => {
  const { t, lang } = useLang();
  const displayName = t.productNames[product.id as keyof typeof t.productNames] || product.name;
  const displayBadge = product.badge
    ? (t.badges[product.badge as keyof typeof t.badges] || product.badge)
    : undefined;
  const translatedCategory = t.categories[product.category as keyof typeof t.categories] || product.category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
    >
      {displayBadge && (
        <span className="absolute left-3 top-3 z-10 rounded-md bg-accent px-2 py-1 font-display text-[10px] font-bold tracking-wider text-accent-foreground">
          {displayBadge}
        </span>
      )}
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={displayName}
          loading="lazy"
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
        />
      </div>
      <div className="p-5">
        <p className="mb-1 font-body text-xs font-medium tracking-wider text-primary">
          {translatedCategory.toUpperCase()}
        </p>
        <h3 className="font-body text-sm font-semibold leading-snug text-foreground">
          {displayName}
        </h3>
        <div className="mt-2 flex items-center gap-1">
          <Star size={12} className="fill-accent text-accent" />
          <span className="font-body text-xs text-muted-foreground">{product.rating}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="font-display text-lg font-bold text-foreground">{product.price} DH</p>
          <button
            onClick={() => onAdd(product)}
            className="flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-2 font-body text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ShoppingCart size={14} />
            {t.cart.add}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProductGrid = ({ onAddToCart }: { onAddToCart: (p: any) => void }) => {
  const [active, setActive] = useState<string>("All");
  const { t } = useLang();
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
            {t.products.title} <span className="text-gradient-cyan">{t.products.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-muted-foreground">
            {t.products.desc}
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
              {t.categories[cat as keyof typeof t.categories] || cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} onAdd={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
