import React, { useState } from "react";
import "./App.css";
import { COLUMNS_COUNT, MAX_NUMBER, SORT_INTERVAL_MS } from "./const";
import { isSorted } from "./utils/utils";
import {
  generateNumbers,
  getNumbersAfterSortIteration,
} from "./business-logic/business-logic";

import NumberColumn from "./components/number-сolumn/number-сolumn";

const App = () => {
  /**
   * State
   */
  const initialNumbers = generateNumbers(COLUMNS_COUNT, MAX_NUMBER);
  const [numbers, setNumbers] = useState(initialNumbers);
  const [sortInterval, setSortInterval] = useState(0);

  /**
   * Handlers
   */
  const onStartClick = (): void => {
    startSorting();
  };

  const onResetClick = (): void => {
    stopSorting();
  };

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
        }

        return numbersAfterSortIteration;
      });
    }, SORT_INTERVAL_MS);

    setSortInterval(intervalId);
  };

  return (
    <main role="application" className="bubble-sort">
      <h1 className="bubble-sort__title">Bubble sort</h1>
      <div className="bubble-sort__columns">
        {numbers.map((number, index) => (
          <NumberColumn key={index} number={number} />
        ))}
      </div>
      <button type="button" onClick={onResetClick}>
        new set
      </button>
      <button type="button" onClick={onStartClick}>
        start
      </button>
    </main>
  );
};

export default App;
