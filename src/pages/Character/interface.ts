import { ICharacter } from "types/types";
export interface IHero {
  title: string;
  data?: string;
}

export interface IPhoto extends ICharacter {
  favorite: boolean;
  setFavorite: (favorite: boolean) => void;
}
