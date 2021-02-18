// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => 
`# ${answers.title}

## Table of Contents>
  
## Installation instructions
${answers.project_description}
  
## Usage Information>
${answers.usage}
//if yes, need to look into including screenshot here

## License>
${answers.license}

## Contributors>
The contributors to this project were ${answers.contributing}

## Test Instructions
${answers.tests}

## Questions
If you have any questions about this application please direct them to ${answers.questions}`;

module.exports = generateMarkdown;
