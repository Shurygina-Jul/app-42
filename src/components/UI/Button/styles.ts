import tw, { styled } from "twin.macro";

import { IStyled } from "./interface";

export const StyledButton = styled.button<IStyled>`
  ${tw`border-2 p-[12px] min-w-[100px]`};

  &:disabled,
  [disabled],
  :disabled:hover {
    ${tw`text-yellow-200 cursor-auto bg-transparent opacity-30`};
  }

  ${({ theme }) =>
    theme === "dark"
      ? tw`border-yellow-200 text-yellow-200 hover:bg-yellow-200 hover:text-black`
      : tw`border-black text-black hover:bg-black hover: text-yellow-200`};
`;
