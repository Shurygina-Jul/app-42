import { useState, useEffect } from "react";

import PeopleList from "assets/components/Peoples/PeopleList/PeopleList";

import { getPeopleId, getPeopleImage } from "assets/lib/getPeopleData";

import { withErrorApi } from "assets/hoc/withErrorApi";

import { getApiResource } from "../../lib/network";

import { IPeopleList, IProps } from "./interface";
import { IPeople } from "assets/components/Peoples/PeopleList/interface";

import { API_PEOPLE } from "assets/lib/constants";
import Spinner from "assets/components/Spinner/Spinner";

function Peoples({ setErrorApi }: IProps) {
  const [people, setPeople] = useState<IPeople[]>([]);

  const [isFetching, setIsFetching] = useState(true);

  const getResource = async (url: string) => {
    const res = await getApiResource(url);

    if (res) {
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
      setErrorApi(false);
      setIsFetching(false);
    } else {
      setErrorApi(true);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE);
    return () => setIsFetching(true);
  }, []);

  return <>{isFetching ? <Spinner /> : <>{people && <PeopleList people={people} />}</>}</>;
}

export default withErrorApi(Peoples);
