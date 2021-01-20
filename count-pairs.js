// add whatever parameters you deem necessary
function countPairs(arr, sum) {
  const set = new Set(arr);
  let pairs = 0;
  for (let num of arr) {
    set.delete(num);
    if (set.has(sum - num)) pairs++;
  }
  return pairs;
}

module.exports = countPairs;