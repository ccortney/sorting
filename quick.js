/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/


function pivot(arr, startIdx = 0, endIdx = arr.length - 1){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    let pivotVal = arr[startIdx];
    let swapIdx = startIdx;

    for (let i = startIdx + 1; i <= endIdx; i++) {
        if (pivotVal > arr[i]) {
          swapIdx++;
          swap(arr, swapIdx, i);
        }
      }

    swap(arr, startIdx, swapIdx);
    return swapIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}



module.exports = {pivot, quickSort};