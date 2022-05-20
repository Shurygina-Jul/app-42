import tw, { styled } from "twin.macro";

export const StyledHeader = styled.nav`
  & ul {
    ${tw`mb-12 mt-12  flex`};
  }
  & a {
    &:hover {
      ${tw`border-b border-solid border-b-yellow-300 text-yellow-300`};
    }
    &.active {
      ${tw`border-b border-solid border-b-yellow-300 text-yellow-300`};
    }
  }
`;
