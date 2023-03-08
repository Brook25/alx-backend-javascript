export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== "string")
	  throw "TypeError: Name must be a string"
     this._name = name;
    if (typeof length !== "number")
	    throw "TypeError: Length must be a number"
     this._length = length;
      if (!Array.isArray(students) || students.find(x => typeof x !== 'string') != undefined)
	  //console.log(Array.isArray(students), students.find(x => typeof x !== 'string'));  
	  throw "TypeError: Students must be an array";
      this._students = students;
    }

   get name() {
     return this._name;
   }
   set name(name) {
     if (typeof name !== "string")
	   throw "TypeError: Name must be a string"
       this._name = name;
   }
   get length() {
     return this._length;
   }
   set length(len) {
     if (typeof len !== 'number')
       throw "TypeError: Length must be a number"
     this._length = len;
   }
    get students() {
     return this._students;
    }
   
   set students(sts) {
     if (!Array.isArray(sts) || sts.find(x => typeof x !== 'string') != undefined)
       //console.log(Array.isArray(sts), sts.find(x => typeof x !== 'string'));
	     throw "TypeError: Students must be an array";
     this._students = sts;
   }
}


/*const hol = new HolbertonCourse("fine", 85, ["hail", "james"]);
console.log(hol.name, hol);
hol.name = "name";
hol.length = 89;
hol.students = [9, 'Joe'];
console.log(hol);*/
