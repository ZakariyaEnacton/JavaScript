var User = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getlastName = function () {
        console.log(`last name is ${lastName}`);
    }
}
var jhon = new User('Jhon', 'Deen');
console.log(jhon);

var jhon1 = new User('Jhon', 'cook')
console.log(jhon1);

var sam = new User('Sam', 'walker');
console.log(sam);       