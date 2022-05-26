import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router";

import LinkBack from "./components/LinkBack";
import Photo from "./components/Photo";
import Characteristics from "./components/Characteristics";

import Spinner from "components/UI/Spinner/Spinner";

import { withErrorApi } from "hoc/withErrorApi";

import { getApiResource } from "lib/utils/network";
import { getPeopleImage } from "lib/utils/getPeopleData";

import { API_PERSON } from "lib/utils/constants";

import { IHero } from "./interface";
import { IErrorApi } from "types/types";

const Films = React.lazy(() => import("./components/Films"));

function Character({ setErrorApi }: IErrorApi) {
  const [characterId, setCharacterId] = useState<string | undefined>("");
  const [info, setInfo] = useState<IHero[]>([]);
  const [name, setName] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [films, setFilms] = useState<string>("");

  //получаем id из url
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      setCharacterId(id);

      setErrorApi(!res);
      setInfo([
        { title: "birth year", data: res.birth_year },
        { title: "gender", data: res.gender },
        { title: "height", data: res.height },
        { title: "mass", data: res.mass },
        { title: "hair color", data: res.hair_color },
      ]);
      setName(res.name);
      setImg(getPeopleImage(id));

      res.films.length && setFilms(res.films);
    })();
  }, []);

  return (
    <div className="text-white ">
      <LinkBack />
      <div className="border-l-4 border-purple-900">
        <h1 className="mb-6 w-[200px] rounded-r-sm border-2 border-purple-900 bg-purple-900 text-2xl">
          {name}
        </h1>
        <div className="grid grid-cols-3 gap-4  ">
          <Photo img={img} name={name} id={characterId} />
          {info && <Characteristics info={info} />}
          {films && (
            <Suspense fallback={<Spinner theme="dark" />}>
              <Films films={films} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}

export default withErrorApi(Character);
