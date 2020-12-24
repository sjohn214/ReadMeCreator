const inquirer = require('inquirer')
// array of questions for user
const fs = require('fs')
const path = require('path')
const generateMarkdown = require('./utils/generatemarkdown')

const questions = [

{
    type: "input",
    name: "github",
    message: "What is your github username?"

},

{
    type: "input",
    name: "email",
    message: "What is your email address?"
},

{   type: "input",
    name: "title",
    message: "What is your project's name?"
},

{   type: "input",
    name: "description",
    message: "What is your project's description?"
},

{   type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT" , "gpl-3.0" , "unlicense" , "Apache-2.0"]
},

{   type: "input",
    name: "install",
    message: "What command should be used to install dependencies?",
    default: "npm i"

},

{   type: "input",
    name: "test",
    message: "What command should be run to test the application?",
    default: "npm test"

},

{   type: "input",
    name: "information",
    message: "What does the user need to know about using the repo?"
},

{   type: "input",
    name: "contribution",
    message: "What does the user need to know about contributing to the repo?"
},

{
    type: "input",
    name: "questions",
    message: "Do you have questions? Please provide the best contact method."
}
];

// function to write README file
function writeToFile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(inquirerresponses => {
        console.log(inquirerresponses.github);
        console.log(inquirerresponses);
        writeToFile("README.md" , generateMarkdown({...inquirerresponses}))
    })
}

// function call to initialize program
init();
