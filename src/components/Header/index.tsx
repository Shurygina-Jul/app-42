import { NavLink } from "react-router-dom";
import { MENU } from "./constants";
import { StyledHeader } from "./styles";

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
    </StyledHeader>
  );
}

export default Header;
