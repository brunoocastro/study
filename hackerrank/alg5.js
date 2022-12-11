const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

("use strict");

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  console.log(arr, arr.length);
  const primaryDiagonal = [];
  const secondaryDiagonal = [];

  arr.map((row, i) => {
    row.map((val, j) => {
      console.log({ i, j, equals: i === j });
      if(i === j) primaryDiagonal.push(val)
      if((i+1)+(j+1) === (arr.length + 1)) secondaryDiagonal.push(val)
    });
  });

  console.log({
    primaryDiagonal,
    secondaryDiagonal
  })

  return Math.abs(primaryDiagonal.reduce((acc, val) => acc + val, 0) - secondaryDiagonal.reduce((acc, val) => acc + val, 0))
}

function main() {
  const result = diagonalDifference(matrix);

  console.log("Saida:", result + "\n");
}
main();
