interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInteface {
  workFromHOme(): string;
  getcoffeeBreak(): string;
  workTeacherTasks(): string;
}


class Director implements DirectorInterface {
  workFromHome(): string { return 'working from Hone'; }
  getCofeeBreak(): string { return 'Getting a coffee break'; }
  workDirectorTasks(): string { return 'Getting to director tasks'; }
}



function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

type isDirector = (employee: Director | CTeacher) => boolean;

function executework(employee: Director | CTeacher) {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

type Subjects = "Math" | "History";

function teachclass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}
