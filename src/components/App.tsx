import { Route, Routes } from "react-router-dom";

import Header from "components/Header";

import { routesConfig } from "routes/routesConfig";

function App() {
  return (
    <div className="pl-32 pr-32 pt-8 pb-12">
      <Header />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
