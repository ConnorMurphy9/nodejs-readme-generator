// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 1) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (license === 2) {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]"
  }
  else if (license === 3) {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
  else if (license === 4) {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]"
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 1) {
    return "https://opensource.org/licenses/MIT"
  }
  else if (license === 2) {
    return "(https://opensource.org/licenses/MPL-2.0)"
  }
  else if (license === 3) {
    return "https://opensource.org/licenses/EPL-1.0"
  }
  else if (license === 4) {
    return "(https://opensource.org/licenses/Artistic-2.0)"
  }
  else {
    return ""
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
renderLicenseBadge();
renderLicenseLink();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
## Description
${data.description}

## Table of Contents

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

${data.githubUsername}

${data.email}
`;
}
}
module.exports = generateMarkdown();
