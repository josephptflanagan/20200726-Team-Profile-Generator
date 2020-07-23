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
        this.data.push(new Manager(addName(), addId(), addEmail(), "Manager", addOffice()));

        roleChoice();

    }

    roleChoice() {
        inquirer.prompt({
                //CHOICE
                type: 'list',
                name: 'choice',
                message: 'Would you like to enter the information of an engineer, an intern, or finish building your team?',
                choices:['Engineer', 'Intern', 'Finish']               
            })
            .then(({choice})=>{

                if(choice == "Engineer"){
                    this.data.push(new Engineer(addName(), addId(), addEmail(), "Engineer", addGitHub()));
                }
                else if(choice == "Intern"){
                    this.data.push(new Intern(addName(), addId(), addEmail(), "Intern", addSchool()));
                }
                else if(choice == "Finish"){
                    return;
                }
                roleChoice();
            })
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
            .then(({name})=>{return name;});
        
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
            .then(({id})=>{return id;});
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
            .then(({email})=>{return email;});
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
            .then(({office})=>{return office;});
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
            .then(({gitHub})=>{return gitHub;});
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
            .then(({school})=>{return school;});
    }
}

module.exports = DataEntry;


