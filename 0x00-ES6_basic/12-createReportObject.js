export default function createReportObject(allemployees) {
  return {
    allEmployees: allemployees,
    getNumberOfDepartments: (allemps) => Object.keys(allemps).length,
  };
}
