import { useState, useEffect } from "react";

import PeopleList from "assets/components/Peoples/PeopleList/PeopleList";

import { getPeopleId, getPeopleImage } from "assets/lib/getPeopleData";

import { getApiResource } from "../../lib/network";

import { IPeopleList } from "./interface";

import { API_PEOPLE } from "assets/lib/constants";

function Peoples() {
  const [people, setPeople] = useState<any[]>([]);

  const getResource = async (url: string) => {
    const res = await getApiResource(url);

    const peopleList = res.results.map(({ name, url }: IPeopleList) => {
      const id = getPeopleId(url);
      const img = getPeopleImage(id);
      return {
        id,
        name,
        img,
      };
    });
    setPeople(peopleList);
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return <>{people && <PeopleList people={people} />}</>;
}

export default Peoples;
