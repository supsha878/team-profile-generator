const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with the Employee properties and an 'officeNumber' if provided valid arguments", () => {
            const officeNumber = 4;
            const manager = new Manager("Sarah", 31, "sarah@company.com", officeNumber);
            expect(manager.officeNumber).toEqual(officeNumber);
        });

        it("should throw an error if 'officeNumber' is not provided", () => {
            const cb = () => new Manager("Sarah", 31, "sarah@company.com");
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'officeNumber' is not a number", () => {
            const officeNumber = "four";
            const cb = () => new Manager("Sarah", 31, "sarah@company.com", officeNumber);
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'officeNumber' is less than 0", () => {
            const officeNumber = -13;
            const cb = () => new Manager("Sarah", 31, "sarah@company.com", officeNumber);
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");
            expect(cb).toThrowError(err);
        });
    });

    describe("Getters", () => {
        it("should return 'Manager' when getRole() is called", () => {
            const manager = new Manager("Greg", 55, "greg@company.com", 6);
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});