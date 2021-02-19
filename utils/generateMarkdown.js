// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
    if (answers.license === "none") {
        return ``
    }
    else {
        return `![Github license](https://img.shields.io/github/license/${answers.contributing}/${answers.title})`
    }
}   

//function to create table of contents, with or without license link
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


// function that returns the license section of README, when a license is chosen
function renderLicenseSection(answers) {
    if (answers.license === "none") {
        return ``
    }
    else {
        return `## License
License with ${answers.license}`
    }
}

//function to generate markdown for README
const generateMarkdown = (answers) => 
`# ${answers.title} ${renderLicenseBadge(answers)}

## Description
${answers.project_description}

## Table of Contents
${renderLicenseLink(answers.license)}
  
## Installation instructions
${answers.installation}
  
## Usage Information
${answers.usage}
//if yes, need to look into including screenshot here

${renderLicenseSection(answers)}

## Contributors
The contributors to this project were [${answers.contributing}](github.com/${answers.contributing})

## Test Instructions
${answers.tests}

## Questions
If you have any questions about this application please direct them to [${answers.questions}](${answers.questions})`;

module.exports = generateMarkdown;
