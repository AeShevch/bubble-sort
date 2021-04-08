import React from "react";
import { COLUMNS_COUNT } from "../../const";

type NumberColumnProps = {
  number: number;
};
const NumberColumn = ({ number }: NumberColumnProps) => {
  const columnHeight = (COLUMNS_COUNT / 100) * number;
  return (
    <div
      className="bubble-sort__column number-column"
      style={{ height: `${columnHeight}%` }}
    >
      {number}
    </div>
  );
};

export default NumberColumn;
