import { CategoryCard } from "~/types/types";
import {
  cross,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  hoodieImage,
  jacketImage,
  sneakersP,
  t_short,
} from "../utils";

export const navLists = ["Для нього", "Для неї", "Бренди", "Про нас"];
export const categoriesData: CategoryCard[] = [
  {
    name: "Верхній одяг",
    image: [jacketImage, cross],
    gridColumnPosition: "col-start-1 row-start-2 col-span-6   h-[500px]",
    gridRowPosition: "row-span-1",
    delay: 2800,
  },
  {
    name: "Взуття",
    image: [sneakersP, sneakersP],
    gridColumnPosition: "col-span-8 row-start-2  col-start-7  h-[300px]",
    gridRowPosition: "row-span-1",
    delay: 3100,
  },
  {
    name: "Футболки",
    image: [t_short],
    gridColumnPosition:
      "col-start-6  row-start-1  row-end-2  col-span-9 h-[600px]",
    gridRowPosition: "row-span-1",
  },
  {
    name: "Худі",
    image: [hoodieImage],
    gridColumnPosition:
      "col-start-1 col-end-6 row-start-1 row-end-3 col-span-4 h-[600px]",
    gridRowPosition: "row-span-2 ",
  },
];
export const highlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
