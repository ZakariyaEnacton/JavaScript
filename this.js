console.log(this);

var info = {
    userName: 'JavaScript',
    userId: 123456,
    getUserDetails: function () {
        console.log('line 7', this);
        function sayHello() {
            console.log('Hello');
            console.log('line 10', this);
        }
        sayHello();
    }
}

info.getUserDetails();

