import { Link } from "react-router-dom";

import { ICharacter } from "types/types";

function Card({ id, img, name }: ICharacter) {
  return (
    <li className="rounded-lg  bg-white ">
      <Link to={`/people/${id}`}>
        <img className="rounded-t-lg object-cover object-center" src={img} alt={name} />
        <p className="text-center text-xl">{name}</p>
      </Link>
    </li>
  );
}

export default Card;
