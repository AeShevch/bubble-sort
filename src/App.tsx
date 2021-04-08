import React, { useState } from "react";
import "./styles/app.scss";
import { COLUMNS_COUNT, MAX_NUMBER, SORT_INTERVAL_MS } from "./const";
import { isSorted } from "./utils/utils";
import {
  generateNumbers,
  getNumbersAfterSortIteration,
} from "./business-logic/business-logic";

import Columns from "./components/columns/columns";
import Status from "./components/status/status";
import Controls from "./components/controls/controls";

const App = () => {
  /**
   * State
   */
  const initialNumbers = generateNumbers(COLUMNS_COUNT, MAX_NUMBER);
  const [numbers, setNumbers] = useState(initialNumbers);
  const [sortInterval, setSortInterval] = useState(0);
  const [isSolved, setSolved] = useState(false);

  /**
   * Functions
   */
  const stopSorting = (): void => window.clearInterval(sortInterval);
  const startSorting = (): void => {
    const intervalId = window.setInterval(() => {
      setNumbers((numbers) => {
        const numbersAfterSortIteration = getNumbersAfterSortIteration(numbers);

        if (isSorted(numbersAfterSortIteration)) {
          window.clearInterval(intervalId);
          setSolved(true);
        }

        return numbersAfterSortIteration;
      });
    }, SORT_INTERVAL_MS);

    setSortInterval(intervalId);
  };
  const reset = ():void => {
    stopSorting();

    const newNumbers = generateNumbers(COLUMNS_COUNT, MAX_NUMBER);
    setNumbers(newNumbers);
  }

  return (
    <main role="application" className="bubble-sort">
      <h1 className="bubble-sort__title">Bubble sort</h1>
      <Columns numbers={numbers} />
      <Controls reset={reset} startSorting={startSorting} />
      <Status isSolved={isSolved} />
    </main>
  );
};

export default App;
