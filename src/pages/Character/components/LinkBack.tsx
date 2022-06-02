import React from "react";
import { useNavigate } from "react-router-dom";

import ArrowBack from "assets/icons/arrow_back.svg";

function LinkBack() {
  const navigate = useNavigate();

  const handleGoBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <a href="#" className="mt-4 inline-flex text-white" onClick={handleGoBack}>
      <img src={ArrowBack} className=" mr-4 h-[30px] w-[30px] " alt="Go back" />
      <span className=" inline-flex items-center font-bold text-yellow"> Go back</span>
    </a>
  );
}

export default LinkBack;
