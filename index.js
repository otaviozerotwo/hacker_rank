const compareTriplets = require('./src/exercises/1_compare_triplets/compareTriplets');
const aVeryBigSum = require('./src/exercises/2_very_big_sum/aVeryBigSum');
const diagonalDifference = require('./src/exercises/3_diagonal_difference/diagonalDifference');

// const a = [5,6,7];
// const b = [3,6,10];
// const a = [17,28,30];
// const b = [99,16,8];

// const output = compareTriplets(a, b);

// console.log(output);

// ----------------------------------------- //

// const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

// const output = aVeryBigSum(ar);

// console.log(output);

// ----------------------------------------- //

// const arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const output = diagonalDifference(arr);

console.log(output);