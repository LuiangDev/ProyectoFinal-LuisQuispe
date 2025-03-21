import React from "react";
import "./productcard.css";

export const ProductCard = ({ title, price }) => {
  return (
    <div className="container-card">
      <h3> {title} </h3>
      <h3> {price} </h3>
    </div>
  );
};
