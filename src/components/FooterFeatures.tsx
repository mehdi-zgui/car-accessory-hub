import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="border-t border-border bg-card py-16">
    <div className="container mx-auto px-6">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-bold tracking-wider text-gradient-cyan">
            AUTOMOD<span className="text-gradient-gold">X</span>
          </h3>
          <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
            Premium car accessories for enthusiasts who demand the best. Quality, style, performance.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold tracking-wider text-foreground">CONTACT</h4>
          <ul className="mt-4 space-y-3">
            {[
              { icon: Mail, text: "support@automodx.com" },
              { icon: Phone, text: "+1 (555) 123-4567" },
              { icon: MapPin, text: "Los Angeles, CA" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                <Icon size={14} className="text-primary" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div id="about">
          <h4 className="font-display text-sm font-semibold tracking-wider text-foreground">NEWSLETTER</h4>
          <p className="mt-4 font-body text-sm text-muted-foreground">Get exclusive deals and new arrivals.</p>
          <div className="mt-4 flex overflow-hidden rounded-lg border border-border focus-within:border-primary">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent px-4 py-3 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button className="flex items-center gap-1 bg-primary px-4 text-primary-foreground transition-colors hover:bg-primary/90">
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-border pt-6 text-center font-body text-xs text-muted-foreground">
        © 2026 AutoModX. All rights reserved.
      </div>
    </div>
  </footer>
);

const Features = () => (
  <section className="border-y border-border bg-card/50 py-16">
    <div className="container mx-auto grid gap-8 px-6 sm:grid-cols-3">
      {[
        { title: "Free Shipping", desc: "On orders over $75", emoji: "🚚" },
        { title: "Easy Returns", desc: "30-day hassle-free returns", emoji: "↩️" },
        { title: "Secure Payment", desc: "SSL encrypted checkout", emoji: "🔒" },
      ].map((f) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-3xl">{f.emoji}</span>
          <h3 className="mt-3 font-display text-sm font-semibold tracking-wider text-foreground">{f.title}</h3>
          <p className="mt-1 font-body text-sm text-muted-foreground">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export { Footer, Features };
