var user = {
    firstName: 'Jhon',
    lastName: 'Deen',
    hobbbies: [],
    hobbbiesList: function (hobbiesName) {
        this.hobbbies.push(hobbiesName);
    },
    getHobbiesList: function () {
        return `${this.firstName} is total ${this.hobbbies.length} Hobbies`;
    }
};
// var hobbbiesList = true
console.log(user.firstName)
console.log(user.getHobbiesList())
user.hobbbiesList('Sports');
user.hobbbiesList('Travelling');
console.log(user.getHobbiesList())

