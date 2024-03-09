import React from 'react'

const SearchResult = ({result,onClick}) => {

  return (
    <div onClick={(e) => onClick(e)}>{result}</div>
  )
}

export default SearchResult