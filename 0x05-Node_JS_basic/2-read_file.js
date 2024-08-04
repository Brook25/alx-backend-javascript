fs = require('fs');

fs.readFile('database.csv', 'utf-8', (err, data) => { 
  if (err)
    throw new Error('Cannot load the database');
  const lines = data.split('\n').slice(1, -1);
  console.log('Number of students: ' + lines.length);
  student_data = lines.map((elem) => {
    return elem.split(',')
  });
  fields = student_data.map((elem) => {
    return elem[3];
  });
  uniques = Array.from(new Set(fields));
  uniques.sort();
  uniques.forEach((elem) => {
    student_count = student_data.reduce((count, value) => {
      return value[3] === elem ? count + 1 : count;
    }, 0
    );
  studentsInField = []
  student_data.forEach((student) => {
    if (student[3] === elem)
	  studentsInField.push(student[0]);
    });
  console.log(`Number of students in ${elem}: ${student_count}. List: ${studentsInField.join(', ')}`);
});
});
