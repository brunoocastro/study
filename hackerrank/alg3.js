'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    const timeType = s.toUpperCase().includes('PM') ? 'PM' : 'AM'
    console.log(timeType)
    const cleanTime = s.split(timeType)[0]
    const [hour, minutes, seconds] = cleanTime.split(':')
    
    const baseHour = timeType === 'PM' ? Number(hour) === 12 ? 0 : 12 : Number(hour) === 12 ? -12 : 0
    const newHour = Number(baseHour)+Number(hour)
    console.log({baseHour, newHour, hour})

    return (`${newHour < 10 ? `0${newHour}` : newHour}:${minutes}:${seconds}`)
}

function main() {
    const s = '12:45:54PM';

    const result = timeConversion(s);

    console.log(result + '\n');

}
main()