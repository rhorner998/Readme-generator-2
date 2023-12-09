
// TODO: Define or import the generateMarkdown function
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.license} license.

  ## Questions
  GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})  
  For additional questions, contact me at: ${data.email}
  `;
}

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GNU', 'None']
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];
  // ... (other questions)


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`README file (${fileName}) has been created!`);
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const generatedMarkdown = generateMarkdown(answers);
      writeToFile('README.md', generatedMarkdown);
    });
}

// Function call to initialize app
init();