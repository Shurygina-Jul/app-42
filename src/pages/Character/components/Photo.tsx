import { update } from "store/store";

import { ICharacter } from "types/types";


function Photo(props: ICharacter) {
  const { img, name, id } = props;

  const currentUser = {
    img,
    id,
    name
  }
  
  return (
    <div>
      <img src={img} alt={name} className=" ml-4 max-w-[260px] rounded-md" />
      <button className="mr-12 bg-white p-3 text-slate-900" onClick={() => update(currentUser)}>
        Favorite
      </button>
    </div>
  );
}

export default Photo;
