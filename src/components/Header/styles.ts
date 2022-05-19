import tw, { styled } from "twin.macro";

export const StyledHeader = styled.nav`
  & ul {
    ${tw`mb-12 mt-12  flex`};
  }
  & a {
    & :active,active,
    :hover {
      border-bottom: 1px solid yellow;
      color: yellow;
    }
  }
`;
