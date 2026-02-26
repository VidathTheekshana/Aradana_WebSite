"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const weddingMenuPackages = [
  {
    id: "Menu 1",
    items: ["Vegetable Fried Rice", "Chicken Curry or Devilled", "Dhal Curry", "Potato Tempered", "Vegetable Chopsuey", "Cutlet", "Papadam"]
  },
  {
    id: "Menu 2",
    items: ["Vegetable Fried Rice", "Chicken Curry or Devilled", "Dhal Tempered", "Potato Curry / Devilled", "Kankun with Chilli Garlic", "Chilli Paste", "Papadam"]
  },
  {
    id: "Menu 3",
    items: ["Yellow Rice", "Brinjol Moju", "Chopsey", "Devilled Chicken", "Chilli Paste", "Papadam"]
  },
  {
    id: "Menu 4",
    items: ["Vegetable Buriyani", "Chicken Kurma", "Raitha Salad", "Minchi Sambol", "Malay Pickle", "Fried Egg", "Cutlet"]
  },
  {
    id: "Menu 5",
    items: ["Mixed Salad", "Egg Fried Rice", "Devilled Chicken or Curry", "Fish Stew or Ambulthiyal", "Pork Black Pol", "Dhal Tempered", "Devilled Potato", "Cutlet", "Papadam", "Watalappan or Caramal"]
  },
  {
    id: "Menu 6",
    items: ["Kothu (Chicken / Vegetable / Egg)", "Egg & Plane Hoppers", "Chicken Curry", "Fish Curry or Devilled", "Katta Sambol", "Seeni Sambol", "Watalappan or Caramal"]
  },
  {
    id: "Menu 7",
    items: ["Nazegoreng Rice", "Plain Rice", "Chicken Devilled or Khorma", "Pork Kalu Pol or Stew", "Fish Devilled or Stew", "Stir fry Vegetable", "Hot Butter Mushroom", "Tempered Kankun with Garlic Dry Chili", "Malay Pickled", "Cutlet", "Papadam", "Watalappan or Caramel"]
  },
  {
    id: "Menu 8",
    items: ["Welcome Drink", "Vegetable Fried Rice", "Sea food Noodles", "Chicken Curry or Devilled", "Fish Devilled or Stew", "Devilled Prawn or Cuttlefish", "Cashew Green Pea Curry", "Vegetable Chopsuey", "Brinjul Moju", "Tempered Potato or Dhal", "Papadam", "Watalappan or Caramel"]
  },


  {
    id: "Menu 9",
    items: ["Welcome Drink", "Mixed garden salad", "vegetable Fried Rice'", "Plane Rice", "Potato curry or Tempered", "Dhall Tempered", "Brinjol Moju", "Chicken Curry or Devilled", "Fish Stew or Ambulthiyal", "Papadam", "Watalappan or Caramel"]
  },


  {
    id: "Menu 10",
    items: ["Greek Salad", "Bread Rolls & Butter", "Carrot soup or Chicken soup", "Mongolian Fried Rice With Egg", "Penne pasta with Cabnara or napolotana sauce", "Garlic Prawns ", "Vegetable Chopsuey", "Chilli Paste(on the BBQ grill : BBQ Chicken,BBQ Fish,Serving with garlic Butter&BBq sauce", "Fruit Salad"]
  },

{
    id: "Menu 11",
    items: ["Mixed Salad", "Plane  Rice", "Vegetable Fried Rice", "Fish Curry or Ambulthiyal", "Chicken curry", "Dhall Curry", "Brinjol Moju", "Peanut Mixture", "Cutlet", "Papadam", "Watalappan or Caramel"]
  },

  {
    id: "Menu 12",
    items: ["Yellow Rice", "Chicken Curry or Fish Ambulthiyal", "Dhall Curry ","Potato Tempered", "Brinjol Moju", "Chilli Paste", "Cuttlet", "Papadam", "Watalappan or Caramel"]
  },

];

