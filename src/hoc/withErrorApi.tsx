import React, { useState } from "react";

import ErrorMessage from "components/ErrorMessage";
import { IErrorApi } from "types/types";
//import { ICharacter } from "types/types";

//console.log(123);

export const withErrorApi = (View: React.ComponentType<IErrorApi>) => {
  const test = "unusebale var";

  return (props: any) => {
    const [errorApi, setErrorApi] = useState(false);
    return <>{errorApi ? <ErrorMessage /> : <View setErrorApi={setErrorApi} {...props} />}</>;
  };
};
