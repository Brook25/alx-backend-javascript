interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attr: string]: any;
}


interface StClassConstr {
  new (firstName: string, lastName: string): StClass;
}


interface StClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}


class StudentClass implements StClass {
  firstName: string;
  lastName: string;
  constructor(fName: string, lName: string) {
    this.firstName = fName;
    this.lastName = lName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  get displayName(): string {
    return this.firstName;
  }
}




const teach: Teacher = {
  firstName = 'Brook',
  lastName = 'Kirsh',
  fullTimeEmployee = 'true',
  yearsOf Experience = 54,
  location: 'Adis',
  contract: false
}
console.log(teach)


interface Directors extends Teacher {
  numberOfReports: number;
}


const printTeacher: printTeacherFunction = function (firstName: string, lastName: string) :string {
  return `${firstName.slice(0, 1)}. ${lastName}`;
}


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

