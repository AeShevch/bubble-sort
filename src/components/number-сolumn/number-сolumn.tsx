import React from "react";
import "./number-column.scss";
import { COLUMNS_COUNT } from "../../const";

type NumberColumnProps = {
  number: number;
};

const NumberColumn = ({ number }: NumberColumnProps) => {
  const columnHeight = number / COLUMNS_COUNT * 100;
  return (
    <div
      className="bubble-sort__column number-column"
      style={{ height: `${columnHeight}%` }}
    />
  );
};

export default NumberColumn;
