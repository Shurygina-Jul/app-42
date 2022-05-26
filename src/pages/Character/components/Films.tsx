import { useEffect, useState } from "react";

import { changeHTTP, makeConcurrentRequest } from "lib/utils/network";

function Films({ films }: any) {
  const [filmsName, setFilmsName] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const filmsHTTPS = films.map((url: any) => changeHTTP(url));
      const filmsData = await makeConcurrentRequest(filmsHTTPS);

      setFilmsName(filmsData);
    })();
  }, [films]);

  return (
    <>
      <ul>
        {filmsName.map(({ title, episode_id }: any, index: number) => (
          <li key={index} className="mb-4">
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
