import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const Search = ({ disabled }) => {
  return (
    <div className="finder">
      <Input
        name="find"
        className="input"
        placeholder="Поиск по названию картины"
      />
      <Button
        className="button"
        type="button"
        text="Найти"
        disabled={disabled}
      />
    </div>
  );
};
