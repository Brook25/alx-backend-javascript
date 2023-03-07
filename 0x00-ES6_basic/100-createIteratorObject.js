export default function createIteratorObject(report) {
  const arr = []
  const x = Object.values(report.allEmployees)[Symbol.iterator]();
  for (const y of x) {
   for (const z of y) {
	  arr.push(z);
}
}

return arr;
}
