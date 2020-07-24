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

        return new Promise((resolve,reject)=>{
            this.addTeamMember("Manager").then(()=>this.roleChoice());
        });
    }

    roleChoice() {
        //console.trace("hello");
        return inquirer.prompt([{
            //CHOICE
            type: 'list',
            name: 'choice',
            message: 'Would you like to enter the information of an engineer, an intern, or finish building your team?',
            choices: ['Engineer', 'Intern', 'Finish']
        }])
            .then(({ choice }) => {

                if (choice == "Finish") {
                    return;
                }
                else {
                    return new Promise((resolve,reject)=>{
                        this.addTeamMember(choice).then(()=>this.roleChoice());
                    });
                }
            })
    }

    addTeamMember(employeeType) {
        //console.log("Add team member");

        return inquirer.prompt([
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
            },
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
            },
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
            .then((name, id, email)=> {
                console.log("type: " + employeeType);
                if (employeeType == "Manager") {
                    inquirer.prompt([
                        {
                            //OFFICE NUMBER
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
                        this.data.push(new Manager(name, id, email, employeeType, office))
                }
                else if (employeeType == "Engineer") {
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
                    new Engineer(name, id, email, employeeType, gitHub)
                }
                else if (employeeType == "Intern") {
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
                    this.data.push(new Intern(name, id, email, employeeType, school));
                }
            })

    }
}

module.exports = DataEntry;


