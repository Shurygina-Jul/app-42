import starIcon from "assets/icons/star.svg";
import starFillIcon from "assets/icons/star-fill.svg";

import { update } from "store/store";

import { IPhoto } from "../interface";

function Photo(props: IPhoto) {
  const { img, name, id, favorite, setFavorite } = props;

  const currentUser = {
    img,
    id,
    name,
    favorite,
    setFavorite,
  };
  const handleFavorite = () => {
    update(currentUser);
    setFavorite(!favorite);
  };

  return (
    <div className="relative">
      <img src={img} alt={name} className=" ml-4 max-w-[260px] rounded-md" />
      <img
        src={favorite ? starFillIcon : starIcon}
        onClick={handleFavorite}
        className="w-[40px] h-[40px] absolute top-[-10px] right-[-20px] cursor-pointer"
        alt="favorite"
      />
    </div>
  );
}

export default Photo;
