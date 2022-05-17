import { NavLink } from "react-router-dom";
import { StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <ul>
        <li>
          <NavLink className="mr-32 text-white" to="/">
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink className="mr-32 text-white" to="/people">
            People
          </NavLink>
        </li>
      </ul>
    </StyledHeader>
  );
}

export default Header;
