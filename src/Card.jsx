import React from "react";
import { Link } from "react-router-dom";
import Info from "./Info";

export const Card = () => {
  return (
    <div>
      <h1>Book an appointment for an in-clinic consultation</h1>
      <p>Find experienced docotors across all specialties</p>
      <div>
        <Info />
      </div>
    </div>
  );
};
export default Card;
