//allows for the use of the inquirer package
const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class DataEntry {
    constructor(data = []) {

        this.data = data;

    }

    dataCollection() {

        //initial Manager data collection

        let [name, id, email, type, office] = this.populateRequest("Manager");

        this.data.push(new Manager(name, id, email, type, office));

        roleChoice();

    }

    roleChoice() {
        inquirer.prompt({
            //CHOICE
            type: 'list',
            name: 'choice',
            message: 'Would you like to enter the information of an engineer, an intern, or finish building your team?',
            choices: ['Engineer', 'Intern', 'Finish']
        })
            .then(({ choice }) => {

                if (choice == "Engineer") {
                    let [name, id, email, type, gitHub] = this.populateRequest(choice);

                    this.data.push(new Engineer(name, id, email, type, gitHub));
                }
                else if (choice == "Intern") {
                    let [name, id, email, type, school] = this.populateRequest(choice);

                    this.data.push(new Intern(name, id, email, type, school));
                }
                else if (choice == "Finish") {
                    return;
                }
                roleChoice();
            })
    }

    populateRequest(type) {

        let requestArr = [];
        requestArr.push(this.addName())
            .then(requestArr.push(this.addId()))
            .then(requestArr.push(this.addEmail()))
            .then(requestArr.push(type))
            .then(({ type }) => {
                if (type == "Manager") {
                    requestArr.push(this.addOffice());
                }
                else if (type == "Engineer") {
                    requestArr.push(this.addGitHub());
                }
                else if (type == "Intern") {
                    requestArr.push(this.addSchool());
                }

            });

        return requestArr;

    }

    addName() {

        inquirer.prompt([
            {
                //NAME
                type: 'input',
                name: 'name',
                message: 'What is the name of this team member? (Required)',
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log('Please enter the name of your team member.');
                        return false;
                    }
                }
            }])
            .then(({ name }) => { return name; });

    }

    addId() {

        inquirer.prompt([
            {
                //ID
                type: 'input',
                name: 'id',
                message: 'What is the employee ID of this team member? (Required)',
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log('Please enter the employee ID of this team member.');
                        return false;
                    }
                }
            }])
            .then(({ id }) => { return id; });
    }

    addEmail() {
        inquirer.prompt([
            {
                //EMAIL
                type: 'input',
                name: 'email',
                message: 'What is the email address of this team member? (Required)',
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log('Please enter the email address of this team member.');
                        return false;
                    }
                }
            }])
            .then(({ email }) => { return email; });
    }

    addOffice() {
        inquirer.prompt([
            {
                //OFFIC NUMBER
                type: 'input',
                name: 'office',
                message: 'What is the office number of this manager? (Required)',
                validate: office => {
                    if (office) {
                        return true;
                    } else {
                        console.log('Please enter the office number of this manager.');
                        return false;
                    }
                }
            }])
            .then(({ office }) => { return office; });
    }
    addGitHub() {
        inquirer.prompt([
            {
                //GITHUB
                type: 'input',
                name: 'gitHub',
                message: "What is this engineer's gitHub username? (Required)",
                validate: gitHub => {
                    if (gitHub) {
                        return true;
                    } else {
                        console.log("Please enter this engineer's gitHub username.");
                        return false;
                    }
                }
            }])
            .then(({ gitHub }) => { return gitHub; });
    }
    addSchool() {
        inquirer.prompt([
            {
                //SCHOOL
                type: 'input',
                name: 'school',
                message: 'What is the school this intern is attending? (Required)',
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        console.log('Please enter the school this intern is attending.');
                        return false;
                    }
                }
            }])
            .then(({ school }) => { return school; });
    }
}

module.exports = DataEntry;


