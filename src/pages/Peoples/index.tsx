import { useState, useEffect } from "react";

import Spinner from "components/UI/Spinner/Spinner";

import PeopleList from "components/PeopleList";
import Navigation from "./components/Navigation";


import { getPeopleId, getPeopleImage, getPeoplePageID } from "lib/utils/getPeopleData";
import { getApiResource, changeHTTP } from "lib/utils/network";

import { withErrorApi } from "hoc/withErrorApi";

import { useQueryParams } from "lib/hooks/useQueryParams";

import { API_PEOPLE } from "lib/utils/constants";


import { ICharacter, IErrorApi } from "types/types";
import { IResult } from "./components/interface";

function Peoples({ setErrorApi }: IErrorApi) {
  const [people, setPeople] = useState<ICharacter[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResource = async (url: string) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }: IResult) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCurrentPage(getPeoplePageID(url));
      setErrorApi(false);
      setIsFetching(false);
    } else {
      setErrorApi(true);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
    return () => setIsFetching(true);
  }, []);

  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          <Navigation
            getResourse={getResource}
            prevPage={prevPage}
            nextPage={nextPage}
            currentPage={currentPage}
          />
          {people && <PeopleList people={people} />}
        </>
      )}
    </>
  );
}

export default withErrorApi(Peoples);
