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
function generateMarkdown(answers) {
  return `#${answers.title}<br>

  ## Table of Contents <br>
  
  ## Installation instructions<br>
  ${answers.project_description}<br>
  
  ## Usage Information <br>
  ${answers.usage}<br>
  //if yes, need to look into including screenshot here

  ## License <br>
  ${answers.license}<br>

  ## Contributors <br>
  The contributors to this project were ${answers.contributing}<br>

  ## Test Instructions <br>
  ${answers.tests} <br>

  ## Questions <br>
  If you have any questions about this application please direct them to ${answers.questions}`

;
}

module.exports = generateMarkdown;
