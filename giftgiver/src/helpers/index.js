export const maxNumber = (numbers) => {
  if (numbers.length) {
    return Math.max(...numbers);
  }
  return 0;
};
