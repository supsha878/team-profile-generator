// import classes
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// returns complete HTML content
function generateHTML(employees) {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Team Profile</title>
            <link rel="stylesheet" type="text/css" href="./normalize.css" />
            <link rel="stylesheet" type="text/css" href="./style.css" />
        </head>
        <body>
    
            <header class="banner">
                <h1>My Team</h1>
            </header>
    
            <main>

                <!-- Employee cards -->
                ${generateCards(employees)}

            </main>
    
        </body>
    </html>`;
}

// creates employee cards based with information displayed depending on employee role
function generateCards(employees) {
    let cardsHTML = ``;
    for (let i = 0; i < employees.length; i++) {
        const position = employees[i].getRole();
        let emoji;
        let thirdItem;
        if (position === "Manager") {
            emoji = `&#128083;`
            thirdItem = `Office Number: ${employees[i].getOfficeNumber()}`
        } else if (position === "Engineer") {
            emoji = `&#9881;`
            thirdItem = `GitHub: <a href="https://github.com/${employees[i].getGithub()}">${employees[i].getGithub()}</a>`
        } else {
            emoji = `&#127891;`
            thirdItem = `School: ${employees[i].getSchool()}`
        }

        cardsHTML += `<div class="card">
            <header>
                <h2>${employees[i].getName()}</h2>
                <h3>${emoji} ${position}</h3>
            </header>
            <ul>
                <li>ID: ${employees[i].getId()}</li>
                <li>Email: <a href="mailto: ${employees[i].getEmail()}">${employees[i].getEmail()}</a></li>
                <li>${thirdItem}</li>
            </ul>
        </div>
        `
    }
    return cardsHTML;
}

// export function
module.exports = { generateHTML };