// import packages and content generator
const inquirer = require("inquirer");
const fs = require("fs");
const content = require("./src/generateHTML");

// import classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// employee array
const employees = [];

// initialize app, get responses for a manager
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter your manager's name:"
            },
            {
                type: "input",
                name: "id",
                message: "Please enter your manager's employee ID:"
            },
            {
                type: "input",
                name: "email",
                message: "Please enter your manager's email:"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Please enter your manager's office number:"
            },
            {
                type: "list",
                name: "nextEmployee",
                message: "Would you like to add another member to this team?",
                choices: ["Engineer", "Intern", "Done"]
            }
        ])
        .then((data) => {
            try {
                employees.push(new Manager(data.name, data.id, data.email, data.officeNumber));
            } catch (err) {
                console.log("Error creating Manager: " + err);
            }
            addNextEmployee(data.nextEmployee);
        });
}

// get responses for an engineer
function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter the engineer's name:"
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the engineer's employee ID:"
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the engineer's email:"
            },
            {
                type: "input",
                name: "github",
                message: "Please enter the engineer's github username:"
            },
            {
                type: "list",
                name: "nextEmployee",
                message: "Would you like to add another member to this team?",
                choices: ["Engineer", "Intern", "Done"]
            }
        ])
        .then((data) => {
            try {
                employees.push(new Engineer(data.name, data.id, data.email, data.github));
            } catch (err) {
                console.log("Error creating Engineer: " + err);
            }
            addNextEmployee(data.nextEmployee);
        });
}

// get responses for an intern
function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter the intern's name:"
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the intern's employee ID:"
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the intern's email:"
            },
            {
                type: "input",
                name: "school",
                message: "Please enter the intern's school:"
            },
            {
                type: "list",
                name: "nextEmployee",
                message: "Would you like to add another member to this team?",
                choices: ["Engineer", "Intern", "Done"]
            }
        ])
        .then((data) => {
            try {
                employees.push(new Intern(data.name, data.id, data.email, data.school));
            } catch (err) {
                console.log("Error creating Intern: " + err);
            }
            addNextEmployee(data.nextEmployee);
        });
}

// performs check based on last question to add a new engineer, intern, or end the user input
function addNextEmployee(nextEmployee) {
    if (nextEmployee === "Engineer") {
        addEngineer();
    } else if (nextEmployee === "Intern") {
        addIntern();
    } else {
        writeHTML();
    }
}

// writes HTML file using function to generate the content
function writeHTML() {
    var html = content.generateHTML(employees);
    fs.writeFile("./dist/index.html", html, (err) =>
        err ? console.log(err): console.log("success")
    );
}

// call initialize
init()