import { useContext, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc,doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";


const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

const {cart, getTotalAmount, resetCart} = useContext(CartContext);
const [orderId, setOrderId] = useState(null);

  const funcionFormulario = (evento) => {
    evento.preventDefault();
    let total = getTotalAmount();
    let ordersCollection = collection(db, "orders");
    let order = {
      buyer: userInfo,
      items: cart,
      total,
    };
    
    let promesaCompra=addDoc(ordersCollection, order);
    promesaCompra.then((res)=>{
      setOrderId(res.id);
      resetCart();
    });

    let productsCollection = collection(db, "products");

    order.items.forEach((elemento) => {
      let refDoc=doc(productsCollection, elemento.id);
      updateDoc(refDoc, {stock: elemento.stock - elemento.quantity});
    });
  };

  const funcionInputs = (evento) => {
    const { value, name } = evento.target; 
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h1 className="text-2xl font-bold">Finalizar Compra</h1>
      <h2 className="text-lg font-medium mb-6">Por favor, completa tus datos</h2>
      {orderId ? (
        <h2 className="text-xl font-medium">Tu numero de compra es: {orderId}</h2>
      ):(
      <form  className="flex flex-col gap-4" onSubmit={funcionFormulario}>
        <input
          type="text"
          placeholder="nombre"
          name="nombre"
          onChange={funcionInputs}
          className="border p-1 rounded"
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={funcionInputs}
          className="border p-1 rounded"
        />
        <input
          type="text"
          placeholder="telefono"
          name="telefono"
          onChange={funcionInputs}
          className="border p-1 rounded"
        />
        <div className="flex flex-row gap-4 mt-4">
        <button className="px-8 py-1 cursor-pointer text-white rounded-xl font-normal bg-sky-900" type="button" >Enviar</button>
        <button className="px-8 py-1 cursor-pointer text-white rounded-xl font-normal bg-sky-900" type="button">Cancelar</button>
        </div>
      </form>
      )}
    </div>
  );
};

export default Checkout;