// add whatever parameters you deem necessary
function constructNote(message, letters) {
  const freq = {};
  for (let letter of letters) {
    freq[letter] = (freq[letter] + 1) || 1;
  }
  for (let letter of message) {
    if (!freq[letter]) {
      return false;
    }
    freq[letter]--;
  }
  return true;
}

module.exports = constructNote;