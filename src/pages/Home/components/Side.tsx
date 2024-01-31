import { useTheme } from "context/ThemeContext";

import { ISide } from "./interface";

const Side = (props: ISide) => {
  const { theme, text, img } = props;

  const { change } = useTheme();

  return (
    <figure onClick={() => change(theme)} className="cursor-pointer">
      <figcaption className="text-white text-center">{text}</figcaption>
      <img className="w-[200px] h-[400px]" src={img} alt={text} />
    </figure>
  );
};

export default Side;
