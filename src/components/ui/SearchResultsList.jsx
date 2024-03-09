import React from "react";
import SearchResult from "./SearchResult";

const SearchResultsList = ({ results, onClick }) => {
  return (
    <div>
      {results.map((result) => (
        <SearchResult
          result={result.category}
          key={result.id}
          onClick={(e) => onClick(e,result)}
        />
      ))}
    </div>
  );
};

export default SearchResultsList;
