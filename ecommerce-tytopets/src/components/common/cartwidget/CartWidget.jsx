import { useContext } from 'react'
import { MdShoppingCart } from "react-icons/md";
import "./cartWidget.css";
import { CartContext } from '../../../context/CartContext';

export const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext)
  let total = getTotalQuantity()
  return (
    <div className='formato'>
      <MdShoppingCart />
      <h3>{total}</h3>
    </div>
  )
}
