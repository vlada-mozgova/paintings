import React from "react";
import { useDispatch } from "react-redux";
import { basketInOut } from "../redux/actions";
import { GETaxios } from "../requests/GETaxios";
import "../styles/SharedComponents.scss";
import { Button } from "./Button";

export const BuyButton = ({ id, loading, basket }) => {
  const dispatch = useDispatch();

  const ChooseButtonClass = () =>
    loading ? "progress" : basket ? "basket" : "buy";

  const buttonText = () =>
    loading ? "Загрузка" : basket ? "В корзине" : "Купить";

  const onClick = () => {
    GETaxios({ id, dispatch });
    dispatch(basketInOut({ id, basket }));
  };
  return (
    <Button
      className={`button ${ChooseButtonClass()}`}
      type="button"
      text={buttonText()}
      onClick={onClick}
      mark={basket && !loading}
      loading={loading}
    />
  );
};
