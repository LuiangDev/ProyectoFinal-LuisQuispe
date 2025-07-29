import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const Counter = ({ item }) => {
  const [contador, setContador] = useState(1);
  const { addToCart } = useContext(CartContext);

  const sumar = () => {
    if (item.stock > contador) {
      setContador(contador + 1);
    } else {
      alert("stock maximo");
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    let obj = { ...item, quantity: contador };
    addToCart(obj);
  };

  return (
    <div className="flex items-center justify-center gap-4 m-4 text-sky-900">
      <button className=" text-2xl cursor-pointer font-semibold" onClick={restar}>-</button>
      <h2 className="font-semibold text-black">{contador}</h2>
      <button className=" text-2xl cursor-pointer font-semibold" onClick={sumar}>+</button>
      <button className="font-semibold cursor-pointer px-4 py-2 bg-amber-400 text-white rounded-xl"  onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
