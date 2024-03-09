import React, { useState } from 'react'
import Label from './Label';
import Input from './Input';
import SearchResultsList from './SearchResultsList';

const AutoComplete = ({label,value,onChange,apidata,onClick}) => {


  return (
    <>
        <Label label={label} htmlFor={label} />
        <Input id={label} placeholder={label} type='text' value={value} onChange={onChange} />
        <SearchResultsList results={apidata} onClick={(e,result) => onClick(e,result)} />
    </>
  )
}

export default AutoComplete