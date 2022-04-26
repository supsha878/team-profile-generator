// import files
const Employee = require("./Employee");

// defines the child intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }

        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

// export files
module.exports = Intern;