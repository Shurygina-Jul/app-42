import { Link } from "react-router-dom";

import { INavigate } from "./interface";

function Navigation({ getResourse, prevPage, nextPage, currentPage }:any){
//   const [getResourse, prevPage, nextPage, currentPage] = props;
    return (
      <div className="text-center">
        <Link to={`/people/?page=${currentPage - 1}`}>
          <button className="mr-24 bg-amber-100 p-[12px] text-slate-900 justify-center">Previous</button>
        </Link>
        <Link to={`/people/?page=${currentPage + 1}`}>
          <button className="p-[12px] bg-amber-100 text-slate-900 mr-24">Next</button>
        </Link>
      </div>
    );
}

export default Navigation;
