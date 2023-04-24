
class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    #courseList = [];

    getStudentInfo() {
        return { name: this.name, email: this.email }
    }

    enrollCourses(name) {
        this.#courseList.push(name)
    }

    getCourseList() {
        return this.#courseList;
    }

    login() {
        return "successfully logged in";
    }
}

class NewStudent extends Student {
    constructor(name, email) {
        super(name, email)
    }
    getStatusChacked() {
        return "You are a Student";
    }

    login() {
        console.log("login new student only");
    }
}

var info = new NewStudent("student", "student@stu.com");

console.log(info.getStatusChacked());
console.log(info.login());
console.log(info.getStudentInfo());