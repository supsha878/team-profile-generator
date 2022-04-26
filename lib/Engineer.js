// import files
const Employee = require("./Employee");

// defines the child engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }

        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

// export files
module.exports = Engineer;