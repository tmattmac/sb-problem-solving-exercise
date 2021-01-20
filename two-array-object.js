// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  return Object.fromEntries(arr1.map((e, i) => [e, arr2[i] || null]));
}

module.exports = twoArrayObject;