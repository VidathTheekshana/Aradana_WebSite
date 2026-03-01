export interface MenuPackage {
  id: string;
  items: string[];
}

export interface HoppersBBQSection {
  heading: string;
  items: string[];
}

export interface HoppersBBQPackage {
  id: string;
  sections: HoppersBBQSection[];
}

export interface BiteItem {
  name: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  description: string;
  image: string;
  items: { name: string; detail: string }[];
}

export const weddingMenuPackages: MenuPackage[] = [
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

export const danaMenuPackages: MenuPackage[] = [
  { id: "1", items: ["සුදු බත්", "මාලු ඇඹුල්තියල්", "පරිප්පු", "පොලොස් කරි", "අල බැදුම", "පපඩම්"] },
  { id: "2", items: [
    "සුදු බත්",
    "මාලු ඇඹුල්තියල් හෝ කරි",
    "පරිප්පු",
    "පොලොස් කරි",
    "බෝනචි තෙල්දාලා",
    "මඤ්ඤොක්කා මැල්ලුම්",
    "රටකජු මිශ්‍ර බැදුම"
  ] },
  { id: "3", items: [
    "ඉදි ආප්ප (රතු හා සුදු)",
    "මාලු කරි හෝ චිකන් කරි",
    "පොල් සම්බෝල හෝ පොල් මැල්ලුම්",
    "අල කරි"
  ] },
  { id: "4", items: [
    "එළවලු බත් හෝ කහ බත්",
    "මාලු ඇඹුල්තියල් හෝ චිකන් කරි",
    "අල කරි",
    "එළවලු චොප්සි",
    "බටු මෝජූ",
    "පපඩ්ම්"
  ] },
  { id: "5", items: [
    "පාන්",
    "ඉදි ආප්ප(සුදු/රතු)",
    "රතු කැකුළු බත්",
    "මාලු කරි",
    "අල කරි",
    "පොල් සම්බෝල",
    "ළූණූ තෙල්දාලා"
  ] },
  { id: "6", items: [
    "කහ බත්",
    "මාලූ ඇඹුල්තියල් හෝ කරි",
    "අල බැදුම",
    "බටු මෝජු",
    "අඹ හෝ ඇඹරැල්ලා කරි",
    "කට්ලට්",
    "පපඩ්ම්",
    "වටලප්පන් හෝ ක්‍රීම් කැරමල්"
  ] },
  { id: "7", items: [
    "ඉදි ආප්ප (රතු හා සුදු)",
    "සුදු බත්",
    "මාලු කරි",
    "පොල් සම්බෝල හෝ පොල් මැල්ලුමි",
    "අල කරි හෝ පරිප්පු කරි",
    "සීනී ස්ම්බෝල",
    "පොලොස් කරි හෝ ඇඹරැල්ලා මාලුව",
    "ක්‍රීම් කැරම්ල් හෝ වටලප්පන්"
  ] },
  { id: "8", items: [
    "සුදු බත්",
    "මාලු කරි හෝ චිකන් කරි",
    "අල කරි හෝ බැදුම",
    "කරවල මිරිස් කරල් සමග බැදලා",
    "පොලොස් කර්‍ර හෝ",
    "කිරි කොස්",
    "කරවිල සම්බෝල",
    "පරිප්පු කරි",
    "ගමේ අව්වාරු",
    "පලතුරු සලාදය"
  ] },
  { id: "9", items: [
    "සුදු බත් හෝ රතු බත්",
    "එළවලු බත්",
    "මිශ්‍ර සලාදය",
    "මාලු කරි හෝ ඇඹුල්තියල්",
    "අල කරි",
    "පරිප්පු කරි",
    "බටු මෝජු1",
    "රට කජු සමග මිශ්‍ර බැදුම",
    "අඹ හෝ ඇඹරැල්ලා මාලුව",
    "කට්ලට්",
    "වටලප්පන් හෝ ක්‍රීම් කැරමල්"
  ] },
  { id: "10", items: [
    "කහ බත්",
    "උම්බලකඩ සම්බෝල",
    "මාලු කරි හෝ චිකන් කරි",
    "බිත්තර  සලාදය",
    "බටු මොජු",
    "කඩල පර්‍ර්ප්පු",
    "අඹ හෝ ඇඹරැල්ලා කරී",
    "කට්ලට්",
    "පපඩම්",
    "වටලප්පන් හෝ ක්‍රීම් කැරමල්"
  ] },
  { id: "11-A", items: [
    "එළවලු බත්",
    "මිශ්‍ර සලාදය",
    "මාලූ ඇඹුල්තියල් හෝ කරි",
    "පරිප්පු කරි",
    "අල බැදුම",
    "පරිප්පු කරි",
    "බටු මෝජු",
    "කට්ලට්",
    "පපඩම්",
    "වටලප්පන් හෝ ක්‍රීම් කැරමල්"
  ] },
{ id: "11-B", items: [
  "ඉදි ආප්ප (රතු හා සුදු)",
  "පිට්ටු",
  "තෝසේ",
  "පරාටා",
  "අල කරි",
  "මින්චි සම්බෝල",
  "සීනී සම්බෝල",
  "චිකන් කරි හෝ මාලූ කරි",
  "සාම්බාරු හොදි",
  "පර්‍ර්ප්පු",
  "ක්‍රීම් කැරම්ල් හෝ වටලප්පන්"
] },
];

export const funeralMenuPackages: MenuPackage[] = [
  { 
    id: "1",
    items: ["සුදු බත්", "කට්ට කරවල", "වට්ටක්කා කරි", "තක්කාලි හා ලූණු සාලාදය", "පපඩම්"],
  },
  {
    id: "2",
    items: ["සුදු බත්", "කට්ට කරවල", "වට්ටක්කා කරි", "තක්කාලි හා ලූණු සාලාදය", "පපඩම්", "අඹ මාලූව හෝ ඇඹරැල්ලා මාලුව", "ඇඹුල් කෙසෙල්"],
  },
  {
    id: "3",
    items: [
      "සුදු බත්",
      "මාලු ඇඹුල්තියල් හෝ කරි",
      "බොන්චි",
      "කට්ට කරවල",
      "කොස් මැල්ලුම්",
      "වට්ටක්කා කරි",
      "තක්කාලි හා ලූණු සාලාදය",
      "පපඩම්",
      "අඹ මාලූව හෝ ඇඹරැල්ලා මාලුව",
      "ඇඹුල් කෙසෙල්"
    ],
  },
  {
    id: "4-A",
    items: ["සුදු බත්", "මාලු ඇඹුල්තියල් හෝ කරි", "ගෝවා තෙල්දාලා", "පර්‍රප්පු", "අඹ හෝ ඇඹරැල්ලා කරි", "පපඩ්ම්"],
  },
  {
    id: "5-A",
    items: [
      "සුදු බත්",
      "මාලු ඇඹුල්තියල් හෝ කරි",
      "ගෝවා තෙම්පරාදුව",
      "පර්‍රප්පු තෙම්පරාදුව",
      "පපඩ්ම්"
    ],
  },
  {
    id: "6-A",
    items: ["කහ බත්", "චිකන් කරි", "හෑප්පු නෙමිය්ාදු", "අල තෙල්දාලා", "පසඟ", "පරිප්පු තෙම්පරාදුව", "පපඩම්"],
  },
  {
    id: "7-A",
    items: [
      "සුදු බත්",
      "මාලු ඇඹුල්තියල් හෝ කරි",
      "බිට් කරි",
      "පර්‍රප්පු",
      "අල තෙල්දාලා",
      "මෑකරල් තෙල්දාලා",
      "පපඩම්",
      "ඇඹුල් කෙසෙල්"
    ],
  },
  {
    id: "8-A",
    items: [
      "සුදු බත්/කහ බත්",
      "මාලූ ඇඹුල්තියල් හෝ කරි",
      "බෝනිචී තෙල්දාලා",
      "මඤ්ඤොක්කා මැල්ලුම් හෝ කරි",
      "පරිප්පු කරි",
      "පපඩ්ම්",
      "ඇඹුල් කෙසෙල්"
    ],
  },
  {
    id: "9-A",
    items: [
      "සුදු බත්",
      "මාලූ ඇඹුල්තියල් හෝ කරි",
      "බෝනිචී කරි",
      "අල තෙල්දාලා",
      "පොලොස් කරි",
      "කඩල පරිප්පු",
      "පපඩ්ම්",
      "ඇඹුල් කෙසෙල්"
    ],
  },
  {
    id: "10-A",
    items: [
      "එළවලු බත්",
      "මිශ්‍ර සාලාදය",
      "චිකන් කරි හෝ මාලු කරි",
      "බටු මෝජූ",
      "අල තෙල්දාලා",
      "හතු බැදලා",
      "පරිප්පු",
      "පපඩම්",
      "ජෙලි සමග කස්ටඩ්"
    ],
  },
  {
    id: "11-C",
    items: [
      "කහ බත් සේර සමග",
      "එළවළු නූඩ්ල්ස්",
      "බිත්තර සාලාදය",
      "එළවලු චොප්සි",
      "බටු මෝජු",
      "උම්බලකඩ සම්බෝල",
      "මැලේ අච්චාරු",
      "චිකන් කරි හෝ මාළු කරි",
      "අල තෙල්දාල",
      "පපඩ්ම්",
      "ඇඹුල් කෙසෙල්"
    ],
  },
  {
    id: "12-A",
    items: ["සුදු බත්", "මාළු හෝ චිකන් කරි", "කොස් මැල්ලුම් හෝ පොලොස් කරි", "අල තෙල්දාල", "පරිප්පු කරි", "ගමේ අච්චාරු", "පපඩ්ම්"],
  },
];

export const hoppersMenuPackages: HoppersBBQPackage[] = [
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

export const bitesMenuItems: BiteItem[] = [
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

export const bbqMenuPackages: HoppersBBQPackage[] = [
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

export const menuCategories: MenuCategory[] = [
  {
    title: "Weddings & Parties",
    description: "Elegant courses designed for grand celebrations. Choose from our curated packages.",
    image: "/images/localized/wedding-party-category.jpg",
    items: []
  },
  {
    title: "Dana & Bana",
    description: "Traditional offerings prepared with reverence and authentic spices. Choose from our curated packages.",
    image: "/images/localized/dana-bana-category.jpg",
    items: []
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
