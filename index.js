// Import the functions from helpers.js
const { sum, multiply, divide } = require("./helpers.js");

// Describe block for grouping related tests
describe("Helper Functions", () => {

  // Describe block for sum function
  describe("sum function", () => {
    // Test case 1: Adding positive numbers
    it("should add two positive numbers correctly", () => {
      const result = sum(3, 5);
      expect(result).toBe(8);
    });

    // Test case 2: Adding negative numbers
    it("should add two negative numbers correctly", () => {
      const result = sum(-3, -5);
      expect(result).toBe(-8);
    });

    // Test case 3: Adding a positive and a negative number
    it("should add a positive and a negative number correctly", () => {
      const result = sum(5, -3);
      expect(result).toBe(2);
    });

    // Test case 4: Adding zero
    it("should return the number when adding with zero", () => {
      const result1 = sum(0, 5);
      const result2 = sum(5, 0);
      expect(result1).toBe(5);
      expect(result2).toBe(5);
    });
  });

  // Describe block for multiply function
  describe("multiply function", () => {
    // Test case 1: Multiplying positive numbers
    it("should multiply two positive numbers correctly", () => {
      const result = multiply(3, 4);
      expect(result).toBe(12);
    });

    // Test case 2: Multiplying negative numbers
    it("should multiply two negative numbers correctly", () => {
      const result = multiply(-3, -4);
      expect(result).toBe(12);
    });

    // Test case 3: Multiplying a positive and a negative number
    it("should multiply a positive and a negative number correctly", () => {
      const result = multiply(5, -3);
      expect(result).toBe(-15);
    });

    // Test case 4: Multiplying by zero
    it("should return zero when multiplying by zero", () => {
      const result1 = multiply(5, 0);
      const result2 = multiply(0, 10);
      expect(result1).toBe(0);
      expect(result2).toBe(0);
    });
  });

  // Describe block for divide function
  describe("divide function", () => {
    // Test case 1: Dividing positive numbers
    it("should divide two positive numbers correctly", () => {
      const result = divide(10, 2);
      expect(result).toBe(5);
    });

    // Test case 2: Dividing negative numbers
    it("should divide two negative numbers correctly", () => {
      const result = divide(-10, -2);
      expect(result).toBe(5);
    });

    // Test case 3: Dividing a positive by a negative number
    it("should divide a positive number by a negative number correctly", () => {
      const result = divide(15, -3);
      expect(result).toBe(-5);
    });

    // Test case 4: Dividing by zero should throw an error
    it("should throw an error when dividing by zero", () => {
      expect(() => divide(10, 0)).toThrowError("Division by zero");
    });
  });
});
