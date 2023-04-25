export default function updateStudentGradeByCity(sts, city, newgrds) {
  return sts.filter((elem) => elem.location === city).map((val) => {
    const res = { ...val }; const x = newgrds.find((elem) => elem.studentId === val.id); if (x) { res.grade = x.grade; } else { res.grade = 'N/A'; }
    return res;
  });
}
