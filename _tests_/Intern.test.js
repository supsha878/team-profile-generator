const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with the Employee properties and a 'school' if provided valid arguments", () => {
            const school = "University of Iowa";
            const intern = new Intern("Cassidy", 176, "cassidy@company.com", school);
            expect(intern.school).toEqual(school);
        });

        it("should throw an error if 'school' is not provided", () => {
            const cb = () => new Intern("Cassidy", 176, "cassidy@company.com");
            const err = new Error("Expected parameter 'school' to be a non-empty string");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'school' is not a string", () => {
            const school = false;
            const cb = () => new Intern("Cassidy", 176, "cassidy@company.com", school);
            const err = new Error("Expected parameter 'school' to be a non-empty string");
            expect(cb).toThrowError(err);
        });
    });

    describe("Getters", () => {
        it("should return the intern school when getSchool() is called", () => {
            const intern = new Intern("Brandon", 149, "brandon@company.com", "University of Georgia");
            expect(intern.getSchool()).toEqual("University of Georgia");
        });

        it("should return 'Intern' when getRole() is called", () => {
            const intern = new Intern("Brandon", 149, "brandon@company.com", "University of Georgia");
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});