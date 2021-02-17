// TODO: Include packages needed for this application
const inquirer = require('inquirer');


inquirer
  .prompt([

    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });


// An array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is the title of your project?",
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
        name: "usage-screenshots",
        type: "confirm",
        message: "Do you have any screenshots you want to include?  If yes, please upload them into an assets file in your project",
    },
    {
        name: "license",
        type: "checkbox",
        message: "What license is used for this project?",
        choices: ["MIT", ""]
    },
    {
        name: "contributing",
        type: "input",
        message: "What are the Github profiles of the contributors to this project? \n If there are multiple contributors please separate the answers with a comma",
    },
    {
        name: "tests",
        type: "input",
        message: "What is the title of your project?",
    },
    {
        name: "questions",
        type: "input",
        message: "Write any tests you have for your app here",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
