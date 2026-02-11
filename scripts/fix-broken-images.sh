#!/bin/bash

# Fix broken images identified as 29-byte files

# Celebration Toast (Events Page CTA)
curl -L "https://images.unsplash.com/photo-1513623935135-c896b59073c1?q=80&w=2070&auto=format&fit=crop" -o public/images/localized/celebration-toast.jpg

# Culinary Excellence (About Us / Mission-Vision)
curl -L "https://images.unsplash.com/photo-1544124499-58912cbddada?q=80&w=2070&auto=format&fit=crop" -o public/images/localized/culinary-excellence.jpg

# Dana & Bana (Menus Page Traditional Category)
curl -L "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2070&auto=format&fit=crop" -o public/images/localized/dana-bana-category.jpg

# Wedding Event Detail (Events Page 1st Image)
curl -L "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" -o public/images/localized/wedding-event-detail.jpg

echo "Broken images fixed."
