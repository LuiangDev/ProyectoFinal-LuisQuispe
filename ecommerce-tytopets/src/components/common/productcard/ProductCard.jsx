import "./productcard.css";
import { Link } from "react-router";

export const ProductCard = ({ item }) => {
  return (
    <div className="container-card">
      <img style={{ width: "100px" }} src={item.imageUrl} alt={item.title} />
      <h3> {item.title} </h3>
      <h3> {item.price} </h3>
      <Link className="text-cyan-700" to={`/itemdetail/${item.id}`}>Ver detalle</Link>
    </div>
  );
};
