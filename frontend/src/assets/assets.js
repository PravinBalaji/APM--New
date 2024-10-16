import food_1 from "./food_1.svg";
import food_2 from "./food_2.svg";
import food_3 from "./food_3.svg";
import food_4 from "./food_4.svg";
import Makhana from "./Makhana.jpg";
import CreamMakhana from "./Creammakhana.jpg";
const choco =
  "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/main/chocobounty.png";
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
const wheatpop =
  "https://raw.githubusercontent.com/Warlord09/annapoorna-images/main/wheat pop/5.png";
const pistacrunch =
  "https://raw.githubusercontent.com/Warlord09/annapoorna-images/main/pista crunch/3.png";
const kiwi =
  "https://raw.githubusercontent.com/Warlord09/annapoorna-images/main/kiwi delight/7.png";
const strawberry =
  "https://raw.githubusercontent.com/Warlord09/annapoorna-images/main/strawberry delight/4.png";
const fruitpack =
  "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/main/fruitpack.png";

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
    name: "Kaju katli",
    image: [kaju],
    weights: [
      { weight: "250G", price: 310, mrp: 326, gst: 15 },
      { weight: "500G", price: 620, mrp: 651, gst: 31 },
      { weight: "1 KG", price: 1240, mrp: 1302, gst: 62 },
    ],
    category: "Sweets",
    life: "5 Days",
  },
  {
    _id: "2",
    name: "Choco Bounty",
    image: [choco],
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
    name: "Crunchy Pack",
    image: [almond, pistacrunch, cashew],
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
    image: [food_2],
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
  {
    _id: "7",
    name: "Kambu Pori",
    image: [food_4],
    weights: [
      { weight: "100G", price: 53, mrp: 80, gst: 6.36 },
      { weight: "250G", price: 133, mrp: 200, gst: 15.96 },
    ],
    category: "Savouries",
    life: "1 Months",
    gst: 12,
  },
  {
    _id: "8",
    name: "Seemai Thinnai Mixture",
    image: [food_1],
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
    name: "Oma podi",
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
    image: [wheatpop],
    weights: [{ weight: "100G", price: 62, mrp: 95, gst: 7.44 }],
    category: "Savouries",
    life: "2 Months",
    gst: 12,
  },

  {
    _id: "11",
    name: "Dry Fruit Sweets",
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
    image: [Makhana],
    weights: [{ weight: "80G", price: 170, mrp: 240, gst: 20.4 }],
    category: "Savouries",
    life: "4 Months",
    gst: 12,
  },
  {
    _id: "13",
    name: "Cream Onion Makhana",
    image: [CreamMakhana],
    weights: [{ weight: "80G", price: 170, mrp: 240, gst: 20.4 }],
    category: "Savouries",
    life: "4 Months",
    gst: 12,
  },
  {
    _id: "14",
    name: "Choco Dip Badam",
    image: [almond],
    weights: [{ weight: "150G", price: 225, mrp: 300, gst: 11.25 }],
    category: "Sweets",
    life: "2 Months",
    gst: 5,
  },
];
