import { ICharacter } from 'types/types';
export interface INavigate {
  getResourse: (url: string) => Promise<void>;
  prevPage: string;
  nextPage: string;
  currentPage: number;
}

export interface IPeopleList {
  people: ICharacter[];
}

export interface IResult {
  name:string;
  url:string;
}