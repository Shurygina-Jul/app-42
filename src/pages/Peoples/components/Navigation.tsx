import { Link } from "react-router-dom";

import Button from "components/UI/Button/Button";

import { INavigate } from "./interface";

function Navigation(props: INavigate) {
  const { getResourse, prevPage, nextPage, currentPage } = props;
  const handleChangeNext = () => {
    getResourse(nextPage);
  };

  const handleChangePrev = () => {
    getResourse(prevPage);
  };

  return (
    <div className="flex justify-center pb-8">
      <Link to={`/people/?page=${currentPage - 1}`} className="mr-24">
        <Button text="Previous" onClick={handleChangePrev} disabled={!prevPage}  />
      </Link>
      <Link to={`/people/?page=${currentPage + 1}`} className="mr-24">
        <Button text="Next" onClick={handleChangeNext} disabled={!nextPage} />
      </Link>
    </div>
  );
}

export default Navigation;
