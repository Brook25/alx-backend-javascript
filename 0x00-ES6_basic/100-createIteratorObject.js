export default function createIteratorObject(report) {
  const x = Object.values(report.allEmployees)[Symbol.iterator]();
  let arr = [];
  for (const elem of x) {
    arr = arr.concat(elem);
  }
  return arr;
}
