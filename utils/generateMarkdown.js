// function that returns a license badge based on which license is passed in
function renderLicenseBadge(answers) {

    switch (answers.license) {
     
        case  "MIT":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

        case "Apache license 2.0":
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

        case "GNU GPL v3":
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

        case "GNU GPL v2":
            return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0)`;

        case "GNU Affero GPL v3":
            return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;

        case "BSD 2-Clause":
            return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;

        case "BSD 3-clause":
            return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;

        case "Boost Software v1":
            return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;

        case "Mozilla Public License 2":
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    
        default:
            return "";
    }
} 

/*
function renderLicenseBadge(answers) {
    if (answers.license === "none") {
        return ``
    }
    else if (answers.license === "MIT"){
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if (answers.license === "Apache license 2.0"){
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    else if (answers.license === "GNU GPL v3"){
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } 
    else if (answers.license === "GNU GPL v2"){
        return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0)`
    }  
    else if (answers.license === "GNU Affero GPL v3"){
        return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    }
    else if (answers.license === "BSD 2-Clause"){
        return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    }
    else if (answers.license === "BSD 3-clause"){
        return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }
    else if (answers.license === "Boost Software v1"){
        return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    }
    else if (answers.license === "Mozilla Public License 2"){
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
}   
*/

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
//function to write additional contributors into readme
function writeExtraContributors(answers) {
    if (answers.contributingNumber > 1){
    return `\n- [${answers.additionalContributors}](https://github.com/${answers.additionalContributors})`
    }
    else {
        return ``
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

${renderLicenseSection(answers)}

## Contributors
The contributors to this project were: \n- [${answers.contributing}](https://github.com/${answers.contributing})
${writeExtraContributors(answers)}

## Test Instructions
${answers.tests}

## Questions
If you have any questions about this application please contact me by [email](${answers.questions}), or at [Github](https://github.com/${answers.contributing}) `;

module.exports = generateMarkdown;
