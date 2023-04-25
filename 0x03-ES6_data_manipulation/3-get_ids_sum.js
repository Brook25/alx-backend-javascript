export default function getStudentIdsSum(sts) {
  return sts.reduce((total, elem) => total + elem.id, 0);
}
