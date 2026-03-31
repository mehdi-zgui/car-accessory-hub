import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer id="contact" className="border-t border-border bg-card py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-bold tracking-wider text-gradient-cyan">
              AUTOMOD<span className="text-gradient-gold">X</span>
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
              {t.footer.desc}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-wider text-foreground">{t.footer.contact}</h4>
            <ul className="mt-4 space-y-3">
              {[
                { icon: Mail, text: "contact@automodx.ma" },
                { icon: Phone, text: "+212 6 00 00 00 00" },
                { icon: MapPin, text: "Casablanca, Maroc" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                  <Icon size={14} className="text-primary" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div id="about">
            <h4 className="font-display text-sm font-semibold tracking-wider text-foreground">{t.footer.about}</h4>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
              {t.footer.aboutDesc}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center font-body text-xs text-muted-foreground">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};

const Features = () => {
  const { t } = useLang();

  return (
    <section className="border-y border-border bg-card/50 py-16">
      <div className="container mx-auto grid gap-8 px-6 sm:grid-cols-3">
        {t.features.map((f) => (
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
};

export { Footer, Features };
