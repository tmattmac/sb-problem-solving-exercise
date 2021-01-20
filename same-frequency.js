// add whatever parameters you deem necessary
function sameFrequency(n1, n2) {
  const freq = new Array(10).fill(0);
  for (let digit of n1.toString()) {
    freq[digit]++;
  }
  for (let digit of n2.toString()) {
    freq[digit]--;
  }
  return freq.every(e => e === 0);
}

module.exports = sameFrequency;