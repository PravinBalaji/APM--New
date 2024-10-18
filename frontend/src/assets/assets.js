import food_1 from "./food_1.svg";
import food_2 from "./food_2.svg";
import food_3 from "./food_3.svg";
import food_4 from "./food_4.svg";
import Makhana from "./Makhana.jpg";
import CreamMakhana from "./Creammakhana.jpg";
const choco =
  "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/refs/heads/main/bounty1.png";
const kaju =
  "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/main/kajukatli.png";
const almond =
  "https://raw.githubusercontent.com/Warlord09/annapoorna-images/main/Almond crunch/1.png";
const blueberry =
  "https://raw.githubusercontent.com/Warlord09/annapoorna-images/main/blueberry/9.png";
const cashew =
  "https://raw.githubusercontent.com/Warlord09/annapoorna-images/main/cashew crunch/2.png";
const omapodi =
  "https://raw.githubusercontent.com/Warlord09/annapoorna-images/main/omapodi mixture/6.png";
const navaratna =
  "https://raw.githubusercontent.com/Warlord09/annapoorna-images/main/navaratna/10.png";
const kajupineapple =
  "https://raw.githubusercontent.com/Warlord09/annapoorna-images/main/kaju pineapple/12.png";
const kajumango =
  "https://raw.githubusercontent.com/Warlord09/annapoorna-images/main/kaju mango roll/11.png";
const datesroll =
  "https://raw.githubusercontent.com/Warlord09/annapoorna-images/main/dates roll/8.png";
const wheatpop1 =
  "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/refs/heads/main/wheatpop1.png";
const wheatpop2 =
  "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/refs/heads/main/wheatpop2.png";
const pistacrunch =
  "https://raw.githubusercontent.com/Warlord09/annapoorna-images/main/pista crunch/3.png";
const kiwi =
  "https://raw.githubusercontent.com/Warlord09/annapoorna-images/main/kiwi delight/7.png";
const strawberry =
  "https://raw.githubusercontent.com/Warlord09/annapoorna-images/main/strawberry delight/4.png";
const fruitpack =
  "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/main/fruitpack.png";
const seemai1 =
  "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/refs/heads/main/seemai1.png";
const seemai2 =
  "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/refs/heads/main/seemai2.png";
const crunchy =
  "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/refs/heads/main/crunchy.png";
const choco2 =
  "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/refs/heads/main/bounty2.png";
const assortedkaju1 =
  "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/refs/heads/main/secondary%20image.png";
const assortedkaju2 =
  "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/refs/heads/main/assortedkaju2.png";

import star from "./star 3.svg";

export const assets = {};

export const slides = [
  {
    url: "",
  },
  {
    url: "",
  },
  {
    url: "",
  },
  {
    url: "",
  },
];

export const review = [
  {
    _id: "1",
    content:
      "I recently visited Annapoorna Mithai and was very impressed with the variety of sweets and snacks they had to offer. The staff was also very friendly and helpful. I would definitely recommend this shop to anyone looking for a sweet treat.",
    name: "Abhi Jani",
    stars: star,
  },
  {
    _id: "2",
    content:
      "I bought a few sweets from here and let me tell you all were amazing and the quality was awesome too I will definitely recommend this place to you guys Food: 5/5  |  Service: 5/5  |  Atmosphere: 5/5",
    name: "Amanda Wilson",
    stars: star,
  },
  {
    _id: "3",
    content: "Wow... What a place..for sweets.. must visit in Madurai",
    name: "Meena Anilkumar",
    stars: star,
  },
  {
    _id: "4",
    content:
      "This is a very good mithai shop or sweet stall and also a restaurant which sells different fast food. Among the sweets I like the typical south Indian ladu, jelebi and mysure pak.",
    name: "Lajo",
    stars: star,
  },
  {
    _id: "5",
    content:
      "Very fast processing and friendly staff. Very much satisfied by the process which is on the spot payment.",
    name: "Bhavya Sri",
    stars: star,
  },
];

