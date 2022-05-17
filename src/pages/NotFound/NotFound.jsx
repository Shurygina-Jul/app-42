import { useLocation } from "react-router-dom";

function NotFound() {
  let location = useLocation();

  return (
    <div className=" m-auto flex flex-col justify-center">
      <img
        className="mt-0 mb-0 mr-auto ml-auto w-[300px]"
        src="error-404.png"
        alt="404"
      />
      <div className="pt-12 text-center text-4xl text-white">No match for {location.pathname}</div>
    </div>
  );
}

export default NotFound;
