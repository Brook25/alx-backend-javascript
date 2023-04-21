export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  for (const x of reportWithIterator) {
    employees += `| ${x} `;
  }
  return employees.substr(2).trimEnd();
}
