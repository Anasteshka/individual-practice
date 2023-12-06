'usestrict';

// const numbers = [5, 10, 15, 20, 25];

// // Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Inex ${index}, value ${number}`);
};

numbers.forEach(logMessage);
