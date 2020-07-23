const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = 'Fake Name', id = 0, email = 'fakeName@fakeMail.com', role = 'Manager', officeNumber = 0) {

        super(name, id, email);

        this.role = role;
        this.officeNumber = officeNumber;

    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;