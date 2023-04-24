// import Student from "./clsandmdl";

const Student = require("./clsandmdl")

let student = new Student("Zakariya", "mzb.enacton@gmail.com");
console.log(student.getStudentInfo());


student.enrollCourses("Data Structure")
student.enrollCourses("Web Development")
console.log(student.getCourseList());

//using forEach
let coursesName = student.getCourseList()
coursesName.forEach(cn => console.log(cn));

// note: here use require keyword to use import the file 