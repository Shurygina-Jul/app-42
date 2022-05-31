import tw, { styled } from "twin.macro";

export const StyledHeader = styled.nav`
  ${tw`flex mb-12 mt-12`}
  & ul {
    ${tw` flex items-center`};
  }
  & a {
    &:hover {
      ${tw`border-b border-solid border-b-yellow text-yellow`};
    }
    &.active {
      ${tw`border-b border-solid border-b-yellow text-yellow`};
    }
  }
`;
