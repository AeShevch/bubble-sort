import React, { PureComponent, ReactNode } from "react";
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

type IState = {
  numbers: number[];
  sortIntervalId: number;
  isSolved: boolean;
};

export default class App extends PureComponent<{}, IState> {
  constructor() {
    super({});

    this.state = {
      numbers: generateNumbers(COLUMNS_COUNT, MAX_NUMBER),
      sortIntervalId: 0,
      isSolved: false,
    };

    this.reset = this.reset.bind(this);
    this.startSorting = this.startSorting.bind(this);
  }

  /**
   * Methods
   */
  public readonly stopSorting = (): void =>
    window.clearInterval(this.state.sortIntervalId);

  public readonly startSorting = (): void => {
    const intervalId = window.setInterval(() => {
      this.setState(({ numbers }, {}) => {
        const numbersAfterSortIteration = getNumbersAfterSortIteration(numbers);

        if (isSorted(numbersAfterSortIteration)) {
          window.clearInterval(intervalId);
          this.setState({ isSolved: true });
        }

        return {
          numbers: numbersAfterSortIteration,
        };
      });
    }, SORT_INTERVAL_MS);

    this.setState({ sortIntervalId: intervalId });
  };

  public readonly reset = (): void => {
    this.stopSorting();

    const newNumbers = generateNumbers(COLUMNS_COUNT, MAX_NUMBER);
    this.setState({ numbers: newNumbers });
  };

  render(): ReactNode {
    const { numbers, isSolved } = this.state;

    return (
      <main role="application" className="bubble-sort">
        <h1 className="bubble-sort__title">Bubble sort</h1>
        <Columns numbers={numbers} />
        <Controls reset={this.reset} startSorting={this.startSorting} />
        <Status isSolved={isSolved} />
      </main>
    );
  }
}
