import { Link } from "react-router-dom";
import { IPeople } from "./interface";

function PeopleList({ people }: any) {
  return (
    <>
      <ul className="grid grid-cols-5 gap-4">
        {people.map(({ name, id, img }: IPeople) => (
          <li className="rounded-lg  bg-white" key={`${name}_${id}`}>
            <Link to={`/people/${id}`}>
              <img className="rounded-t-lg object-cover object-center" src={img} alt={name} />
              <p className="text-center text-xl">{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PeopleList;
