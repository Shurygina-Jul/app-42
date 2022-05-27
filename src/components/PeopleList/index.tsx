import Card from "components/Card";

import { IPeopleList } from "./interface";
import { ICharacter } from "types/types";


function PeopleList({ people }: IPeopleList) {
  return (
    <>
      <ul className="grid grid-cols-5 gap-4">
        {people.map(({ name, id, img }: ICharacter) => (
          <Card name={name} id={id} img={img} key={`${name}_${id}`} />
        ))}
      </ul>
    </>
  );
}

export default PeopleList;
