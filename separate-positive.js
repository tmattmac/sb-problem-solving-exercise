// add whatever parameters you deem necessary
function separatePositive(arr) {
  let i = 0, j = arr.length - 1;
  while (i < j) {
    // if both negative, move right pointer
    if (arr[i] < 0 && arr[j] < 0) j--;
    // if both positive, move left pointer
    else if (arr[i] > 0 && arr[j] > 0) i++;
    // if left negative and right positive, swap and move both pointers
    // if left positive and right negative, just move both pointers
    else {
      if (arr[i] < arr[j]) {
        ([arr[i], arr[j]] = [arr[j], arr[i]]);
      }
      i++;
      j--;
    }
  }
  return arr;
}

module.exports = separatePositive;