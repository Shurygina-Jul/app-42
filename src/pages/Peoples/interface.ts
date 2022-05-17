export interface IProps{
  setErrorApi:(errorApi:boolean)=>void
}
export interface IPeopleList {
  name: string;
  url: string;
}

export interface IPeople {
  name?: string;
  id?: string;
  img?: string;
}
