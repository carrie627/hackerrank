"use strict";

function aVeryBigSum(ar) {
    // Write your code here
    let sum = 0n;
    for (let i = 0; i < ar.length; i++) {
        sum += BigInt(ar[i]);
    }
    return sum;
}

console.log(
    aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);
