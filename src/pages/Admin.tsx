import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, Save, X, Lock, ArrowLeft, Image } from "lucide-react";
import { toast } from "sonner";
import { products as staticProducts, Product } from "@/data/products";

const ADMIN_PIN = "1234";
const CATEGORIES = ["Interior", "Exterior", "Lighting", "Electronics", "Performance"];

type ProductForm = Omit<Product, "id">;

const emptyForm: ProductForm = {
  name: "",
  price: 0,
  category: "Interior",
  image: "",
  rating: 4.5,
  badge: "",
};

const AdminLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) onLogin();
    else { setError(true); setPin(""); }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-sm rounded-2xl border border-border bg-card p-8">
        <div className="mb-6 flex flex-col items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Lock className="text-primary" size={24} />
          </div>
          <h1 className="font-display text-xl font-bold text-foreground">Admin AutoModX</h1>
          <p className="font-body text-sm text-muted-foreground">Entrez le code PIN pour accéder</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="password" maxLength={6} value={pin} onChange={(e) => { setPin(e.target.value); setError(false); }} placeholder="Code PIN" className={`w-full rounded-lg border ${error ? "border-destructive" : "border-border"} bg-transparent px-4 py-3 text-center font-display text-2xl tracking-[0.5em] text-foreground outline-none focus:border-primary`} />
          {error && <p className="text-center font-body text-sm text-destructive">Code incorrect</p>}
          <button type="submit" className="w-full rounded-lg bg-primary py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]">Accéder</button>
        </form>
        <a href="/" className="mt-4 flex items-center justify-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft size={14} /> Retour au site
        </a>
      </motion.div>
    </div>
  );
};

const ProductFormComponent = ({ initial, onSave, onCancel }: { initial: ProductForm; onSave: (p: ProductForm) => void; onCancel: () => void }) => {
  const [form, setForm] = useState<ProductForm>(initial);
  const set = (key: keyof ProductForm, value: any) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) { toast.error("Le nom est requis"); return; }
    if (form.price <= 0) { toast.error("Le prix doit être > 0"); return; }
    onSave(form);
  };

  return (
    <motion.form initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} onSubmit={handleSubmit} className="rounded-xl border border-primary/30 bg-card p-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block font-body text-xs text-muted-foreground">Nom *</label>
          <input value={form.name} onChange={(e) => set("name", e.target.value)} className="w-full rounded-lg border border-border bg-transparent px-3 py-2 font-body text-sm text-foreground outline-none focus:border-primary" />
        </div>
        <div>
          <label className="mb-1 block font-body text-xs text-muted-foreground">Prix (DH) *</label>
          <input type="number" value={form.price} onChange={(e) => set("price", Number(e.target.value))} className="w-full rounded-lg border border-border bg-transparent px-3 py-2 font-body text-sm text-foreground outline-none focus:border-primary" />
        </div>
        <div>
          <label className="mb-1 block font-body text-xs text-muted-foreground">Catégorie *</label>
          <select value={form.category} onChange={(e) => set("category", e.target.value)} className="w-full rounded-lg border border-border bg-card px-3 py-2 font-body text-sm text-foreground outline-none focus:border-primary">
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="mb-1 block font-body text-xs text-muted-foreground">URL Image *</label>
          <input value={form.image} onChange={(e) => set("image", e.target.value)} placeholder="https://..." className="w-full rounded-lg border border-border bg-transparent px-3 py-2 font-body text-sm text-foreground outline-none focus:border-primary" />
        </div>
        <div>
          <label className="mb-1 block font-body text-xs text-muted-foreground">Note (1-5)</label>
          <input type="number" step="0.1" min="1" max="5" value={form.rating} onChange={(e) => set("rating", Number(e.target.value))} className="w-full rounded-lg border border-border bg-transparent px-3 py-2 font-body text-sm text-foreground outline-none focus:border-primary" />
        </div>
        <div>
          <label className="mb-1 block font-body text-xs text-muted-foreground">Badge</label>
          <input value={form.badge || ""} onChange={(e) => set("badge", e.target.value || undefined)} placeholder="Ex: Best Seller, New..." className="w-full rounded-lg border border-border bg-transparent px-3 py-2 font-body text-sm text-foreground outline-none focus:border-primary" />
        </div>
      </div>
      {form.image && (
        <div className="flex items-center gap-3">
          <Image size={14} className="text-muted-foreground" />
          <img src={form.image} alt="preview" className="h-16 w-16 rounded-lg object-cover border border-border" onError={(e) => (e.currentTarget.style.display = "none")} />
        </div>
      )}
      <div className="flex gap-3 pt-2">
        <button type="submit" className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 font-display text-xs font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]">
          <Save size={14} /> Enregistrer
        </button>
        <button type="button" onClick={onCancel} className="flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
          <X size={14} /> Annuler
        </button>
      </div>
    </motion.form>
  );
};

