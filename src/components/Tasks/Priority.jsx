import React, { useState } from "react";
import FinalAutoComplete from "../ui/AutoComplete";
import AutoComplete from "../ui/AutoComplete";

const Priority = () => {
  const [priorityInput, setPriorityInput] = useState("");
  const [priorityApiResults, setPriorityApiResults] = useState([]);

  const changeHandler = (e) => {
    setPriorityInput(e.target.value);
  };

  const handleClick = (e, result) => {
    e.preventDefault();
    e.stopPropagation();
    setPriorityInput(result.priority);
  };

  return (
    <>
      <AutoComplete
        label="Priority"
        value={priorityInput}
        onChange={changeHandler}
        apidata={priorityApiResults}
        onClick={handleClick}
      />
    </>
  );
};

export default Priority;
