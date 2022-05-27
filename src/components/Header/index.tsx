import { NavLink } from "react-router-dom";

import Favorite from "components/Favorite";

import { StyledHeader } from "./styles";

import { MENU } from "./constants";

function Header() {
  return (
    <StyledHeader>
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
