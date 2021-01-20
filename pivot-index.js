// add whatever parameters you deem necessary
function pivotIndex(arr) {
  let total = arr.reduce((acc, e) => acc + e, 0);
  let cumulativeSum = 0;
  for (let i = 0; i < arr.length; i++) {
    total -= arr[i];
    if (cumulativeSum === total) return i;
    cumulativeSum += arr[i];
  }
  return -1;
}

module.exports = pivotIndex;