const funeralMenuPackages = [
  {
    id: "1",
    items: ["සුදු බත්", "කවිට්ට කාරල්", "චිට්ටන්කා හරි", "ශාස්ත්‍රාලි හා ඉිනු සලාදය", "පසඟ"],
  },
  {
    id: "2",
    items: ["සුදු බත්", "කවිට්ට කාරල්", "චිට්ටන්කා හරි", "අල් බාළු හෝ", "අබරිල්ල මාළු", "ශාස්ත්‍රාලි හා ඉිනු සලාදය", "පසඟ", "අඩුල් කෙකෙසල්"],
  },
  {
    id: "3",
    items: ["සුදු බත්", "මාළු අඩුල් හිනල්", "හෝ කරි", "කවිට්ට කාරල්", "බෝංචි", "කොස් මැල්ලුම්", "චිට්ටන්කා හරි", "ශාස්ත්‍රාලි හා ඉිනු සලාදය", "පසඟ", "අඩුල් කෙකෙසල්"],
  },
  {
    id: "4-A",
    items: ["සුදු බත්", "මාළු කරි", "හෝ අඩුල් හිනල්", "හෑප්පු", "ගෝවා තෙල්දාල", "අල් හෝ", "අබරිල්ල කාර්ය", "පසඟ"],
  },
  {
    id: "5-A",
    items: ["සුදු බත්", "මාළු කරි හෝ", "අඩුල් හිනල්", "හෑප්පු නෙමිය්ාදු", "ගෝවා නෙමිය්ාදු", "පසඟ"],
  },
  {
    id: "6-A",
    items: ["කහා බත්", "චිකන් කරි", "හෑප්පු නෙමිය්ාදු", "අල්නෙල් දාල", "පසඟ"],
  },
  {
    id: "7-A",
    items: ["සුදු බත්", "මාළු කරි හෝ", "අඩුල් හිනල්", "බිට් කාර්ය", "හෑප්පු", "අල්නෙල් දාල", "ව කාල් තෙල්දාල", "පසඟ", "අඩුල් කෙකෙසල්"],
  },
  {
    id: "8-A",
    items: ["සුදු බත් / කහා බත්", "මාළු අඩුල් හිනල්", "හෝ මාළු කාර්ය", "බෝංචි තෙල්දාල", "මයස්ස්රෝකාල් කමල්ලු හෝ", "හෑප්පු කාර්ය", "පසඟ", "අඩුල් කෙකෙසල්"],
  },
  {
    id: "9-A",
    items: ["සුදු බත්", "මාළු අඩුල් හිනල්", "හෝ කාර්ය", "අල් නෙල් දාල", "බෝංචි කරි", "කබල් හෑප්පු", "පසඟ", "අඩුල් කෙකෙසල්"],
  },
  {
    id: "10-A",
    items: ["එළවළු බත්", "ඕලු සලාදය", "චිකන් කරි හෝ", "මාළු කරි", "බදු මොරූ", "අල් තෙල්දාල", "හාල් බිඳුල", "හෑප්පු", "පසඟ", "ෆේලි සලගා කස්ටමිේ"],
  },
  {
    id: "11-C",
    items: ["කහා බත් සෙර සමග", "එළවළු නූදිල්ස්", "බිත්තර සලාදය", "එළවළු මොරූ", "බදු මොරූ", "චිකන් කරි හෝ මාළු කරි", "උඹිළකඩ සඔිබෝල", "මාළු අතිවාරු", "අල් නෙල්දාල", "පසඟ", "අලුල් කෙකෙල්"],
  },
  {
    id: "12-A",
    items: ["සුදු බත්", "මාළු හෝ චිකන් කරි", "කොස් මැල්ලුම්", "හෝ පොළොන් කරි", "අල් නෙල් දාල", "හෑප්පු කරි", "ගමේ අතිවාරු", "පසඟ"],
  },
];

