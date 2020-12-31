// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}


## Table of contents:
* Project Description
* Summary
* License
* Demo Content
* Special Features
    *Install
    *Usage
    *License
    *Tests
    *Contributions
    *Questions
*Author(s)


# Project Description

* What is your project's description? **${data.description}**

# Summary

* This project applies Javascript, Nodes.js applications. With the use of Javascript and Node.js, the user has the ability submit information to supplement the creative document dynamically.

# License

* What kind of license should your project have? ${data.license}
![License Screenshot](./licensephoto.png)

# Demo Content

![README Screenshot](./readmephoto.png)

![Creative README gif]()

<a href="https://github.com/sjohn214/ReadMeCreator.git">README Creator GitHub Repo</a>


# Special Features

## Installation

* What command should be used to install dependencies? ${data.install}

## Usage

* How do you use this application? ${data.usage}
* What does the user need to know about using the repo? ${data.information}

# Tests

* What command should be run to test the application? ${data.test}

## Contributions

* What does the user need to know about contributing to the repo? ${data.contribution}

## Questions

* Do you have questions or would you like to comment? 
* What is your github username? **${data.github}**
* What is your email address? ${data.email}
* Please provide the best contact method. ${data.questions}
 
# Authors
* Shannondale Page (student) <a href="https://github.com/sjohn214">Git Hub Profile</a>
* Austin Bruch (Bootcamp Instructor)
* Jon Jackson (Bootcamp TA Instructor)
* Daniel Sires (Bootcamp Tutor)


  `;
  }
  
  module.exports = generateMarkdown;
  