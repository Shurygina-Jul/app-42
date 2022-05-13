import Header from "assets/components/Header/Header";

import { getApiResource } from "./assets/lib/network";

const SWAPI_ROOT = "https://swapi.dev/api/";
const SWAPI_PEOPLE = "people";

getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);

function App() {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline">Привет мир!</h1>
    </>
  );
}

export default App;
