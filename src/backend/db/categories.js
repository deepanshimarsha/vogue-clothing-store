import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "tops",
    description: "Shop Tshirts, Vests, Blouses, Sweatshirts and Hoodies ",
  },
  {
    _id: uuid(),
    categoryName: "dresses",
    description: "Shop A-Line, Bodycon and Party wear dresses",
  },
  {
    _id: uuid(),
    categoryName: "bottoms",
    description: "Shop Jeans, Pants, Leggings and Shorts",
  },
];
