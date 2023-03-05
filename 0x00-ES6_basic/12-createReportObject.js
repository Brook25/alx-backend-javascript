export default function createReportObject(allemployees) {
  return {
    allEmployees: allemployees,
    getNumberOfDepartemnts: (allemps) => Object.keys(allemps).length,
  };
}
