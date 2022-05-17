import Home from "pages/Home/Home";
import Peoples from "pages/Peoples/Peoples";
import NotFound from "pages/NotFound/NotFound";

export const routesConfig = [
  { path: "/", element: Home },
  { path: "/people", element: Peoples },
  { path: "/not-found", element: NotFound },
  { path: "*", element: NotFound },
];
