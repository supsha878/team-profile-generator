// import files
const Employee = require("./Employee");

// defines the child manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        officeNumber *= 1;
        if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
            throw new Error("Expected parameter 'officeNumber' to be a non-negative number");
        }

        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

// export files
module.exports = Manager;