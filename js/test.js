'usestrict';

const foo = (elem, ind, arr) => {
  console.log(elem ** 2);
  console.log(ind);
  console.log(arr);
};

const num = [3, 2, 5, 9, 1, 7, 4];

num.forEach(foo);

console.log(num);
