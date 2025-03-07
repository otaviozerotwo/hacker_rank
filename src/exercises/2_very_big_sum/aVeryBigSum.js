/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

const aVeryBigSum = (ar) => {
  let sum = 0;
  for (let i = 0; i < ar.lenght; i++) {
    sum += ar[i];
  }
  return sum;
}

module.exports = aVeryBigSum;