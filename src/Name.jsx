import React from "react";
import { data } from "./details";
import { useParams } from "react-router-dom";
function Name() {
  const { id } = useParams();
  const product = data.find((item) => item.id === id);

  return (
    <div className="ind-page">
      <div className="ind-img">
        <img src={product.img} />
      </div>
      <div className="ind-details">
        <div className="h3">
          <h3>{product.doctor}</h3>
        </div>
        <p>{product.name}</p>
        <p>{product.experience}</p>
        <p>{product.price}</p>
      </div>
      <button>Book Appointment</button>
    </div>
  );
}
export default Name;
