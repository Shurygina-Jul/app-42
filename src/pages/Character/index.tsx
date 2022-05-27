import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router";
import { useStore } from "effector-react";

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

import { $users } from "store/store";

const Films = React.lazy(() => import("./components/Films"));

function Character({ setErrorApi }: IErrorApi) {
  const [characterId, setCharacterId] = useState<string | undefined>("");
  const [info, setInfo] = useState<IHero[]>([]);
  const [name, setName] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [films, setFilms] = useState<string>("");
  const [favorite, setFavorite] = useState<boolean>(false);

  //получаем id из url
  const { id } = useParams();

  const users = useStore($users);
  // // users.forEach((user)=>user.id===id? setFavorite(true):setFavorite(false))
  // users.forEach((user) => { user ? console.log(true) : console.log(false); });
  // console.log(users.findIndex((user) => user.id === id));

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

      users.forEach((user) => (user.id === id ? setFavorite(true) : setFavorite(false)));

      // const userIndex = users.findIndex((user) => user.id === id);
      // userIndex === -1 ? setFavorite(false) : setFavorite(true);
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
          <Photo
            img={img}
            name={name}
            id={characterId}
            favorite={favorite}
            setFavorite={setFavorite}
          />
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
