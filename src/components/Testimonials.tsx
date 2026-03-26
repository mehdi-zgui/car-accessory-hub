import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const testimonials = [
  {
    id: 1,
    nameFr: "Youssef B.",
    nameAr: "يوسف ب.",
    cityFr: "Casablanca",
    cityAr: "الدار البيضاء",
    rating: 5,
    textFr: "Qualité exceptionnelle ! La housse volant en fibre de carbone est magnifique. Livraison rapide et emballage soigné. Je recommande à 100%.",
    textAr: "جودة استثنائية! غطاء المقود من ألياف الكربون رائع. توصيل سريع وتغليف ممتاز. أنصح به بشدة.",
    avatar: "Y",
  },
  {
    id: 2,
    nameFr: "Fatima Z.",
    nameAr: "فاطمة ز.",
    cityFr: "Rabat",
    cityAr: "الرباط",
    rating: 5,
    textFr: "Les tapis de sol premium sont parfaits pour ma voiture. Le paiement à la livraison c'est top, ça met en confiance. Merci AutoModX !",
    textAr: "سجاد الأرضية الفاخر مثالي لسيارتي. الدفع عند الاستلام ممتاز ويعطي ثقة. شكراً أوتومودكس!",
    avatar: "F",
  },
  {
    id: 3,
    nameFr: "Omar K.",
    nameAr: "عمر ك.",
    cityFr: "Marrakech",
    cityAr: "مراكش",
    rating: 4,
    textFr: "Kit LED ambiance intérieure installé en 10 minutes. L'effet est incroyable la nuit. Service client réactif sur WhatsApp.",
    textAr: "تم تركيب إضاءة LED الداخلية في 10 دقائق. التأثير مذهل في الليل. خدمة العملاء سريعة عبر الواتساب.",
    avatar: "O",
  },
  {
    id: 4,
    nameFr: "Amina R.",
    nameAr: "أمينة ر.",
    cityFr: "Tanger",
    cityAr: "طنجة",
    rating: 5,
    textFr: "Dashcam 4K reçue en 2 jours. Image cristalline et installation facile. Le meilleur investissement pour ma sécurité sur la route.",
    textAr: "كاميرا 4K وصلت في يومين. صورة واضحة وتركيب سهل. أفضل استثمار لسلامتي على الطريق.",
    avatar: "A",
  },
];

const accentColors = [
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
];

const Testimonials = () => {
  const { lang, t } = useLang();
  const isAr = lang === "ar";

  return (
    <section className="border-t border-border bg-card/30 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {isAr ? "آراء" : "Avis"}{" "}
            <span className="text-gradient-cyan">{isAr ? "عملائنا" : "Clients"}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-muted-foreground">
            {isAr
              ? "أكثر من 50,000 عميل يثقون بنا. اكتشف تجاربهم."
              : "Plus de 50 000 clients nous font confiance. Découvrez leurs expériences."}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={14}
                    className={s < item.rating ? "fill-accent text-accent" : "text-muted-foreground/30"}
                  />
                ))}
              </div>

              <p className="flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                "{isAr ? item.textAr : item.textFr}"
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold ${accentColors[i]}`}
                >
                  {item.avatar}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">
                    {isAr ? item.nameAr : item.nameFr}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {isAr ? item.cityAr : item.cityFr}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
