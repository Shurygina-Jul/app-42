import { NavLink } from "react-router-dom";

import Favorite from "components/Favorite";
import droidIcon from "assets/icons/header/droid.svg";
import lightsaberIcon from "assets/icons/header/lightsaber.svg";
import stationIcon from "assets/icons/header/space-station.svg";

import { StyledHeader } from "./styles";

import { MENU } from "./constants";
import { useTheme } from "context/ThemeContext";
import { useEffect, useState } from "react";
import { THEME_DARK, THEME_LIGHT } from "context/constants";

function Header() {
  const [icon, setIcon] = useState<string>(stationIcon);

  const { theme } = useTheme();

  useEffect(() => {
    theme === THEME_LIGHT
      ? setIcon(lightsaberIcon)
      : theme === THEME_DARK
      ? setIcon(stationIcon)
      : setIcon(droidIcon);
  }, [theme]);
  return (
    <StyledHeader>
      <img src={icon} alt="star wars" className="w-[64px]"/>
      <ul>
        {MENU.map(({ to, name }) => (
          <li key={name}>
            <NavLink className="mr-32 text-white" to={to}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Favorite />
    </StyledHeader>
  );
}

export default Header;
