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
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", padding: "20px" }}>
      <button style={{padding:"3px"}} onClick={restar}>-</button>
      <h2 className="font-semibold">{contador}</h2>
      <button style={{padding:"3px"}} onClick={sumar}>+</button>
      <button className="font-semibold" style={{padding:"3px"}} onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
