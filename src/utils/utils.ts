export const generateRandomNumber = (maxNumber: number): number =>
  Math.floor(Math.random() * maxNumber);

export const isSorted = (array: number[]): boolean =>
  array.every((v, i, a) => !i || a[i - 1] <= v);
