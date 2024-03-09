import React, { useState } from "react";

const useUseState = (initialValue ) => {
  const [value, setValue] = useState(initialValue);
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return { value, changeHandler };
};

export default useUseState;