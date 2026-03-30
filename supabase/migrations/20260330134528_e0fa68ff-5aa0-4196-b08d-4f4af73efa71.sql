
CREATE TABLE public.products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  name_ar TEXT,
  price INTEGER NOT NULL DEFAULT 0,
  category TEXT NOT NULL DEFAULT 'Interior',
  image TEXT NOT NULL DEFAULT '',
  rating NUMERIC(2,1) NOT NULL DEFAULT 4.5,
  badge TEXT,
  badge_ar TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read products" ON public.products
  FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Anyone can insert products" ON public.products
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Anyone can update products" ON public.products
  FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Anyone can delete products" ON public.products
  FOR DELETE TO anon, authenticated USING (true);

INSERT INTO public.products (id, name, name_ar, price, category, image, rating, badge, badge_ar) VALUES
  (1, 'Carbon Fiber Steering Wheel Cover', 'غطاء مقود ألياف الكربون', 149, 'Interior', '/products/steering-wheel-cover.jpg', 4.8, 'Best Seller', 'الأكثر مبيعاً'),
  (2, 'LED Ambient Light Kit', 'طقم إضاءة LED داخلية', 99, 'Lighting', '/products/led-ambient-kit.jpg', 4.6, NULL, NULL),
  (3, 'Premium Floor Mat Set', 'طقم سجاد أرضي فاخر', 249, 'Interior', '/products/floor-mat-set.jpg', 4.9, 'New', 'جديد'),
  (4, 'Wireless Phone Mount Pro', 'حامل هاتف لاسلكي برو', 89, 'Electronics', '/products/phone-mount.jpg', 4.7, NULL, NULL),
  (5, 'Sport Body Kit Spoiler', 'طقم جناح رياضي خارجي', 599, 'Exterior', '/products/spoiler.jpg', 4.5, 'Premium', 'فاخر'),
  (6, 'Turbo Cold Air Intake', 'فلتر هواء بارد تيربو', 449, 'Performance', '/products/cold-air-intake.jpg', 4.8, NULL, NULL),
  (7, 'LED Headlight Upgrade H7', 'مصابيح أمامية LED H7', 199, 'Lighting', '/products/led-headlight.jpg', 4.4, NULL, NULL),
  (8, 'Dash Cam 4K Ultra HD', 'كاميرا سيارة 4K Ultra HD', 349, 'Electronics', '/products/dash-cam.jpg', 4.9, 'Top Rated', 'الأعلى تقييماً');

SELECT setval('products_id_seq', 8);
