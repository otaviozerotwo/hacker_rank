/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

const compareTriplets = (a, b) => {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      result.push(1);
    } else if (a[i] < b[i]) {
      result.push(1);
    }
  }
  return result;
}

module.exports = compareTriplets;
