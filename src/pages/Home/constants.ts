import dark from "assets/icons/home/dark.jpg";
import light from "assets/icons/home/light.jpg";
import neitral from "assets/icons/home/neitral.jpg";

import { THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from "context/constants";

import { ISide } from "./components/interface";



export const SIDES:ISide[]= [
  {
    theme: THEME_LIGHT,
    text: "Light Side",
    img: light,
  },
  {
    theme: THEME_DARK,
    text: "Dark Side",
    img: dark,
  },
  {
    theme: THEME_NEITRAL,
    text: "I'm Han Solo",
    img: neitral,
  },
];
