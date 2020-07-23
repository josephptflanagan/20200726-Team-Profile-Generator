const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = 'Fake Name', id = 0, email = 'fakeName@fakeMail.com', role = 'Intern', school = 'Intern U') {

        super(name, id, email);

        this.role = role;
        this.school = school;

    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;