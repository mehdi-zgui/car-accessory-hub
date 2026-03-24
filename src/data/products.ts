export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  badge?: string;
}

export const categories = [
  "All",
  "Interior",
  "Exterior",
  "Lighting",
  "Electronics",
  "Performance",
] as const;

export const products: Product[] = [
  { id: 1, name: "Carbon Fiber Steering Wheel Cover", price: 49.99, category: "Interior", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=400&fit=crop", rating: 4.8, badge: "Best Seller" },
  { id: 2, name: "LED Ambient Light Kit", price: 34.99, category: "Lighting", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop", rating: 4.6 },
  { id: 3, name: "Premium Floor Mat Set", price: 89.99, category: "Interior", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=400&fit=crop", rating: 4.9, badge: "New" },
  { id: 4, name: "Wireless Phone Mount Pro", price: 29.99, category: "Electronics", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=400&fit=crop", rating: 4.7 },
  { id: 5, name: "Sport Body Kit Spoiler", price: 199.99, category: "Exterior", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=400&fit=crop", rating: 4.5, badge: "Premium" },
  { id: 6, name: "Turbo Cold Air Intake", price: 149.99, category: "Performance", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=400&fit=crop", rating: 4.8 },
  { id: 7, name: "LED Headlight Upgrade H7", price: 79.99, category: "Lighting", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=400&fit=crop", rating: 4.4 },
  { id: 8, name: "Dash Cam 4K Ultra HD", price: 119.99, category: "Electronics", image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=400&fit=crop", rating: 4.9, badge: "Top Rated" },
];
