namespace Subjects {
export class Cpp extends Subjects {
  getRequirements(): string {
   return "Here is the list of requirements for Cpp";
  }
  getAvailableTeacher(): string {
    if ( this.teacher.expereinceTeachingC == 0) {
      return "No Available teacher";
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
} 
  export interface Teacher {
  expereinceTeachingC?: number;
}
}
