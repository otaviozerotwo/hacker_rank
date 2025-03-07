const diagonalDifference = (arr) => {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i] = arr[j]) {
        console.log(arr[i][j]);
      }
    }
  }
}

module.exports = diagonalDifference;