const hoppersMenuPackages = [
  {
    id: "Hoppers & Kottu Menu 01",
    sections: [
      {
        heading: "Base",
        items: ["Egg kottu or Chicken kottu", "String hoppers white, Red", "Egg & plane hoppers"]
      },
      {
        heading: "Choice 04 (choose any 4)",
        items: ["Pork stew", "Chicken curry or devilled", "Fish ambulthiyal", "Prawn curry or devilled", "Potato white curry"]
      },
      {
        heading: "Sambols",
        items: ["Seenisambol", "Kattasambol"]
      },
      {
        heading: "Dessert",
        items: ["Cream caramel", "Cut fruits"]
      }
    ]
  },
  {
    id: "Hoppers & Kottu Menu 02",
    sections: [
      {
        heading: "Base",
        items: ["Kottu – Chicken & Vegetable, Eggs", "Egg & plane hoppers"]
      },
      {
        heading: "Curries",
        items: ["Chicken curry or devilled", "Fish curry or ambulthiyal", "Potato curry"]
      },
      {
        heading: "Sambols",
        items: ["Kattasambol", "Seenisambol"]
      },
      {
        heading: "Dessert",
        items: ["Watalappan", "or Cream Caramel"]
      }
    ]
  }
];

const bitesMenuItems = [
  { name: "1kg Cashew nuts", price: "Rs. 8000" },
  { name: "1kg Devilled prawn", price: "Rs. 3500" },
  { name: "1kg Fried handalla", price: "Rs. 3000" },
  { name: "1kg Devilled chicken", price: "Rs. 2000" },
  { name: "1kg Devilled fish", price: "Rs. 4000" },
  { name: "1kg Fried calamari (Cuttle fish)", price: "Rs. 2500" },
  { name: "1kg Chips", price: "Rs. 4000" },
  { name: "1kg Devilled Pork", price: "Rs. 4800" },
  { name: "1kg Tempered Kadala", price: "Rs. 1500" },
  { name: "1kg Vegetable Tempura", price: "Rs. 1200" },
  { name: "1kg Boiled Vegetable", price: "Rs. 1000" },
];

const bbqMenuPackages = [
  {
    id: "Western B.B.Q Menu 01",
    sections: [
      {
        heading: "Salads",
        items: ["Russian egg salad", "Mixed salad"]
      },
      {
        heading: "From the Grill",
        items: ["B.B.Q. Chicken", "Sea food kebab", "B.B.Q. Fish", "Chicken Bockhurst", "Served with BBQ Sauce & garlic butter"]
      },
      {
        heading: "Sides",
        items: ["Penne pasta with pesto dressing", "Assorted bread & butter", "Boiled vegetable"]
      },
      {
        heading: "Dessert",
        items: ["Fruit kebab or Chocolate biscuit pudding"]
      }
    ]
  },
  {
    id: "Western B.B.Q Menu 02",
    sections: [
      {
        heading: "Salads",
        items: ["Greek Salad", "Potato salad with chop onion"]
      },
      {
        heading: "Select any 5 Grilled Items",
        items: ["Chicken drumsticks", "Pork chop", "Vegetable kebab", "Mutton kebab", "B.B.Q Fish", "Sea food kebab", "Served with BBQ Sauce & garlic butter"]
      },
      {
        heading: "Baked Potato & Bread",
        items: ["Spaghetti napolatana", "Bread basket & butter"]
      },
      {
        heading: "Dessert",
        items: ["Chocolate biscuit pudding", "Fruit kebab"]
      }
    ]
  }
];

