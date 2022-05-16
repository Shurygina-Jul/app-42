const SWAPI_ROOT = "https://swapi.dev/api/";

export function get(path: string) {
  return fetch(`${SWAPI_ROOT}/${path}`).then((res) => res.json());
}

