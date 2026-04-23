import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";
import { useLang } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLang();

  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-16 lg:pb-24">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Car accessories showroom"
          className="h-full w-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative mx-auto flex items-center px-6 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2"
          >
            <Zap size={14} className="text-primary" />
            <span className="font-body text-xs font-medium tracking-wider text-primary">
              {t.hero.badge}
            </span>
          </motion.div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            {t.hero.title1}
            <br />
            <span className="text-gradient-cyan">{t.hero.title2}</span>{" "}
            <span className="text-gradient-gold">{t.hero.title3}</span>
          </h1>

          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-muted-foreground">
            {t.hero.desc}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] animate-pulse-glow"
            >
              {t.hero.shop}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 font-display text-sm font-semibold tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {t.hero.browse}
            </a>
          </div>

          <div className="mt-14 flex gap-10">
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-gradient-cyan">{s.value}</p>
                <p className="font-body text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
