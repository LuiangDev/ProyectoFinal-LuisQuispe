import { useEffect, useState } from "react";
import { ProductCard } from "../../common/productcard/ProductCard";
import { products } from "../../../products";
import { useParams } from "react-router";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();
  
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let isAdmin = true;
      if (isAdmin) {
        resolve(name ? products.filter((elemento) => elemento.category === name) : products);
      } else {
        reject({
          message: "No tienes permisos para ver los productos",
          status: 400,
        });
      }
    });

    getProducts
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <section>
      <h2>Mis productos</h2>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};
