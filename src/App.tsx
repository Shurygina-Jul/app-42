import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "assets/components/Header/Header";
import { routesConfig } from "assets/routes/routesConfig";

function getError(props: any): import("react").ReactNode {
  throw new Error("Function not implemented.");
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element(getError)} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
