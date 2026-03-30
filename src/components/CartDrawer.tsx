import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { DBProduct } from "@/hooks/useProducts";
import { useLang } from "@/i18n/LanguageContext";
import { toast } from "sonner";

export type CartItem = DBProduct & { qty: number };

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdate: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
  onClearCart: () => void;
}

const CartDrawer = ({ open, onClose, items, onUpdate, onRemove, onClearCart }: CartDrawerProps) => {
  const { t, isRTL } = useLang();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "", city: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = t.cart.nameError;
    if (!/^(0[5-7]\d{8}|\+212[5-7]\d{8})$/.test(form.phone.trim())) errs.phone = t.cart.phoneError;
    if (!form.address.trim()) errs.address = t.cart.addressError;
    if (!form.city.trim()) errs.city = t.cart.cityError;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const productLines = items.map((i) => {
      const name = t.productNames[i.id as keyof typeof t.productNames] || i.name;
      return `• ${name} x${i.qty} = ${i.price * i.qty} DH`;
    }).join("%0A");

    const msg = encodeURIComponent(
      `🛒 Nouvelle commande AutoModX\n\n` +
      `👤 ${form.name}\n📞 ${form.phone}\n📍 ${form.address}, ${form.city}\n\n`
    ) + `${productLines}%0A%0A💰 Total: ${total} DH%0A💵 Paiement à la livraison`;

    window.open(`https://wa.me/212675811873?text=${msg}`, "_blank");

    toast.success(t.cart.success);
    setShowForm(false);
    setForm({ name: "", phone: "", address: "", city: "" });
    setErrors({});
    onClearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: isRTL ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? "-100%" : "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed top-0 ${isRTL ? "left-0" : "right-0"} z-50 flex h-full w-full max-w-md flex-col border-border bg-background ${isRTL ? "border-r" : "border-l"}`}
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h2 className="font-display text-lg font-bold text-foreground">{t.cart.title}</h2>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <p className="mt-10 text-center font-body text-muted-foreground">{t.cart.empty}</p>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => {
                    const name = t.productNames[item.id as keyof typeof t.productNames] || item.name;
                    return (
                      <div key={item.id} className="flex gap-4 rounded-lg border border-border p-3">
                        <img src={item.image} alt={name} className="h-16 w-16 rounded-md object-cover" />
                        <div className="flex-1">
                          <p className="font-body text-sm font-semibold text-foreground">{name}</p>
                          <p className="font-body text-sm text-primary">{item.price} DH</p>
                          <div className="mt-2 flex items-center gap-2">
                            <button onClick={() => onUpdate(item.id, item.qty - 1)} className="rounded border border-border p-1 text-muted-foreground hover:text-foreground">
                              <Minus size={12} />
                            </button>
                            <span className="font-body text-sm text-foreground">{item.qty}</span>
                            <button onClick={() => onUpdate(item.id, item.qty + 1)} className="rounded border border-border p-1 text-muted-foreground hover:text-foreground">
                              <Plus size={12} />
                            </button>
                            <button onClick={() => onRemove(item.id)} className="ms-auto text-destructive hover:text-destructive/80">
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border px-6 py-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-foreground">{t.cart.total}</span>
                  <span className="font-display text-xl font-bold text-gradient-cyan">{total} DH</span>
                </div>
                <p className="mb-3 text-center font-body text-xs text-accent">{t.cart.cod}</p>

                {!showForm ? (
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full rounded-lg bg-primary py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
                  >
                    {t.cart.order}
                  </button>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <h3 className="font-display text-sm font-semibold text-foreground">{t.cart.orderForm}</h3>
                    {[
                      { key: "name", label: t.cart.name },
                      { key: "phone", label: t.cart.phone },
                      { key: "address", label: t.cart.address },
                      { key: "city", label: t.cart.city },
                    ].map((f) => (
                      <div key={f.key}>
                        <input
                          type="text"
                          required
                          placeholder={f.label}
                          value={form[f.key as keyof typeof form]}
                          onChange={(e) => {
                            setForm({ ...form, [f.key]: e.target.value });
                            if (errors[f.key]) setErrors({ ...errors, [f.key]: "" });
                          }}
                          className={`w-full rounded-lg border ${errors[f.key] ? "border-destructive" : "border-border"} bg-transparent px-4 py-2.5 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary`}
                        />
                        {errors[f.key] && <p className="font-body text-xs text-destructive">{errors[f.key]}</p>}
                      </div>
                    ))}
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-accent py-3 font-display text-xs font-bold tracking-wider text-accent-foreground transition-all hover:shadow-[var(--shadow-gold)]"
                    >
                      {t.cart.submit}
                    </button>
                  </form>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
