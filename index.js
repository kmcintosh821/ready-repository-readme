// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    name: 'title',
    message: 'Provide a title for your project.\n',
    type: 'input'
},{
    name: 'description',
    message: 'Provide a short description explaining your motivations for this project, and what you learned.\n',
    type: 'input'
},{
    name: 'installation',
    message: 'Provide the steps for installing this project.\n',
    type: 'input'
},{
    name: 'usage',
    message: 'Provide instructions for use. (If you want to provide screenshots, those must be inserted after the initial markdown is generated.)\n',
    type: 'input'
},{
    name: 'tests',
    message: 'Provide instructions for any applicable tests.\n',
    type: 'input'
},{
    name: 'contribution',
    message: 'What guidelines do you want to give to any future contributors?\n',
    type: 'input'
},{
    name: 'credits',
    message: 'List any collaborators, third-party assets, or tutorials you used.\n',
    type: 'input'
},{
    name: 'license',
    message: 'What license did you use for this project? (List provided by GitHub)\n',
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
        'GNU Lesser General Public License v3.0',
        'Mozilla Public License 2.0',
        'The Unlicense'
    ]
},{
    name: 'username',
    message: 'Enter your GitHub username.\n',
    type: 'input'
},{
    name: 'email',
    message: 'Enter an email address for readers to contact you with.\n',
    type: 'input'
}
];

// TODO: Create a function to write README file
function writeToFile(data) {
    markdown = generateMarkdown(data)
    fs.writeFile('./destination/README.md', markdown, (err) => {
        if (err) throw err;
    })
    console.log("README successfully created!")
}

// TODO: Create a function to initialize app
async function init() {
    const data = await inquirer.prompt(questions)
    writeToFile(data)
}

// Function call to initialize app
init();
