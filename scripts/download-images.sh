#!/bin/bash

mkdir -p public/images/localized

# Hero.tsx
curl -L "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" -o public/images/localized/hero-spread.jpg

# SignatureDishes.tsx
curl -L "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" -o public/images/localized/signature-entree.jpg
curl -L "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop" -o public/images/localized/salad-detail.jpg
curl -L "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1974&auto=format&fit=crop" -o public/images/localized/plating-detail.jpg

# Ingredients.tsx
curl -L "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop" -o public/images/localized/chef-ingredients.jpg

# CTA.tsx
curl -L "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop" -o public/images/localized/culinary-excellence.jpg

# Events.tsx
curl -L "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop" -o public/images/localized/luxury-event.jpg

# menus/page.tsx
curl -L "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" -o public/images/localized/wedding-party-category.jpg
curl -L "https://images.unsplash.com/photo-1626071477218-1d2a1b3b3b4c?q=80&w=1974&auto=format&fit=crop" -o public/images/localized/dana-bana-category.jpg
curl -L "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop" -o public/images/localized/hoppers-kottu-category.jpg
curl -L "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2070&auto=format&fit=crop" -o public/images/localized/bites-appetizers-category.jpg
curl -L "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" -o public/images/localized/bbq-grilled-category.jpg
curl -L "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" -o public/images/localized/menu-hero-bg.jpg

# events/page.tsx
curl -L "https://images.unsplash.com/photo-1519225468359-2996bc15e527?q=80&w=2070&auto=format&fit=crop" -o public/images/localized/wedding-event-detail.jpg
curl -L "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop" -o public/images/localized/corporate-event-detail.jpg
curl -L "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" -o public/images/localized/gallery-5.jpg
curl -L "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop" -o public/images/localized/gallery-6.jpg
curl -L "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" -o public/images/localized/events-hero-bg.jpg
curl -L "https://images.unsplash.com/photo-1530103862676-de3c9da59af7?q=80&w=2070&auto=format&fit=crop" -o public/images/localized/celebration-toast.jpg

# contact/page.tsx
curl -L "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop" -o public/images/localized/contact-hero-bg.jpg

echo "Images downloaded successfully."
