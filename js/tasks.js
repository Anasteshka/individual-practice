const mergeArrays = (arr1, arr2) => {
  return arr1
    .concat(arr2)
    .sort((a, b) => a - b)
    .filter((elem, i, arr) => {
      return arr[i] !== arr[i + 1];
    });
};

console.log(mergeArrays([1, 3, 3, 5, 7, 9, 10], [10, 8, 6, 4, 2]));
