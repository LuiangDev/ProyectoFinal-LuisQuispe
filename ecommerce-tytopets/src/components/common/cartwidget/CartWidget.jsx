import { useContext } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { CartContext } from '../../../context/CartContext';

export const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();
  return (
    <div className="flex flex-row items-center justify-center gap-1 bg-cyan-700 text-white px-3 transition-transform hover:scale-96 py-1 rounded-full">
      <MdShoppingCart />
      <h3>{total}</h3>
    </div>
  );
};
