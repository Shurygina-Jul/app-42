import { IPhoto } from "./interface";

function Photo({photo,name}:IPhoto) {
    return <img src={photo} alt={name} className="mr-12 max-w-[300px] rounded-md" />;
}

export default Photo;