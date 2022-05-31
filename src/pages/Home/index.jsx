import Side from "./components/Side";
import { SIDES } from "./constants";

function Home() {
  return (
    <>
      <p className="p1 text-white">Choose you side</p>
      <div className="flex justify-around">
        {SIDES.map(({ theme, text, img }, index) => (
          <Side key={index} theme={theme} text={text} img={img} />
        ))}
      </div>
    </>
  );
}

export default Home;
