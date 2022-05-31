import { Route, Routes } from "react-router-dom";

import Header from "components/Header";

import { routesConfig } from "routes/routesConfig";
import { StyledApp } from "./styles";
import { useTheme } from "context/ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <StyledApp className="pl-32 pr-32 pt-8 pb-12" theme={theme}>
      <Header />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </StyledApp>
  );
}

export default App;
