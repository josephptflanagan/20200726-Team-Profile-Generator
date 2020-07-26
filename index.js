//allows for usage of the writeFile utility from fs with error handling
const { writeFile, copyFile } = require('./utils/html-generator.js');

//generates the readme from a template
const populateHTML = require('./src/html-template.js');

const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//array that holds instances of the employee classes
var team = [];

//controls the filling of the team array, or the move to complete the run of the program
const dataCollection = (choice) => {

  return new Promise((resolve, reject) => {

    if (choice === "Finish") {

      //passes the complete team array to the generateHTML function which creates a string representing the HTML sheet
      generateHTML(team);
      resolve(team);
    }
    else{ //If the choice is anything other than "Finish", the program generates a new employee for the team
      addTeamMember(choice);
    }


  })

}

//used to add new instances of the employee classes to populate the team array
const addTeamMember = async (employeeType) => {

  //name, id, and email obtaining prompt to be used later by inquirer
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

  //office number prompt to be used later by inquirer
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

  //gitHub user name prompt to be used later by inquirer
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

  //school prompt to be used later by inquirer
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

  //choice prompt to be used later by inquirer
  const choicePrompt = [
    {
      //CHOICE
      type: 'list',
      name: 'choice',
      message: 'Would you like to enter the information of an engineer, an intern, or finish building your team?',
      choices: ['Engineer', 'Intern', 'Finish']
    }
  ];

  //the placeholder variable that hold the employee temporarily until it is passed into the team array
  var employee = null;

  //populates the name, id, and email variables using inquirer and the boiler plate prompt
  const { name, id, email } = await inquirer.prompt(boilerPlatePrompt);


  if (employeeType == "Manager") {

    //uses the inquirer package and the gitHubPrompt to obtain the Manager's office number
    const office = await inquirer.prompt(officePrompt);
    //fills the employee variable with an instance of the Manager Class
    employee = new Manager(name, id, email, employeeType, office['office']);

  }

  else if (employeeType == "Engineer") {

    //uses the inquirer package and the gitHubPrompt to obtain the Engineer's GitHub User Name
    const gitHub = await inquirer.prompt(gitHubPrompt)
    //fills the employee variable with an instance of the Engineer Class
    employee = new Engineer(name, id, email, employeeType, gitHub['gitHub']);

  }

  else if (employeeType == "Intern") {

    //uses the inquirer package and the schoolPrompt to obtain the intern's school
    const school = await inquirer.prompt(schoolPrompt)
    //fills the employee variable with an instance of the Intern Class
    employee = new Intern(name, id, email, employeeType, school['school']);

  }

  //uses the inquirer package and the choicePrompt to get a new choice
  const choice = await inquirer.prompt(choicePrompt);

  //populates the team array with the generated employee
  team.push(employee)

  //returns to the dataCollection function with a new choice
  dataCollection(choice['choice']);

}
//initializes program, fills the team array with instances of the employee classes
dataCollection("Manager")

//passes the team array to the html-template, which returns a string of html
const generateHTML = (team) => {
  var html = populateHTML(team)
  //passes the html string to the html-generator which creates an HTML page, and copies the style sheet into distribution
  copyFile();
  writeFile(html)
    .then(writeFileResponse => {
      console.log(writeFileResponse);
    })
    .catch(err => {
      console.log(err);
    });


}


