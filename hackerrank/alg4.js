"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  const sortedArr = a.sort((a, b) => a - b);

  const single = [];
  const repeated = [];
  sortedArr.forEach((i) => {
    if (single.includes(i)) repeated.push(i);
    else {
      single.push(i);
    }
  });

  const unique = single.filter(num => !repeated.includes(num))

  console.log({sortedArr, single, repeated, unique})
  return (unique[0])
}

function main() {
  const a = [1,2,3,4,3,2,1];

  const result = lonelyinteger(a);

  console.log(result + "\n");
}

main()
