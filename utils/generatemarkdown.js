// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
# Table of contents:
    ** Description
    ** Summary
    ** Demo
    ** Special Features/Install/Usage/License/Tests/Contributions/Questions


# Project Description
* What is your project's description? **${data.description}**

# Summary
* This project applies Javascript, Nodes.js applications. With the use of Javascript and Node.js, the user has the ability submit information to supplement the creative document dynamically.

* What kind of license should your project have? ${data.license}

* What is your github username? **${data.github}**
* What is your email address? ${data.email}
 
  
* What command should be used to install dependencies? ${data.install}
* What command should be run to test the application? ${data.test}
* What does the user need to know about using the repo? ${data.information}
* What does the user need to know about contributing to the repo? ${data.contribution}
* Do you have questions? Please provide the best contact method. ${data.questions}
  `;
  }
  
  module.exports = generateMarkdown;
  