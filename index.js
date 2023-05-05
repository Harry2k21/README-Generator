const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    inquirer.prompt([{
        type: "input",
        name: "NameOfProject",
        question: "What the Name of the Project?",
    },
    {
        type: "input",
        name: "Description",
        question: "Give a Brief Description of the project.",
    },
    {
        type: "input",
        name: "Installation",
        question: "How do I install it on my system?",
    },
    {
        type: "input",
        name: "Usage",
        question: "How can my project be used, providing a use case",
    },
    {
        type: "list",
        name: "License",
        choices: [new inquirer.Separator(), "Academic Free License v3.0", new inquirer.Separator(), "Apache license 2.0", new inquirer.Separator(), "Creative Commons license family", new inquirer.Separator(), "MIT", new inquirer.Separator(), "Mozilla Public License 2.0" ]
    },
    {
        type: "input",
        name: "Contributors",
        question: "Who contributed to this Project?",
    },
    {
        type: "input",
        name: "Tests",
        question: "What test were ran when creating this Project?",
    },
    {
        type: "input",
        name: "Email",
        question: "Please Enter Your Email",
    },
    {
        type: "input",
        name: "Github",
        question: "Please Enter Your Github username",
    },
    ]).then(function(data){
        console.log(data.NameOfProject)
        const template =
        `
# ${data.NameOfProject}

Generates Proffessional README's for unique projects
Link - https://youtu.be/IBTM0W1kQ5o
        
## Preview
        
![image](https://user-images.githubusercontent.com/88850029/236582387-2f8848a5-5bc3-4ffc-b963-6dda6488dad0.png)
![image](https://user-images.githubusercontent.com/88850029/236582502-69f9595d-2bef-4299-99a4-3c9bca49715c.png)
   

## Description 
        
${data.Description}
        
## Table of Contents
        
        
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Features](#Features)
* [Badges](#Badges)
* [Contributions](#Contributions)
* [Tests](#Tests)
* [Question](#Questions)
        
        
## Installation
        
${data.Installation}
        
## Usage
        
${data.Usage}
        
## License
        
${data.License}
        
## Badges
        
![badmath](https://img.shields.io/github/languages/top/Harry2k21/README-Generator?style=plastic)
        
## Features
        
Creates a proffessional and unique README based on the users input in the node terminal

## Contributions

${data.Contributors}

## Tests

${data.Tests}

## Questions

If you have any questions please feel free and to contact me below are my contact details
Email: ${data.Email}
Github: ${data.Github}
        `
    
        fs.writeFile("README.md", template, function(err){
            err ? console.error(err) : console.log('Successfully logged!')
        })
    })
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
