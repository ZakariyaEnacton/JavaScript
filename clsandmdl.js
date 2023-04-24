// classes and modules exports in JavaScript


class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    courseList = [];

    getStudentInfo() {
        return { name: this.name, email: this.email }
    }

    enrollCourses(name) {
        this.courseList.push(name)
    }

    getCourseList() {
        return this.courseList;
    }
}

// module.exports
module.exports = Student;

// note: here use module for exports the file into another



