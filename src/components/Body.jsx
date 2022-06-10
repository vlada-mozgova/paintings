import React from "react";
import { useSelector } from "react-redux";
import { fixedPrice } from "../helpers/fixedPrice";
import { Painting } from "../shared_components/Painting";
import "../styles/Body.scss";

export const Body = () => {
  const paintings = useSelector((state) => state.data);
  return (
    <div className="body">
      <div className="title">Картины эпохи Возрождения</div>
      <div className="body-posts">
        {paintings.map((item) => (
          <Painting
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
            price={fixedPrice(item.price)}
            sale_price={fixedPrice(item.sale_price)}
            sold={item.sold}
            image={item.image}
            basket={item.basket}
            loading={item.loading}
          />
        ))}
      </div>
    </div>
  );
};
