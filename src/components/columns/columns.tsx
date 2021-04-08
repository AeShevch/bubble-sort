import React from "react";
import "./columns.scss";
import NumberColumn from "../number-сolumn/number-сolumn";

type ColumnsProps = {
  numbers: number[];
};

const Columns = ({ numbers }: ColumnsProps) => (
  <div className="bubble-sort__columns columns">
    {numbers.map((number, index) => (
      <NumberColumn key={index} number={number} />
    ))}
  </div>
);

export default Columns;
