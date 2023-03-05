export default function appendToEachArrayValue(array, appendString) {
    var arr = [];
    for (const elem of array) {
    arr.push(appendString + elem);
  }

  return arr;
}
