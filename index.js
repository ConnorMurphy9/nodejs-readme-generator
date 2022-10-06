

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const markdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project here.',
  },

  {
    type: 'input',
    name: 'description',
    message: 'Enter the description of your project here.',
  },

  {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions for your project here.',
      
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Enter the usage instructions for your project here.',
  },

{
    type: 'list',
    name: 'license',
    message: 'Choose your license.',
    choices: ['1', '2', '3', '4']
},
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter the contributors to your project here.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter the tests for your project here.',
  },
  {
    type:'input',
    name: 'githubUsername',
    message: 'Enter your Github username here.'
  },    
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email here.'
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) =>
err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then(answers => {writeToFile("readme.md", markdown(answers))
    // Displaying the password for debug purposes only.
    // console.info('Answer:', answers.description);
    markdown(answers);
  });

}

// Function call to initialize app
init();

