import {
  SWAPI_PEOPLE,
  HTTP,
  HTTPS,
  SWAPI_ROOT,
  GUIDE_IMG_EXTENTION,
  URL_IMG_PERSON,
} from "./constants";

//  Функция,которая проверяет протокол и возвращает всегда HTTPS

const checkProtocol = (url: string) => {
  if (url.indexOf(HTTPS) !== -1) {
    return HTTPS;
  }

  return HTTP;
};

//Получение id страницы
const getId = (url: string, category: string) => {
  const protocol = checkProtocol(url);

  const id = url.replace(protocol + SWAPI_ROOT + category, "").replace(/\//g, "");

  return id;
};

export const getPeopleId = (url: string) => getId(url, SWAPI_PEOPLE);
export const getPeopleImage = (id: string | undefined) =>
  `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENTION}`;

export const getPeoplePageID = (url: string) => {
  const id = url.replace(/[^0-9,\s]/g, "");
  return Number(id);
};