const AdminDashboard = () => {
  const [products, setProducts] = useState<Product[]>([...staticProducts]);
  const [mode, setMode] = useState<"list" | "add" | "edit">("list");
  const [editId, setEditId] = useState<number | null>(null);

  const handleAdd = (p: ProductForm) => {
    const newId = Math.max(...products.map((x) => x.id), 0) + 1;
    setProducts([...products, { ...p, id: newId }]);
    toast.success("Produit ajouté ! (session uniquement)");
    setMode("list");
  };

  const handleUpdate = (p: ProductForm) => {
    if (!editId) return;
    setProducts(products.map((x) => (x.id === editId ? { ...p, id: editId } : x)));
    toast.success("Produit modifié !");
    setMode("list");
    setEditId(null);
  };

  const handleDelete = (id: number) => {
    if (!confirm("Supprimer ce produit ?")) return;
    setProducts(products.filter((x) => x.id !== id));
    toast.success("Produit supprimé !");
  };

  const editProduct = products.find((p) => p.id === editId);

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card/50 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors"><ArrowLeft size={20} /></a>
            <h1 className="font-display text-lg font-bold text-foreground">Admin <span className="text-gradient-cyan">Panel</span></h1>
          </div>
          <span className="font-body text-xs text-muted-foreground">{products.length} produits</span>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-4 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2">
          <p className="font-body text-xs text-accent">⚠️ Les modifications sont temporaires (session). Pour modifier les produits définitivement, éditez le fichier <code className="font-mono">src/data/products.ts</code></p>
        </div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-sm font-semibold tracking-wider text-foreground">Gestion des Produits</h2>
          {mode === "list" && (
            <button onClick={() => setMode("add")} className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-display text-xs font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]">
              <Plus size={14} /> Ajouter
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {mode === "add" && <div className="mb-8"><ProductFormComponent initial={emptyForm} onSave={handleAdd} onCancel={() => setMode("list")} /></div>}
          {mode === "edit" && editProduct && (
            <div className="mb-8">
              <ProductFormComponent initial={{ name: editProduct.name, price: editProduct.price, category: editProduct.category, image: editProduct.image, rating: editProduct.rating, badge: editProduct.badge }} onSave={handleUpdate} onCancel={() => { setMode("list"); setEditId(null); }} />
            </div>
          )}
        </AnimatePresence>

        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-card/50">
                <th className="px-4 py-3 text-left font-display text-xs tracking-wider text-muted-foreground">Image</th>
                <th className="px-4 py-3 text-left font-display text-xs tracking-wider text-muted-foreground">Nom</th>
                <th className="hidden px-4 py-3 text-left font-display text-xs tracking-wider text-muted-foreground sm:table-cell">Catégorie</th>
                <th className="px-4 py-3 text-left font-display text-xs tracking-wider text-muted-foreground">Prix</th>
                <th className="px-4 py-3 text-right font-display text-xs tracking-wider text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <motion.tr key={p.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border-b border-border last:border-b-0 transition-colors hover:bg-card/30">
                  <td className="px-4 py-3">
                    <img src={p.image} alt={p.name} className="h-10 w-10 rounded-lg object-cover border border-border" onError={(e) => (e.currentTarget.src = "/placeholder.svg")} />
                  </td>
                  <td className="px-4 py-3"><p className="font-body text-sm font-semibold text-foreground">{p.name}</p></td>
                  <td className="hidden px-4 py-3 sm:table-cell"><span className="rounded-full bg-primary/10 px-2.5 py-1 font-body text-xs text-primary">{p.category}</span></td>
                  <td className="px-4 py-3"><span className="font-display text-sm font-bold text-foreground">{p.price} DH</span></td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => { setEditId(p.id); setMode("edit"); }} className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"><Pencil size={14} /></button>
                      <button onClick={() => handleDelete(p.id)} className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"><Trash2 size={14} /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  if (!authenticated) return <AdminLogin onLogin={() => setAuthenticated(true)} />;
  return <AdminDashboard />;
};

export default Admin;
