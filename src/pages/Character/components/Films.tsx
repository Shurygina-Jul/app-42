import { useEffect, useState } from "react";

import { changeHTTP, makeConcurrentRequest } from "lib/utils/network";

import { IFilmsName } from "./interface";

function Films({ films }:any) {
  const [filmsName, setFilmsName] = useState<IFilmsName[]>([]);

  useEffect(() => {
    (async () => {
      const filmsHTTPS:string[] = films.map((url: string) => changeHTTP(url));
      const filmsData:IFilmsName[] = await makeConcurrentRequest(filmsHTTPS);

      setFilmsName(filmsData);
    })();
  }, [films]);

  return (
    <>
      <ul>
        {filmsName.map(({ title, episode_id }: IFilmsName) => (
          <li key={`${title}_${episode_id}`} className="mb-4">
            <span className="bg-pink-400 p-1 rounded-sm">Episode {episode_id}</span>
            <span> : </span>
            <span>{title}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Films;
<></>;
