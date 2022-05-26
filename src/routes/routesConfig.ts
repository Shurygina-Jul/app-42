import Home from "pages/Home";
import Peoples from "pages/Peoples";
import NotFound from "pages/NotFound";
import Character from "pages/Character";
import Favorite  from 'pages/Favorite';


export const routesConfig = [
  { path: "/", element: Home },
  { path: "/people", element: Peoples, exact: false },
  { path: "/people/:id", element: Character },
  { path: "/not-found", element: NotFound },
  { path: "/favorite", element:Favorite},
  { path: "*", element: NotFound },
];
