import { useState, useEffect } from "react";

import Spinner from "components/UI/Spinner/Spinner";

import Navigation from "./components/Navigation";
import PeopleList from "./components/PeopleList";

import { getPeopleId, getPeopleImage, getPeoplePageID } from "lib/utils/getPeopleData";
import { getApiResource, changeHTTP } from "lib/utils/network";

import { withErrorApi } from "hoc/withErrorApi";

import { useQueryParams } from "lib/hooks/useQueryParams";

import { API_PEOPLE } from "lib/utils/constants";

import { IPeopleList, IPeople } from "./interface";

import { IErrorApi } from "types/types";

function Peoples({ setErrorApi }: IErrorApi) {
  const [people, setPeople] = useState<IPeople[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get("page");

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