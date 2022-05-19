export interface INavigate {
  getResourse: (url: string) => Promise<void>;
  prevPage: string;
  nextPage: string;
  currentPage: number;
}

export interface IPeople {
  name?: string;
  id?: string;
  img?: string;
}
export interface IPeopleList {
  people: IPeople[];
}