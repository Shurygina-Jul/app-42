import { HTTP, HTTPS } from "./constants";
/**
 * Изменяет  url c HTTP на HTTPS
 * @param {string} url-url для изменения
 * @returns {string} url c HTTPS
 */

export const changeHTTP = (url: string) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;

  return result;
};

/**
 * Отправляет запрос Fetch
 * @param {String} url - url для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url: string) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      //eslint-disable-next-line no-console
      console.error("Could not fetch.", res.status);
      return false;
    }

    return await res.json();
  } catch (error: any) {
    //eslint-disable-next-line no-console
    console.error("Could not fetch.", error.message);
    return false;
  }
};

export const makeConcurrentRequest = async (url: string[]): Promise<any[]> => {
  const res: string[] = await Promise.all(
    url.map((res: string) => {
      return fetch(res).then((res) => res.json());
    }),
  );

  return res;
};
