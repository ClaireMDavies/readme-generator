// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "none") {
        return `- [Installation instructions](##Installation-instructions)
                - [Usage Information](##Usage-Information)
                - [Contributors](##Contributors)
                - [Test Instructions](##Test-instructions)
                - [Questions](##Questions)`
    }
    else {
        return `- [Installation instructions](##Installation-instructions)
                - [Usage Information](##Usage-Information)
                - [License](##License)
                - [Contributors](##Contributors)
                - [Test Instructions](##Test-instructions)
                - [Questions](##Questions)`
    }


}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => 
`# ${answers.title}

## Table of Contents
${renderLicenseLink(answers.license)}
  
## Installation instructions
${answers.project_description}
  
## Usage Information
${answers.usage}
//if yes, need to look into including screenshot here

## License
${answers.license}

## Contributors
The contributors to this project were [${answers.contributing}](github.com/${answers.contributing})

## Test Instructions
${answers.tests}

## Questions
If you have any questions about this application please direct them to [${answers.questions}](${answers.questions})`;

module.exports = generateMarkdown;
