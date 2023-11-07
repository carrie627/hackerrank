"use strict";

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    let f = 0;
    let l = 0;
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            f++;
        } else if (a[i] < b[i]) {
            l++;
        }
    }
    arr.push(f);
    arr.push(l);

    return arr;
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
