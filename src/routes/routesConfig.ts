import Home from "pages/Home";
import Peoples from "pages/Peoples";
import NotFound from "pages/NotFound";
import Character from "pages/Character";

export const routesConfig = [
  { path: "/", element: Home },
  { path: "/people", element: Peoples },
  { path: "/people/:id", element: Character },
  { path: "/not-found", element: NotFound },
  { path: "*", element: NotFound },
];
