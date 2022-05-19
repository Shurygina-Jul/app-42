import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Characteristics from "./components/Characteristics";
import Photo from "./components/Photo";

import { withErrorApi } from "hoc/withErrorApi";

import { getApiResource } from "lib/utils/network";
import { getPeopleImage } from "lib/utils/getPeopleData";

import { API_PERSON } from "lib/utils/constants";

import { IHero } from "./interface";
import { IErrorApi } from "types/types";

function Character({ setErrorApi }: IErrorApi) {
  const [info, setInfo] = useState<IHero[]>([]);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  //получаем id из url
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      setErrorApi(!res);
      setInfo([
        { title: "birth year", data: res.birth_year },
        { title: "gender", data: res.gender },
        { title: "height", data: res.height },
        { title: "mass", data: res.mass },
        { title: "hair color", data: res.hair_color },
      ]);
      setName(res.name);
      setPhoto(getPeopleImage(id));

      //TODO:добавить фильмы res.films
    })();
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-4xl mb-6">{name}</h1>
      <div className="flex">
       
        <Photo photo={photo} name={name} />
        {info && <Characteristics info={info} />}
      </div>
    </div>
  );
}

export default withErrorApi(Character);
