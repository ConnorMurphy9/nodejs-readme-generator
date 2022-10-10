// TODO: Create a function that returns a license badge based on which license is passed in
const license1 = 
"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
const license2 = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
const license3 = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]";
const license4 = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]";
console.log(license1);

// If there is no license, return an empty string
function renderLicenseBadge(license) {
console.log(license);
  if (license == 1) {
    return license1
  }
  else if (license == 2) {
    return license2
  }
  else if (license == 3) {
    return license3
  }
  else if (license == 4) {
    return license4
  }
  else {
    return ""
  }
}
console.log(renderLicenseBadge);
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 1) {
    return "https://opensource.org/licenses/MIT"
    
  }
  else if (license == 2) {
    return "(https://opensource.org/licenses/MPL-2.0)"
  }
  else if (license == 3) {
    return "https://opensource.org/licenses/EPL-1.0"
  }
  else if (license == 4) {
    return "(https://opensource.org/licenses/Artistic-2.0)"
  }
  else {
    return ""
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection() {
``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);
  renderLicenseSection(answers.license);
return`# ${answers.title}
  
${renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${renderLicenseLink(answers.license)}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

${answers.githubUsername}

${answers.email}

##Questions


`;

// inquirer
// .prompt(questions)
// .then((answers) => {
//     fs.writeFile("README.md", markdown.generateMarkdown(answers), (err) =>
//     err ? console.error(err) : console.log('Success!'))}
    
  // .then((answers) => {
  //   fs.writeFile("README.md", markdown.generateMarkdown(answers), (err) =>
  //   err ? console.error(err) : console.log('Success!'))
  //   }
  // writeToFile("README.md", markdown.generateMarkdown(answers))
    // console.log(answers);
}

module.exports = {generateMarkdown}
