import React from "react";
import "../styles/Body.scss";
import { BuyPicture } from "./BuyPicture.jsx";

export const Painting = ({
  id,
  title,
  author,
  price,
  sale_price,
  sold,
  image,
  basket,
  loading,
}) => {
  return (
    <div className={`post ${sold ? "sold-border" : ""}`}>
      {sold ? <div className="sold"></div> : null}
      <img
        className="pictures"
        src={require(`../images/${image}`)}
        alt={title}
      />
      <div className="pictures-title">
        {title}
        <br />
        {author}
      </div>
      {sold ? (
        <p className="price-sold">Продана на аукционе</p>
      ) : (
        <BuyPicture
          id={id}
          price={price}
          sale_price={sale_price}
          loading={loading}
          basket={basket}
        />
      )}
    </div>
  );
};
