import { useStore } from "effector-react";

import Card from "components/Card";

import { $users } from "store/store";

import { ICharacter } from "types/types";

function Favorite() {
  const users = useStore($users);

  return (
    <>
      <h1 className="text-white">
        {users.length ? "Favorite characters" : "Oops...you haven't picked your favorite characters"}
      </h1>
      <ul className="grid grid-cols-4 gap-4">
        {users.map(({ name, id, img }: ICharacter) => (
          <Card name={name} id={id} img={img} key={`${name}_${id}`} />
        ))}
      </ul>
    </>
  );
}

export default Favorite;
