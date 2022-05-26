import { ICharacteristics, IHero } from "./interface";

function Characteristics({ info }: ICharacteristics) {
  return (
    <>
      <ul>
        {info.map(
          ({ title, data }: IHero) =>
            data && (
              <li key={title} className="mb-4">
                <span>
                  {title} : {data}
                </span>
              </li>
            ),
        )}
      </ul>
    </>
  );
}

export default Characteristics;
