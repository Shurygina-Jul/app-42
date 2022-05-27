
import { useStore } from "effector-react";

import PeopleList from "components/PeopleList";

import { $users } from "store/store";



function FavoriteCharacters() {
  const users = useStore($users);

  return (
    <>
      <h1 className="text-white">
        {users.length
          ? "Favorite characters"
          : "Oops...you haven't picked your favorite characters"}
      </h1>
      <PeopleList people={users} />
    </>
  );
}

export default FavoriteCharacters;
