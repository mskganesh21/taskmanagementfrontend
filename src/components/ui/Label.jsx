import React from 'react'

const Label = ({label,htmlFor,classes}) => {
  return (
    <label className={`block mb-2 ${classes}`} htmlFor={htmlFor}>{label}</label>
  )
}

export default Label