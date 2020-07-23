//allows for usage of the writeFile utility from fs with error handling
const {writeFile, copyFile} = require('./utils/html-generator.js');

//generates the readme from a template
const populateHTML = require('./src/readme-template.js');

//allows for the use of the inquirer package
const inquirer = require("inquirer");

//Prompts User for the project title, description, installation instructions, usage information, contribution guidelines, test instructions, license, GitHub Username, email address
const promptUser = () => {
  
    readmeData = [];

    return inquirer.prompt([
      {  
        //PROJECT TITLE INPUT
        type: 'input',
        name: 'title',
        message: 'What is the project title? (Required)',
        validate: projectTitleInput => {
        if (projectTitleInput){
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
        }
      },
      {
        //PROJECT DESCRIPTION INPUT
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: projectDescriptionInput => {
        if (projectDescriptionInput){
          return true;
        } else {
          console.log('Please enter your project description!');
          return false;
        }
        }
      },
      {
        //PROJECT INSTALLATION INSTRUCTIONS INPUT
        type: 'input',
        name: 'install',
        message: 'Provide an installation instruction (Required)',
        validate: projectInstallationInput => {
        if (projectInstallationInput){
          return true;
        } else {
          console.log('Please enter an installation instruction!');
          return false;
        }
        }
      },
      {
        //PROJECT USAGE INPUT
        type: 'input',
        name: 'usage',
        message: 'Provide a description of proper usage (Required)',
        validate: projectUsageInput => {
        if (projectUsageInput){
          return true;
        } else {
          console.log('Please enter information on usage!');
          return false;
        }
        }
      },
      {
        //PROJECT CONTRIBUTION GUIDELINES INPUT
        type: 'input',
        name: 'contribution',
        message: 'Provide a contribution guideline (Required)',
        validate: projectContributionInput => {
        if (projectContributionInput){
          return true;
        } else {
          console.log('Please enter contribution guidelines!');
          return false;
        }
        }
      },
      {
        //PROJECT TEST INSTRUCTION INPUT
        type: 'input',
        name: 'test',
        message: 'Provide test instructions (Required)',
        validate: projectTestInput => {
        if (projectTestInput){
          return true;
        } else {
          console.log('Please enter test instructions!');
          return false;
        }
        }
      },
      {
        //PROJECT LICENSE INPUT
        type: 'list',
        name: 'license',
        message: 'What license is this covered by? (Choose the one that applies)',
        choices: ['Apache', 'Boost', 'BSD 3-Clause', 'BSD 2-Clause', 'GPL', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Eclipse']
      },
      {
        //GITHUB USERNAME INPUT
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: gitHubUsernameInput => {
        if (gitHubUsernameInput){
          return true;
        } else {
          console.log('Please enter your username!');
          return false;
        }
        }
      },
      {
        //EMAIL ADDRESS INPUT
        type: 'input',
        name: 'email',
        message: 'Enter your Email Address (Required)',
        validate:emailInput => {
        if (emailInput){
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
        }
      }
    ])
  };

promptUser()
    .then(teamData => {
        return populateHTML(teamData);
    })
    .then(htmlTemplate => {
        //console.log(pageMD);
        return writeFile(htmlTemplate);
    })
    .then(writeFileResponse => {
      console.log(writeFileResponse);
    })
    .catch(err => {
      console.log(err);
    });      