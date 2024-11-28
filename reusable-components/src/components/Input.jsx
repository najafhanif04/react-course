import React from 'react'

const Input = ({children, type, placeholder}) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} value={children}></input>
    </div>
  )
}

export default Input