export const food_list = [
  {
    _id: "1",
    name: "Kaju Katli | Kaju Barfi | Diamond Sweet",
    description:
      "Crispy Cashew nuts soaked then grinded into fine dough and elegantly served with Pure silver leaf",
    image: [kaju],
    weights: [
      { weight: "250G", price: 310, mrp: 326, gst: 15.5 },
      { weight: "500G", price: 620, mrp: 651, gst: 31 },
      { weight: "1 KG", price: 1240, mrp: 1302, gst: 62 },
    ],
    category: "Sweets",
    life: "5 Days",
    gst:5
  },
  {
    _id: "2",
    name: "Choco Bounty | Coconut sweet | Bounty Chocolate",
    description:
      "Fresh gratted coconut with the condensed milk wrapped with Fresh Chocolate.",
    image: [choco2, choco],
    weights: [
      { weight: "500G", price: 348, mrp: 365, gst: 17.4 },
      { weight: "1 KG", price: 695, mrp: 730, gst: 34.75 },
    ],
    category: "Sweets",
    life: "7 Days",
    gst: 5,
  },
  {
    _id: "3",
    name: "Royal Fruits and Nuts",
    description: "",
    image: [
      fruitpack,
      kajupineapple,
      kajumango,
      strawberry,
      blueberry,
      datesroll,
    ],
    weights: [
      { weight: "500G", price: 715, mrp: 750, gst: 35.75 },
      { weight: "1 KG", price: 1429, mrp: 1500, gst: 71.45 },
    ],
    category: "Sweets",
    life: "5 Days",
    gst: 5,
  },
  {
    _id: "4",
    name: "Nuts Cruncher |  Layered Nuts Sweet ",
    description: "Almond Crunch, Pista Crunch and Cashew Crunch",
    image: [crunchy, almond, pistacrunch, cashew],
    weights: [
      { weight: "500G", price: 715, mrp: 750, gst: 35.75 },
      { weight: "1 KG", price: 1429, mrp: 1500, gst: 71.45 },
    ],
    category: "Sweets",
    life: "5 Days",
    gst: 5,
  },
  {
    _id: "5",
    name: "Assorted Kaju Sweets",
    description:
      "Mixed & Ghee sweets such as Ghee mysore pak, kesar peda, white peda, motichoor laddu, doda burfee, gujiya, milk cake, soan papdi and milk burfee will be packed as per the availability of the items at the store currently. Note: the mentioned items are not guranteed. ",
    image: [assortedkaju1, assortedkaju2],
    weights: [
      { weight: "500G", price: 430, mrp: 1240, gst: 21.5 },
      { weight: "1 KG", price: 810, mrp: 1240, gst: 40.5 },
    ],
    category: "Sweets",
    life: "5 Days",
    gst: 5,
  },
  {
    _id: "6",
    name: "Assorted Ghee sweets",
    description:
      "Fresh Sabudhana comes Roasted peanuts, Sev, and Mixture. Made with Air Fryer Technology.",
    image: [food_3],
    weights: [
      { weight: "250G", price: 357, mrp: 375, gst: 42.84 },
      { weight: "500G", price: 715, mrp: 750, gst: 85.8 },
      { weight: "1 KG", price: 1429, mrp: 1500, gst: 171.48 },
    ],
    category: "Sweets",
    life: "5 Days",
    gst: 12,
  },
  // {
  //   _id: "7",
  //   name: "Kambu Pori | Pearl Millet Puff |  Bajra Mix",
  //   description:"Quinoa is a great source of fiber. Fiber can prevent or treat constipation and may lower your risk of intestinal cancers. It also helps you feel full longer, so it may help with weight loss. The fiber in quinoa can also help with cholesterol and blood sugar levels, lowering your risk of diabetes and heart disease. Quinoa is rich in antioxidants, which can prevent damage to your heart and other organs.",
  //   image: [food_4],
  //   weights: [
  //     { weight: "100G", price: 53, mrp: 80, gst: 6.36 },
  //     { weight: "250G", price: 133, mrp: 200, gst: 15.96 },
  //   ],
  //   category: "Savouries",
  //   life: "1 Months",
  //   gst: 12,
  // },
  {
    _id: "8",
    name: "Foxtail Mixture | Seemai Thinai Mixture | Millet Mixture",
    description: "",
    image: [seemai1, seemai2],
    weights: [
      { weight: "100G", price: 53, mrp: 80, gst: 6.36 },
      { weight: "250G", price: 133, mrp: 200, gst: 15.96 },
    ],
    category: "Savouries",
    life: "1 Months",
    gst: 12,
  },

  {
    _id: "9",
    name: "Oma Podi | South Indian Bhujiya | Nylon Sev",
    description:
      " Omapodi is a delicious and crispy South Indian snack of sev laced with the aroma and flavor of ajwain or carom seeds.",
    image: [omapodi],
    weights: [
      { weight: "100G", price: 53, mrp: 80, gst: 6.36 },
      { weight: "250G", price: 133, mrp: 200, gst: 15.96 },
    ],
    category: "Savouries",
    life: "2 Months",
    gst: 12,
  },
  {
    _id: "10",
    name: "Wheat pop",
    description:
      "Fresh Whole Wheat made into puff with Air Fryer Cooking Technology - One of the Best low calorie Snack. ",
    image: [wheatpop1, wheatpop2],
    weights: [{ weight: "100G", price: 62, mrp: 95, gst: 7.44 }],
    category: "Savouries",
    life: "2 Months",
    gst: 12,
  },

  {
    _id: "11",
    name: "Dry Fruit Sweets",
    description: "Dry Fruits such like Kiwi, Strawberry",
    image: [kiwi, strawberry],
    weights: [
      { weight: "250G", price: 357, mrp: 375, gst: 17.85 },
      { weight: "500G", price: 715, mrp: 750, gst: 35.75 },
      { weight: "1 KG", price: 1429, mrp: 1500, gst: 71.45 },
    ],
    category: "Sweets",
    life: "2 Months",
    gst: 5,
  },
  {
    _id: "12",
    name: "Cheese Makhanas",
    description:
      " Popped water lily (Lotus) seeds roasted with whole whear flour, Citric Acid, Cheddar cheese & S",
    image: [Makhana],
    weights: [{ weight: "80G", price: 170, mrp: 240, gst: 20.4 }],
    category: "Savouries",
    life: "4 Months",
    gst: 12,
  },
  {
    _id: "13",
    name: "Cream Onion Makhana",
    description:
      "Popped water lily (Lotus) seeds roasted with Dried White Onion, Parshlay, Chilli, Butter & slat",
    image: [CreamMakhana],
    weights: [{ weight: "80G", price: 170, mrp: 240, gst: 20.4 }],
    category: "Savouries",
    life: "4 Months",
    gst: 12,
  },
  {
    _id: "14",
    name: "Choco Dip Badam | Chocolate Badam",
    description: " Roasted Amond Coated with Chocolate.",
    image: [almond],
    weights: [{ weight: "150G", price: 225, mrp: 300, gst: 11.25 }],
    category: "Sweets",
    life: "2 Months",
    gst: 5,
  },
  {
    _id: "15",
    name: "Pista Roll |  Kaju Pista Roll",
    description:
      "A divine fusion of cashew and pistachio, ground into a velvety paste and crafted into a single, exquisite roll, delicately sweetened, creates a heavenly delight for dessert lovers. With no artificial colors, only the essence of nature's finest ingredients graces this enchanting treat.",
    image: [almond],
    weights: [
      { weight: "500G", price: 715, mrp: 750, gst: 11.25 },
      { weight: "1KG", price: 1429, mrp: 1500, gst: 5 },
    ],
    category: "Sweets",
    life: "15 Days",
    gst: 5,
  },
];
