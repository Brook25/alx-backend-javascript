export default function iterateThroughObject(reportWithIterator) {
  var employees = '';
  for (const x of reportWithIterator) {
    employees += `| {x} `;
  }
  return employees.substr(2).trimEnd();
}
