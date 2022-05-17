import Home from "assets/pages/Home/Home";
import Peoples from "assets/pages/Peoples/Peoples";
import NotFound from "assets/pages/NotFound/NotFound";

export const routesConfig = [
  { path: "/", element: Home },
  { path: "/people", element: Peoples },
  { path: "/not-found", element: NotFound },
  { path: "*", element: NotFound },
];
