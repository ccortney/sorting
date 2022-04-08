function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i) % 10);
}

function digitCount(num) {
    if (num ===0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(digitCount(arr[i]), maxDigits);
    }
    return maxDigits;
}

function radixSort(arr) {
    let maxDigitCount = mostDigits(arr);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10}, () => []);
        for (let i = 0; i < arr.length; i++) {
            let num = arr[i];
            let digit = getDigit(num, k);
            digitBuckets[digit].push(num);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort } 