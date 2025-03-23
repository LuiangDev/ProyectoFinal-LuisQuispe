import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <div className='formato'>
      <MdShoppingCart />
      <p className='formato'>Cantidad 1</p>
    </div>
  )
}
