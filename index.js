// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// An array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is the name of your repository?",
    },
    {
        name: "project_description",
        type: "input",
        message: "How would you describe your project?",
    },
    {
        name: "installation",
        type: "input",
        message: "What are the steps a user has to take to install your project?",
    },
    {
        name: "usage",
        type: "input",
        message: "How does a user use your application?",
    },
    {
        name: "license",
        type: "list",
        message: "What license is used for this project?",
        choices: ["none", "MIT", "Apache license 2.0", "GNU GPL v3",  "GNU GPL v2", "GNU Affero GPL v3", "BSD 2-Clause", "BSD 3-clause", "Boost Software v1", "Mozilla Public License 2"]
    },
    {
        name: "contributingNumber",
        type: "number",
        message: "How many contributors were there in the development of this project?",
    },
    {
        name: "contributing",
        type: "input",
        message: "Please provide the Github profile name of the owner of this repository",
    },
    {
        name: "additionalContributors",
        type: "input",
        message: "if there was another contributor to this project please provide their github profile name",
    },
    {
        name: "tests",
        type: "input",
        message: "Write any tests you have for your app here",
    },
    {
        name: "questions",
        type: "input",
        message: "What is your email address?",
    }
];

   
    
  
// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
        const markdownTemplate = generateMarkdown(answers);
        fs.writeFile(fileName, markdownTemplate, function (err) {
        if (err) return console.log(err);
        console.log("Readme file written")
      });    
}

// TODO: Create a function to initialize app
function init()
{
    inquirer.prompt(questions).then((answers) => {
        try {
            writeToFile('./utils/README.md', answers);
        }
        catch(error) {
            console.log(error);
        }
    });
}

// Function call to initialize app
init();
