<p align="center">
  <img src="public/favicon.png" alt="AUTOMODX Logo" width="120" />
</p>

<h1 align="center">🚗 AUTOMODX</h1>

<p align="center">
  <strong>Votre boutique en ligne d'accessoires automobile premium au Maroc</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
</p>

---

## 📋 À propos

**AUTOMODX** est une application e-commerce moderne dédiée aux accessoires automobiles premium au Maroc. Elle offre une expérience d'achat fluide avec commande directe via WhatsApp.

### ✨ Fonctionnalités

| Fonctionnalité | Description |
|---|---|
| 🛒 **Panier interactif** | Ajout/suppression de produits avec gestion des quantités |
| 📱 **Commande WhatsApp** | Envoi automatique du récapitulatif de commande via WhatsApp |
| 🌐 **Bilingue FR/AR** | Interface complète en français et arabe avec support RTL |
| 🔍 **Filtrage par catégorie** | Navigation facile par catégories de produits |
| ⭐ **Évaluations** | Système de notation par étoiles pour chaque produit |
| 📱 **Responsive** | Design adaptatif pour mobile, tablette et desktop |
| 🎨 **Mode sombre** | Interface premium avec thème sombre |

---

## 🚀 Démarrage rapide

### Prérequis

- [Node.js](https://nodejs.org/) (v18 ou supérieur)
- npm ou bun

### Installation

```bash
# Cloner le projet
git clone https://github.com/mehdi-zgui/automodx.git
cd automodx

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

L'application sera accessible sur `http://localhost:8080`

### Build de production

```bash
npm run build
npm run preview
```

---

## 📁 Structure du projet

```
automodx/
├── public/                # Assets statiques & favicon
├── src/
│   ├── assets/products/   # Images des produits
│   ├── components/        # Composants React
│   │   ├── ui/            # Composants UI réutilisables (shadcn/ui)
│   │   ├── Navbar.tsx     # Barre de navigation
│   │   ├── Hero.tsx       # Section héro
│   │   ├── ProductGrid.tsx# Grille de produits
│   │   ├── CartDrawer.tsx # Panier latéral
│   │   └── ...
│   ├── data/
│   │   └── products.ts   # Catalogue de produits
│   ├── i18n/              # Internationalisation (FR/AR)
│   ├── pages/             # Pages de l'application
│   └── hooks/             # Hooks React personnalisés
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## 🛠️ Technologies

- **Frontend** : React 18 + TypeScript
- **Bundler** : Vite 5
- **Styling** : Tailwind CSS 3 + shadcn/ui
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Routing** : React Router DOM
- **Notifications** : Sonner

---

## 📦 Gestion des produits

Les produits sont gérés directement dans le fichier `src/data/products.ts`. Pour ajouter un produit :

1. Ajoutez l'image dans `src/assets/products/`
2. Importez-la dans `products.ts`
3. Ajoutez l'objet produit au tableau `products`

```typescript
{
  id: 9,
  name: "Nom du produit",
  price: 299,
  category: "interieur",
  image: importedImage,
  rating: 4.5,
  badge: "Nouveau"
}
```

---

## 👤 Auteur

**ZGUIGOU ELMEHDI**

- GitHub : [@mehdi-zgui](https://github.com/mehdi-zgui)

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<p align="center">
  Fait avec ❤️ au Maroc 🇲🇦
</p>