const menuCategories = [
  {
    title: "Weddings & Parties",
    description: "Elegant courses designed for grand celebrations. Choose from our curated packages.",
    image: "/images/localized/wedding-party-category.jpg",
    items: []
  },
  {
    title: "Dana & Bana",
    description: "Traditional offerings prepared with reverence and authentic spices.",
    image: "/images/localized/dana-bana-category.jpg",
    items: [
      { name: "Kiribath", detail: "with Lunu Miris" },
      { name: "Pol Sambol", detail: "& Coconut Roti" },
      { name: "Sweet Milk Rice", detail: "Traditional Preparation" },
    ]
  },
  {
    title: "Funerals",
    description: "Comforting, warm meals served with dignity. Choose from our curated packages.",
    image: "/images/localized/chef-ingredients.jpg",
    items: []
  },
  {
    title: "Hoppers & Kottu",
    description: "Live action stations bringing street food to luxury events.",
    image: "/images/localized/hoppers-kottu-category.jpg",
    items: []
  },
   {
    title: "Bites & Appetizers",
    description: "Perfect starters for cocktail hours and receptions. Ordered by the kilogram.",
    image: "/images/localized/bites-appetizers-category.jpg",
    items: []
  },
  {
    title: "BBQ & Grilled",
    description: "Smoky flavors and perfectly charred cuts. Choose from our Western BBQ packages.",
    image: "/images/localized/bbq-grilled-category.jpg",
    items: []
  }
];

