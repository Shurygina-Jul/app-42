import { IMenuItem } from "./interface";

export const MENU: Array<IMenuItem> = [
  { to: "/", name: "Home" },
  { to: "/people/?page=1", name: "People" },
  { to: "/not-found", name: "Not Found" },
];
