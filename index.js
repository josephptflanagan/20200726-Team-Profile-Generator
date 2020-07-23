//allows access to the DataEntry library
const DataEntry = require('./lib/DataEntry');

//allows for usage of the writeFile utility from fs with error handling
const {writeFile} = require('./utils/html-generator.js');

//generates the readme from a template
const populateHTML = require('./src/readme-template.js');

new DataEntry().dataCollection()
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