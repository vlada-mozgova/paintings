import React from "react";
import checkmark from "../images/checkmark.png";
import loader from "../images/load.png";
import "../styles/SharedComponents.scss";

export const Button = ({
  className,
  type,
  text,
  onClick,
  disabled,
  mark,
  loading,
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {mark ? <img className="checkmark" src={checkmark} alt="" /> : null}{" "}
      {loading ? <img className="loader" src={loader} alt="" /> : null}
      {text}
    </button>
  );
};
