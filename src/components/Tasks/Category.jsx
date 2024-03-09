import React, { useState } from "react";
import FinalAutoComplete from "../ui/AutoComplete";

const Category = () => {
  const [categoryInput, setCategoryInput] = useState("");
  const [categoryApiResults, setCategoryApiResults] = useState([]);

  const changeHandler = (e) => {
    setCategoryInput(e.target.value);
  };

  const handleClick = (e, result) => {
    e.preventDefault();
    e.stopPropagation();
    setCategoryInput(result.category);
  };

  return (
    <>
      <AutoComplete
        label="Category"
        value={categoryInput}
        onChange={changeHandler}
        apidata={categoryApiResults}
        onClick={handleClick}
      />
    </>
  );
};

export default Category;
