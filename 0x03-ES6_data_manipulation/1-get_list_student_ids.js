export default function getListStudents(arrobj) {
  return Array.isArray(arrobj) ? arrobj.map((elem) => elem.id) : [];
}
