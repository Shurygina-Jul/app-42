import { useState } from "react";

import ErrorMessage from "assets/components/ErrorMessage/ErrorMessage";

export const withErrorApi = (View: any) => {
  return (props: any) => {
    const [errorApi, setErrorApi] = useState(false);
    
    return <>{errorApi ? <ErrorMessage/> : <View setErrorApi={setErrorApi} {...props} />}</>;
  };
};
