export interface INavigate {
  getResourse: (url: string) => Promise<void>;
  prevPage?: string;
  nextPage?: string;
  currentPage?: number;
}
