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
}

// here for getter and setter examples

var info = new Student("Jhon", "jhon@jhon.com")
console.log(info.enrollCourses("Python"));
console.log(info.getCourseList());
console.log(info.courseList);