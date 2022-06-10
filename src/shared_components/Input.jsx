import React from "react";
import "../styles/SharedComponents.scss";

export const Input = ({ name, className, placeholder }) => {
  return (
    <input
      name={name}
      type="text"
      className={className}
      placeholder={placeholder}
    />
  );
};
