import { Route, Routes } from "react-router-dom";

import Header from "components/Header/Header";
import { routesConfig } from "routes/routesConfig";

function getError(props: any): import("react").ReactNode {
  throw new Error("Function not implemented.");
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element(getError)} />
        ))}
      </Routes>
    </>
  );
}

export default App;
