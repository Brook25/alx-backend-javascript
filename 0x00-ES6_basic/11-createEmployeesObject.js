export default function createEmployeesObject(dep, employees) {
  return {[`${dep}`]: employees}
}
