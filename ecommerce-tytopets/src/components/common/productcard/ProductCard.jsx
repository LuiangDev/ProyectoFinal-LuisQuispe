import { Link } from "react-router";

export const ProductCard = ({ item }) => {
  return (
    <div className="container-card max-w-2/2 flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg  duration-300 bg-white overflow-hidden transform transition-transform hover:scale-105">
      <img className="w-30" src={item.imageUrl} alt={item.title} />
      <h3> {item.title} </h3>
      <h3> {item.price} </h3>
      <Link className="text-white px-4 py-1 bg-cyan-700 rounded-xl" to={`/itemdetail/${item.id}`}>Ver detalle</Link>
    </div>
  );
};
