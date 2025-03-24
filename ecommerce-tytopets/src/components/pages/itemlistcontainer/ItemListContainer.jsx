import { useEffect, useState } from "react";
import { ProductCard } from "../../common/productcard/ProductCard";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";

import {collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();
  
  useEffect(() => {
let refCollection = collection(db, "products");
let consulta=refCollection;
if(name){
  consulta=query(refCollection, where("category", "==", name))
}
const getProducts = getDocs(consulta);

getProducts.then((res)=>{
  const nuevoArray = res.docs.map((elemento) => {
    return{id: elemento.id, ...elemento.data()};
});
setItems(nuevoArray);
})
.catch((error)=>console.log(error));
  }, [name]);

  return (
    <section>
      <h2>Listado de productos</h2>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};
