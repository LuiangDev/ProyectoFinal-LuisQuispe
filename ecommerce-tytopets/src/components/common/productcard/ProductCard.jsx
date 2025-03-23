import React from "react";
import "./productcard.css";

export const ProductCard = ({ item }) => {
  return (
    <div className="container-card">
      <img style={{width:"100px"}} src={item.imageUrl} alt={item.title} />
      <h3> {item.id} </h3>
      <h3> {item.title} </h3>
      <h3> {item.price} </h3>
    </div>
  );
};
