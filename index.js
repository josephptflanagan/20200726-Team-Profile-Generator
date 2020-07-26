//allows for usage of the writeFile utility from fs with error handling
const { writeFile, copyFile } = require('./utils/html-generator.js');

//generates the readme from a template
const populateHTML = require('./src/html-template.js');

const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var team = [];

const dataCollection = (choice) => {

  return new Promise((resolve, reject) => {

    if (choice === "Finish") {
      generateHTML(team);
      resolve(team);
    }
    else addTeamMember(choice);


  })




}

const addTeamMember = async (employeeType) => {

  const boilerPlatePrompt = [
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
    }
  ];

  const officePrompt = [
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
    }
  ];

  const gitHubPrompt = [
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
    }
  ];

  const schoolPrompt = [
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

    }
  ]

  const choicePrompt = [
    {
      //CHOICE
      type: 'list',
      name: 'choice',
      message: 'Would you like to enter the information of an engineer, an intern, or finish building your team?',
      choices: ['Engineer', 'Intern', 'Finish']
    }
  ];

  //console.log("boilerplateprompt", boilerPlatePrompt);
  const { name, id, email } = await inquirer.prompt(boilerPlatePrompt);
  var employee = null;

  if (employeeType == "Manager") {

    const office = await inquirer.prompt(officePrompt);
    employee = new Manager(name, id, email, employeeType, office['office']);

  }

  else if (employeeType == "Engineer") {

    const gitHub = await inquirer.prompt(gitHubPrompt)
    employee = new Engineer(name, id, email, employeeType, gitHub['gitHub']);

  }

  else if (employeeType == "Intern") {

    const school = await inquirer.prompt(schoolPrompt)
    employee = new Intern(name, id, email, employeeType, school['school']);

  }

  const choice = await inquirer.prompt(choicePrompt);

  team.push(employee)

  dataCollection(choice['choice']);

}

dataCollection("Manager")

const generateHTML = (team) =>{ 
  var html = populateHTML(team)
  copyFile();
  writeFile(html)  
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
  .catch(err => {
    console.log(err);
  });      


}


  