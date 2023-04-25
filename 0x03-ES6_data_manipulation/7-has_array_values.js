export default function hasValuesFromArray(set, array) {
  let bool = true;
  array.forEach((val) => { if (!set.has(val)) { bool = false; } });
  return bool;
}
