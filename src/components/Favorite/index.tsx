import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "effector-react";

import icon from "assets/icons/bookmark.svg";

import { $users } from "store/store";

function Favorite() {
  const [count, setCount] = useState<number>();

  const users = useStore($users);

  useEffect(() => {
    const length = users.length;
    setCount(length);
  });
  return (
    <div className="relative ml-auto h-9 w-9">
      <Link to="/favorite">
        <img src={icon} className="" alt="bookmark" />
        <span className="absolute top-[-10px] right-0 flex  h-[20px] w-[20px] items-center justify-center rounded-full bg-white text-sm font-bold text-black">
          {count}
        </span>
      </Link>
    </div>
  );
}

export default Favorite;
