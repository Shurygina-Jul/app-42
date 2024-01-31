import tw, { styled } from "twin.macro";
import { IStyled } from "./inteface";

export const StyledApp = styled.div<IStyled>`
  ${tw`h-screen bg-cover`}

  ${({ theme }) =>
    theme === "light"
      ? tw`bg-light`
      : theme === "neitral"
        ? tw`bg-neitral`
        : theme === "dark"
          ? tw`bg-dark`
          : tw`bg-dark`};
`;
