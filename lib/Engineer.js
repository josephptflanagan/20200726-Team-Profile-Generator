const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = 'Fake Name', id = 0, email = 'fakeName@fakeMail.com', role = 'Engineer', gitHub = 'mrManager1') {

        super(name, id, email);

        this.role = role;
        this.gitHub = gitHub;

    }

    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer;