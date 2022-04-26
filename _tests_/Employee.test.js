const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a 'name', 'id', and 'email' when provided valid arguments", () => {
            const name = "Kevin";
            const id = 104;
            const email = "kevin@company.com";
            const employee = new Employee(name, id, email);
            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);
        });

        it("should throw an error if no arguments are provided", () => {
            const err = new Error("Expected parameter 'name' to be a non-empty string");
            const cb = () => new Employee();
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not provided", () => {
            const name = "Kevin";
            const err = new Error("Expected parameter 'id' to be a non-negative number");
            const cb = () => new Employee(name);
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is not provided", () => {
            const name = "Kevin";
            const id = 104;
            const err = new Error("Expected parameter 'email' to be a non-empty string");
            const cb = () => new Employee(name, id);
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const name = true;
            const id = 104;
            const email = "kevin@company.com";
            const err = new Error("Expected parameter 'name' to be a non-empty string");
            const cb = () => new Employee(name, id, email);
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not a number", () => {
            const name = "Kevin";
            const id = "one hundred and four";
            const email = "kevin@company.com";
            const err = new Error("Expected parameter 'id' to be a non-negative number");
            const cb = () => new Employee(name, id, email);
            expect(cb).toThrowError(err);
        });
        
        it("should throw an error if 'id' is less than 0", () => {
            const name = "Kevin";
            const id = -77;
            const email = "kevin@company.com";
            const err = new Error("Expected parameter 'id' to be a non-negative number");
            const cb = () => new Employee(name, id, email);
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is not a string", () => {
            const name = "Kevin";
            const id = 104;
            const email = 56;
            const err = new Error("Expected parameter 'email' to be a non-empty string");
            const cb = () => new Employee(name, id, email);
            expect(cb).toThrowError(err);
        });
    });

    describe("Getters", () => {
        it("should return the employee name when getName() is called", () => {
            const employee = new Employee("Rebecca", 17, "rebecca@company.com");
            expect(employee.getName()).toEqual("Rebecca");
        });
        it("should return the employee id when getId() is called", () => {
            const employee = new Employee("Rebecca", 17, "rebecca@company.com");
            expect(employee.getId()).toEqual(17);
        });
        it("should return the employee email when getEmail() is called", () => {
            const employee = new Employee("Rebecca", 17, "rebecca@company.com");
            expect(employee.getEmail()).toEqual("rebecca@company.com");
        });
        it("should return 'Employee' when getRole() is called", () => {
            const employee = new Employee("Rebecca", 17, "rebecca@company.com");
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});