export default function MenusPage() {
  return (
    <main className="bg-aradana-dark min-h-screen">
        {/* Page Hero */}
  <section className="relative h-screen flex items-center justify-center overflow-hidden">

         <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/localized/menu-hero-bg.jpg"
                    alt="Menu Background"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-aradana-dark" />
             </div>
          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              {/* Top Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center gap-4 mb-6"
              >
                  <div className="h-[1px] w-12 bg-aradana-gold/60" />
                  <span className="text-aradana-gold tracking-[0.3em] uppercase text-xs md:text-sm font-semibold">
                      Aradana Caters
                  </span>
                  <div className="h-[1px] w-12 bg-aradana-gold/60" />
              </motion.div>
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight drop-shadow-2xl"
            >
              Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aradana-gold via-white to-aradana-gold bg-[length:200%_auto] animate-gradient">
                Menus
              </span>
            </motion.h1>
                 {/* Subtitle */}
                 <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-2xl text-aradana-muted font-light max-w-3xl mx-auto leading-relaxed"
                 >
                    Curated culinary experiences for every occasion.
                 </motion.p>
          </div>
            
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 80 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-[1px] bg-gradient-to-b from-aradana-gold/0 via-aradana-gold/50 to-aradana-gold/0"
          />
        </section>

        {/* Menu Categories */}
  <section className="relative z-20 container mx-auto px-6 pb-24">
            <div className="space-y-8">
                {menuCategories.map((category, index) => (
                    <MenuSection key={index} category={category} index={index} />
                ))}
            </div>
        </section>

        {/* Wedding & Parties Menu Packages */}
        <section id="wedding-packages" className="relative z-20 container mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-16 bg-aradana-gold/50" />
              <span className="text-aradana-gold tracking-[0.3em] uppercase text-xs font-semibold">Aradana Catering</span>
              <div className="h-[1px] w-16 bg-aradana-gold/50" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Wedding &amp; Party Packages</h2>
            <p className="text-aradana-muted max-w-2xl mx-auto">Choose from our 8 carefully curated packages. All prices are per person. Minimum 100 guests. Contact us to customise.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {weddingMenuPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-aradana-gold/40 rounded-2xl p-6 transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-aradana-gold/10 border border-aradana-gold/30 flex items-center justify-center text-aradana-gold font-bold text-sm group-hover:bg-aradana-gold/20 transition-colors">
                    {index + 1}
                  </div>
                  <span className="text-white/50 text-xs uppercase tracking-widest">Package</span>
                </div>
                <ul className="space-y-2 flex-1">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-lg text-aradana-muted group-hover:text-white/70 transition-colors">
                      <span className="text-aradana-gold/50 mt-[3px] flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Funeral Menu Packages */}
        <section id="funeral-packages" className="relative z-20 container mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-16 bg-aradana-gold/50" />
              <span className="text-aradana-gold tracking-[0.3em] uppercase text-xs font-semibold">Aradana Catering</span>
              <div className="h-[1px] w-16 bg-aradana-gold/50" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Funeral Menu Packages</h2>
            <p className="text-aradana-muted max-w-2xl mx-auto">Choose from our carefully curated packages. All packages are prepared with the highest standards of quality and care. Minimum 100 guests. Contact us for pricing.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {funeralMenuPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-aradana-gold/40 rounded-2xl p-6 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-aradana-gold/10 border border-aradana-gold/30 flex items-center justify-center text-aradana-gold font-bold text-sm group-hover:bg-aradana-gold/20 transition-colors">
                    {pkg.id}
                  </div>
                  <span className="text-white/50 text-xs uppercase tracking-widest">Package</span>
                </div>
                <ul className="space-y-2">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-lg text-aradana-muted group-hover:text-white/70 transition-colors">
                      <span className="text-aradana-gold/50 mt-[3px] flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BBQ Menu Packages */}
        <section id="bbq-packages" className="relative z-20 container mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-16 bg-aradana-gold/50" />
              <span className="text-aradana-gold tracking-[0.3em] uppercase text-xs font-semibold">Aradana Catering</span>
              <div className="h-[1px] w-16 bg-aradana-gold/50" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Western BBQ Packages</h2>
            <p className="text-aradana-muted max-w-2xl mx-auto">Choose from our two signature Western BBQ packages. Perfect for outdoor events and private gatherings. Contact us for pricing.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bbqMenuPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-aradana-gold/40 rounded-2xl p-8 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="text-aradana-gold font-bold text-lg">{pkg.id}</div>
                </div>
                <div className="space-y-5">
                  {pkg.sections.map((section, si) => (
                    <div key={si}>
                      <p className="text-aradana-gold/80 text-sm uppercase tracking-widest mb-2">{section.heading}</p>
                      <ul className="space-y-1">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-lg text-aradana-muted group-hover:text-white/70 transition-colors">
                            <span className="text-aradana-gold/50 mt-[3px] flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Hoppers & Kottu Menu Packages */}
        <section id="hoppers-packages" className="relative z-20 container mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-16 bg-aradana-gold/50" />
              <span className="text-aradana-gold tracking-[0.3em] uppercase text-xs font-semibold">Aradana Catering</span>
              <div className="h-[1px] w-16 bg-aradana-gold/50" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Hoppers & Kottu Packages</h2>
            <p className="text-aradana-muted max-w-2xl mx-auto">Choose from our two Hoppers & Kottu packages. Perfect for any occasion. Contact us for pricing.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hoppersMenuPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-aradana-gold/40 rounded-2xl p-8 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="text-aradana-gold font-bold text-lg">{pkg.id}</div>
                </div>
                <div className="space-y-5">
                  {pkg.sections.map((section, si) => (
                    <div key={si}>
                      <p className="text-aradana-gold/80 text-sm uppercase tracking-widest mb-2">{section.heading}</p>
                      <ul className="space-y-1">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-lg text-aradana-muted group-hover:text-white/70 transition-colors">
                            <span className="text-aradana-gold/50 mt-[3px] flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bites & Appetizers Menu */}
        <section id="bites-menu" className="relative z-20 container mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-16 bg-aradana-gold/50" />
              <span className="text-aradana-gold tracking-[0.3em] uppercase text-xs font-semibold">Aradana Catering</span>
              <div className="h-[1px] w-16 bg-aradana-gold/50" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Bites &amp; Appetizers</h2>
            <p className="text-aradana-muted max-w-2xl mx-auto">All bites are ordered per 1kg. Mix and match to create the perfect spread for your event.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-aradana-gold/40 rounded-2xl p-8 md:p-12 transition-all duration-300 group max-w-3xl mx-auto"
          >
            <p className="text-aradana-gold/80 text-sm uppercase tracking-widest mb-6">Per 01 kg</p>
            <ul className="space-y-3">
              {bitesMenuItems.map((item, i) => (
                <li key={i} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 group-hover:border-aradana-gold/20 transition-colors">
                  <div className="flex items-start gap-2 text-lg text-aradana-muted group-hover:text-white/70 transition-colors">
                    <span className="text-aradana-gold/50 mt-[3px] flex-shrink-0">•</span>
                    <span>{item.name}</span>
                  </div>
                  <span className="text-aradana-gold font-semibold text-base whitespace-nowrap">{item.price}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

            {/* CTA */}
            <section className="relative z-20 container mx-auto px-6 pb-32">
              <div className="mt-4 text-center">
                   <h2 className="text-3xl text-white mb-8">Ready to customize your menu?</h2>
                   <a href="/contact" className="bg-gradient-to-r from-aradana-gold to-aradana-amber text-aradana-dark font-bold px-10 py-4 rounded-full text-lg hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] transition-all duration-300 transform hover:scale-105 inline-block">
                     Book Your Event
                   </a>
              </div>
            </section>
    </main>
  );
}

function MenuSection({ category, index }: { category: { title: string; description: string; image: string; items: { name: string; detail: string }[] }, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={cn("flex flex-col md:flex-row gap-12 items-center", isEven ? "" : "md:flex-row-reverse")}
        >
            {/* Image */}
            <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shadow-2xl group">
                 <Image 
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-aradana-dark/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 space-y-8">
                <div>
                   <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{category.title}</h2>
                   <p className="text-aradana-muted text-lg">{category.description}</p>
                   {category.title === "Weddings & Parties" && (
                     <a href="#wedding-packages" className="inline-block mt-6 text-base font-semibold text-aradana-gold border border-aradana-gold/50 px-8 py-3 rounded-full hover:bg-aradana-gold hover:text-aradana-dark transition-all duration-300 transform hover:scale-105">
                       View all packages ↓
                     </a>
                   )}
                   {category.title === "Funerals" && (
                     <a href="#funeral-packages" className="inline-block mt-6 text-base font-semibold text-aradana-gold border border-aradana-gold/50 px-8 py-3 rounded-full hover:bg-aradana-gold hover:text-aradana-dark transition-all duration-300 transform hover:scale-105">
                       View all packages ↓
                     </a>
                   )}
                   {category.title === "BBQ & Grilled" && (
                     <a href="#bbq-packages" className="inline-block mt-6 text-base font-semibold text-aradana-gold border border-aradana-gold/50 px-8 py-3 rounded-full hover:bg-aradana-gold hover:text-aradana-dark transition-all duration-300 transform hover:scale-105">
                       View all packages ↓
                     </a>
                   )}
                   {category.title === "Hoppers & Kottu" && (
                     <a href="#hoppers-packages" className="inline-block mt-6 text-base font-semibold text-aradana-gold border border-aradana-gold/50 px-8 py-3 rounded-full hover:bg-aradana-gold hover:text-aradana-dark transition-all duration-300 transform hover:scale-105">
                       View all packages ↓
                     </a>
                   )}
                   {category.title === "Bites & Appetizers" && (
                     <a href="#bites-menu" className="inline-block mt-6 text-base font-semibold text-aradana-gold border border-aradana-gold/50 px-8 py-3 rounded-full hover:bg-aradana-gold hover:text-aradana-dark transition-all duration-300 transform hover:scale-105">
                       View all items ↓
                     </a>
                   )}
                </div>

                <div className="space-y-6">
                    {category.items.map((item: { name: string; detail: string }, i: number) => (
                        <div key={i} className="group cursor-default">
                             <div className="flex justify-between items-baseline border-b border-white/10 pb-2 group-hover:border-aradana-gold/50 transition-colors duration-300">
                                 <h3 className="text-xl text-white font-medium group-hover:text-aradana-gold transition-colors duration-300">{item.name}</h3>
                             </div>
                             <p className="text-sm text-aradana-muted mt-1">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
