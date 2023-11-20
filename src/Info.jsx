import React from "react";
import { data } from "./details";
import { Link } from "react-router-dom";
const Info = () => {
  return (
    <div className="section">
      {data &&
        data.map((item) => {
          return (
            <div>
              <div className="imgbox">
                <img src={item.img} />
              </div>
              <Link to={"/name/${item.id}"}>
                <div>
                  <h1>{item.name}</h1>
                </div>
              </Link>
              <p>{item.des}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Info;
