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
  { id: 1, name: "Carbon Fiber Steering Wheel Cover", price: 149, category: "Interior", image: "https://images.unsplash.com/photo-1600705722738-d39380209196?w=400&h=400&fit=crop", rating: 4.8, badge: "Best Seller" },
  { id: 2, name: "LED Ambient Light Kit", price: 99, category: "Lighting", image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?w=400&h=400&fit=crop", rating: 4.6 },
  { id: 3, name: "Premium Floor Mat Set", price: 249, category: "Interior", image: "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?w=400&h=400&fit=crop", rating: 4.9, badge: "New" },
  { id: 4, name: "Wireless Phone Mount Pro", price: 89, category: "Electronics", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=400&fit=crop", rating: 4.7 },
  { id: 5, name: "Sport Body Kit Spoiler", price: 599, category: "Exterior", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400&h=400&fit=crop", rating: 4.5, badge: "Premium" },
  { id: 6, name: "Turbo Cold Air Intake", price: 449, category: "Performance", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop", rating: 4.8 },
  { id: 7, name: "LED Headlight Upgrade H7", price: 199, category: "Lighting", image: "https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97?w=400&h=400&fit=crop", rating: 4.4 },
  { id: 8, name: "Dash Cam 4K Ultra HD", price: 349, category: "Electronics", image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=400&h=400&fit=crop", rating: 4.9, badge: "Top Rated" },
];
