export default function appendToEachArrayValue(array, appendString) {
  let i = 0
  for (const elem of array) {
    array[i] = appendString + elem;
    i += 1;
  }

  return array;
}


console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
