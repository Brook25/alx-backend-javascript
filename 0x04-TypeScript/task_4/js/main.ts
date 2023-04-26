export const cpp: Subjects.Cpp = new Subjects.Cpp()

export const java: Subjects.Java = new Subjects.Java();

export const react: Subjects.React = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: "Brian",
  lastName: "Queen",
  experienceTeachingC: 10
}

cpp.setTeacher = cTeacher;
java.setTeacher = cTeacher;
react.setTeacer = cTeacher;
console.log('C++');
console.log(cpp.getRequirements);
console.log(cpp.getAvailableTeacher);
console.log('Java');
console.log(java.getRequirements);
console.log(cpp.getAvailableTeacher);
console.log('React');
console.log(java.getRequirements);
console.log(cpp.getAvailableTeacher);
