export const createNumbersArray = (from, to) => {
  // ф-ция должна генерировать массив чисел от from до to
  const res = [];
  for (let i = from; i <= to; i++) {
    res.push(i);
  }
  return res;
};
