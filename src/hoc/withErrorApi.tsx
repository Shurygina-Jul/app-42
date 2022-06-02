import React, { useState } from "react";

import ErrorMessage from "components/ErrorMessage";
import { IErrorApi } from "types/types";

export const withErrorApi = (View: React.ComponentType<IErrorApi>) => {
  return (props: unknown) => {
    const [errorApi, setErrorApi] = useState(false);

    return <>{errorApi ? <ErrorMessage /> : <View setErrorApi={setErrorApi} {...props} />}</>;
  };
};
