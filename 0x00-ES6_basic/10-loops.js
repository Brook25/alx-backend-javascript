export default function appendToEachArrayValue(array, appendString) {
  let arr = [];
  for (const elem of array) {
    arr.push(appendString + elem);
  }

  return arr;
}
