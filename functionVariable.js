function info(name, role) {
    switch (role) {
        case "Student":
            return ` ${name} you are a Student`;
            break;
        case "Professor":
            return ` ${name} you are a Professor`;
            break;

        default:
            return ` ${name} not exists`;
            break;
    }

};
console.log(info('jhon', "Professor")); 