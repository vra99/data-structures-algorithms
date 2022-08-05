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
 * Complete the 'solve' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY tree
 *  2. 2D_INTEGER_ARRAY queries
 */
const UF = class {
    constructor(len) {
        this.parents = Array(len + 1).fill(null).map((e, i) => i);
        this.sizes = Array(len + 1).fill(1);
    }

    find(a) {
        while (a !== this.parents[a]) {
            a = this.parents[a];
        }
        return a;
    }

    union(a, b, operation) {
        const rootOfA = this.find(a);
        const rootOfB = this.find(b);
        if (rootOfA !== rootOfB) {
            const sizeOfA = this.sizes[rootOfA];
            const sizeOfB = this.sizes[rootOfB];

            operation(sizeOfA * sizeOfB);

            if (sizeOfA < sizeOfB) {
                this.parents[rootOfA] = rootOfB;
                this.sizes[rootOfB] += this.sizes[rootOfA];
            } else {
                this.parents[rootOfB] = rootOfA;
                this.sizes[rootOfA] += this.sizes[rootOfB];
            }
        }
    }
}

function solve(tree, queries) {
    // Write your code here
   const len = tree.length;
    const uf = new UF(len + 2);
    tree = tree.sort((a, b) => a[2] - b[2]);
    const pathsWithCost = new Map();
    pathsWithCost.set(0, 0);
    let currentCost = 0;

    for (let i = 0; i < len; i++) {
        if (tree[i][2] !== currentCost) {
            pathsWithCost.set(tree[i][2], pathsWithCost.get(currentCost));
            currentCost = tree[i][2];
        }
        uf.union(tree[i][0], tree[i][1], (pathCount) => {
            pathsWithCost.set(currentCost, pathsWithCost.get(currentCost) + pathCount);
        });
    }

    const keys = Array.from(pathsWithCost.keys());
    const keysLen = keys.length;
    const find = (n) => {
        let lo = -1;
        let hi = keysLen;
        let mid = Math.floor((lo + hi) / 2);

        while(mid > lo && mid < hi) {
            if(keys[mid] === n) {
                return pathsWithCost.get(n);
            } else {
                if(keys[mid] > n) {
                    hi = mid;
                    mid = Math.floor((lo + hi) / 2);
                } else {
                    lo = mid;
                    mid = Math.floor((lo + hi) / 2);
                }
            }
        }
        return pathsWithCost.get(keys[lo]);
    }

    const result = [];
    queries.forEach(query => {
        result.push(find(query[1]) - find(query[0] - 1));
    })

    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const q = parseInt(firstMultipleInput[1], 10);

    let tree = Array(n - 1);

    for (let i = 0; i < n - 1; i++) {
        tree[i] = readLine().replace(/\s+$/g, '').split(' ').map(treeTemp => parseInt(treeTemp, 10));
    }

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = solve(tree, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
