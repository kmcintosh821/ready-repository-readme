// TODO: Include packages needed for this application
const generateMarkdown = require('generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    name: 'title',
    message: 'Provide a title for your project.',
    type: 'input'
},{
    name: 'description',
    message: 'Provide a short description explaining your motivations for this project, and what you learned.',
    type: 'input'
},{
    name: 'installation',
    message: 'Provide the steps for installing this project.',
    type: 'input'
},{
    name: 'usage',
    message: 'Provide instructions for use. (If you want to provide screenshots, those must be inserted after the initial markdown is generated.)',
    type: 'input'
},{
    name: 'credits',
    message: 'List any collaborators, third-party assets, or tutorials you used.',
    type: 'input'
},{
    name: 'license',
    message: 'What license did you use for this project? (List provided by GitHub)',
    type: 'list',
    choices: [
        'None',
        'Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense'
    ]
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
