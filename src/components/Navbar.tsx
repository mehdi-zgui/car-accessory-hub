import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ShoppingCart, Globe } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const Navbar = ({ cartCount, onCartOpen }: { cartCount: number; onCartOpen: () => void }) => {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang, isRTL } = useLang();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.products, href: "#products" },
    { label: t.nav.categories, href: "#categories" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-bold tracking-wider text-gradient-cyan">
          AUTOMOD<span className="text-accent">X</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 font-body text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Globe size={14} />
            {t.langSwitch}
          </button>
          <button onClick={onCartOpen} className="relative text-foreground transition-colors hover:text-primary">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                {cartCount}
              </span>
            )}
          </button>
          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border bg-background md:hidden"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
