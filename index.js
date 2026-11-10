// Завдання 1.
// ----------------------------------------------------------------------------

// function calculateTotal(price, quantity) {
//   const total = price * quantity;
//   return total;
// }
// const first = calculateTotal(15, 5);
// const second = calculateTotal(20, 8);
// const third = calculateTotal(7, 15);
// console.log(firstOrder);
// console.log(secondOrder);
// console.log(thirdOrder);
// ----------------------------------------------------------------------------
// Завдання 2.
// ----------------------------------------------------------------------------
// function getGrade(score) {
//   if (score >= 90 && score <= 100) {
//     return 'A';
//   } else if (score >= 75 && score <= 89) {
//     return 'B';
//   } else if (score >= 60 && score <= 74) {
//     return 'C';
//   } else if (score >= 0 && score < 60) {
//     return 'F';
//   } else {
//     return 'Некоректний бал';
//   }
// }
// console.log(getGrade(80));
// console.log(getGrade(59));
// console.log(getGrade(106));
// ----------------------------------------------------------------------------
// Завдання 3.
// ----------------------------------------------------------------------------
// function checkPassword(password, correctPassword) {
//   if (password === correctPassword) {
//     return 'Access granted';
//   } else {
//     return 'Access denied';
//   }
// }
// const pass1 = checkPassword('password', 'password');
// console.log(pass1);

// const passDenied = checkPassword('password111', 'password555');
// console.log(passDenied);
// ----------------------------------------------------------------------------
// Завдання 4.
// ----------------------------------------------------------------------------

// let purchases = [100, 200, 300, 400, 500];
// console.log(purchases.length);
// let first = purchases[0];
// let last = purchases[purchases.length - 1];
// let sumFirstLast = first + last;
// console.log(`${first}+${last}=${sumFirstLast}`);
// purchases[2] = 800;
// for (let i = 0; i < purchases.length; i += 1) {
//   console.log(`${i + 1}: ${purchases[i]} `);
// }
// ----------------------------------------------------------------------------
// Завдання 5.
// ----------------------------------------------------------------------------
// const array = ['Macbook', 'Laptop', 'Keyboard', 'Monitor', 'Mouse'];
// let boole = false;
// for (const item of array) {
//   if (item === 'Laptop') {
//     boole = true;
//     break;
//   }
// }
// if (boole) {
//   console.log('Product found');
// } else {
//   console.log('Product not found');
// }
// ----------------------------------------------------------------------------
// Завдання 6.
// ----------------------------------------------------------------------------
// const results = [61, 70, 63, 64, 5];
// let allPassed = true;
// for (const result of results) {
//   console.log(result);
//   if (result < 60) {
//     console.log('Failed');
//     allPassed = false;
//     break;
//   }
// }
// if (allPassed) {
//   console.log('All tests passed');
// }
