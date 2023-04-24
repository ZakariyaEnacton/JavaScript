var info = {
  firstName: "Muhammad Zakariya",
  lastName: "Bombaywala",
  companyName: "EnactOn Pvt. Ltd.",
  position: "web developer",
  getInfo: function () {
    console.log(`
    Full name is : ${this.firstName} ${this.lastName}
    Working in a ${this.companyName} 
    Working as a ${this.position} in ${this.companyName}
    `);
  },
};

// info.getInfo();

var infoTwo = {
  firstName: "Rock",
  lastName: "DJ",
  position: "Actor",
  companyName: "Hollywood",
};

// using bind()
var details = info.getInfo.bind(infoTwo);
details();

// using call()
info.getInfo.call(infoTwo);
