// add whatever parameters you deem necessary
function averagePair(arr, avg) {
  const set = new Set(arr);
  for (let num of arr) {
    if (set.has(avg + (avg - num))) {
      return true;
    }
  }
  return false;
}

module.exports = averagePair;