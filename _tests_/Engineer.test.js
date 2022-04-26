const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with the Employee properties and a 'github' if provided valid arguments", () => {
            const github = "username123";
            const engineer = new Engineer("Robert", 82, "robert@company.com", github);
            expect(engineer.github).toEqual(github);
        });

        it("should throw an error if 'github' is not provided", () => {
            const cb = () => new Engineer("Robert", 82, "robert@company.com");
            const err = new Error("Expected parameter 'github' to be a non-empty string");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'github' is not a string", () => {
            const github = 57;
            const cb = () => new Engineer("Robert", 82, "robert@company.com", github);
            const err = new Error("Expected parameter 'github' to be a non-empty string");
            expect(cb).toThrowError(err);
        });
    });

    describe("Getters", () => {
        it("should return the engineer github when getGithub() is called", () => {
            const engineer = new Engineer("Phoebe", 8, "phoebe@company.com", "phoebe65");
            expect(engineer.getGithub()).toEqual("phoebe65");
        });

        it("should return 'Engineer' when getRole() is called", () => {
            const engineer = new Engineer("Phoebe", 8, "phoebe@company.com", "phoebe65");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});