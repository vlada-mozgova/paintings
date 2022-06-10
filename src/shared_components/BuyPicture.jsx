import React from "react";
import "../styles/Body.scss";
import { BuyButton } from "./BuyButton";

export const BuyPicture = ({ id, price, sale_price, loading, basket }) => {
  return (
    <div className="buy-box">
      <div className="price-box">
        {sale_price === null ? (
          <p className="price-noSale">{price}</p>
        ) : (
          <div>
            <p className="price">{price} </p>
            <p className="salePrice">{sale_price}</p>
          </div>
        )}
      </div>
      <div className="button-box">
        <BuyButton id={id} loading={loading} basket={basket} />
      </div>
    </div>
  );
};
