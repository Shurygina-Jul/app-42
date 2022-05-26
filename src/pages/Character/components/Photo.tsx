import { IPhoto } from "./interface";

function Photo({ photo, name }: IPhoto) {
  return <img src={photo} alt={name} className=" max-w-[260px] rounded-md ml-4" />;
}

export default Photo;
