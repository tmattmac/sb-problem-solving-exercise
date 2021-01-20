// add whatever parameters you deem necessary
function longestFall(arr) {
  let fall = 1, max = 1;
  if (arr.length === 0) return 0;
  for (let i = 1; i < arr.length; i++) {
    fall = arr[i] < arr[i - 1] ? fall + 1 : 1;
    max = Math.max(fall, max);
  }
  return max;
}

module.exports = longestFall;