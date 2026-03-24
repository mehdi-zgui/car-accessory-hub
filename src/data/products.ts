import steeringWheelCover from "@/assets/products/steering-wheel-cover.jpg";
import ledAmbientKit from "@/assets/products/led-ambient-kit.jpg";
import floorMatSet from "@/assets/products/floor-mat-set.jpg";
import phoneMount from "@/assets/products/phone-mount.jpg";
import spoiler from "@/assets/products/spoiler.jpg";
import coldAirIntake from "@/assets/products/cold-air-intake.jpg";
import ledHeadlight from "@/assets/products/led-headlight.jpg";
import dashCam from "@/assets/products/dash-cam.jpg";

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
  { id: 1, name: "Carbon Fiber Steering Wheel Cover", price: 149, category: "Interior", image: steeringWheelCover, rating: 4.8, badge: "Best Seller" },
  { id: 2, name: "LED Ambient Light Kit", price: 99, category: "Lighting", image: ledAmbientKit, rating: 4.6 },
  { id: 3, name: "Premium Floor Mat Set", price: 249, category: "Interior", image: floorMatSet, rating: 4.9, badge: "New" },
  { id: 4, name: "Wireless Phone Mount Pro", price: 89, category: "Electronics", image: phoneMount, rating: 4.7 },
  { id: 5, name: "Sport Body Kit Spoiler", price: 599, category: "Exterior", image: spoiler, rating: 4.5, badge: "Premium" },
  { id: 6, name: "Turbo Cold Air Intake", price: 449, category: "Performance", image: coldAirIntake, rating: 4.8 },
  { id: 7, name: "LED Headlight Upgrade H7", price: 199, category: "Lighting", image: ledHeadlight, rating: 4.4 },
  { id: 8, name: "Dash Cam 4K Ultra HD", price: 349, category: "Electronics", image: dashCam, rating: 4.9, badge: "Top Rated" },
];
