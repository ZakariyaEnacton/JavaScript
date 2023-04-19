var User = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getlastName = function () {
        console.log(`Your last name is ${lastName}`);
    }
}

User.prototype.getFirstName = function () {
    console.log(`Your first name is ${this.firstName}`);
}
var jhon = new User('Jhon', 'Deen');
// console.log(jhon);
jhon.getFirstName()
jhon.getlastName()

// var jhon1 = new User('Jhon', 'cook')
// console.log(jhon1);
// jhon1.getlastName()

var sam = new User('Sam', 'walker');
// console.log(sam);       
sam.getFirstName()
sam.getlastName()