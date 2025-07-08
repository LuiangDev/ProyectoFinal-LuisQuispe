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
    <div className="flex flex-col items-center justify-center py-4">
    <h2 className="font-bold text-2xl text-cyan-700 my-4">Listado de productos</h2>
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-2">

      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
    </div>
  );
};
