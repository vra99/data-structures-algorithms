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
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(input) {
    // Write your code here
    var chars = input.split(''),
        w = Math.ceil(Math.sqrt(chars.length)),
        h = Math.ceil(Math.sqrt(chars.length)),
        result = [];
        
    for (var i = 0; i < h; i++) {
        var j = i, str = '';
        while (j < chars.length) {
            str += chars[j];
            j += w;
        }
        result.push(str);
    }
    
    return result.join(' ');

}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = encryption(s);

    ws.write(result + '\n');

    ws.end();
}
