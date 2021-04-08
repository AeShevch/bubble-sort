import { generateRandomNumber } from "../utils/utils";

export const generateNumbers = (count: number, max: number): number[] =>
  new Array(count).fill(0).map(() => generateRandomNumber(max));

export const getNumbersAfterSortIteration = (array: number[]): number[] => {
  const sortedArray = array.slice();

  for (let i = 0; i <= sortedArray.length; i++) {
    const currentNumber = sortedArray[i];
    const nextNumber = sortedArray[i + 1];

    if (nextNumber || nextNumber === 0) {
      if (currentNumber > nextNumber) {
        sortedArray[i] = nextNumber;
        sortedArray[i + 1] = currentNumber;
      }
    }
  }

  return sortedArray;
};
