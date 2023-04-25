export default function getStudentsByLocation(stslist, city) {
  return stslist.filter((elem) => elem.location === city);
}
