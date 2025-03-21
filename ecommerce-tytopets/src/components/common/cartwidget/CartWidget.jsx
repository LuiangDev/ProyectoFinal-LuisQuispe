import React from 'react'
import { MdShoppingCart } from "react-icons/md";

export const CartWidget = () => {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      <MdShoppingCart />
      <p>Cantidad 1</p>
    </div>
  )
}
