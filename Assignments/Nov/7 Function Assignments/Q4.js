function calculateTax() {
  // Define tax brackets and rates using closure
  const taxBrackets = [
    { min: 0, max: 10000, rate: 0.1 },
    { min: 10001, max: 30000, rate: 0.15 },
    { min: 30001, max: 60000, rate: 0.25 },
    { min: 60001, max: Infinity, rate: 0.3 },
  ];

  // Return a function that calculates tax based on income
  return function (income) {
    // Find the applicable tax bracket
    const bracket = taxBrackets.find(
      (bracket) => income >= bracket.min && income <= bracket.max
    );

    // Calculate tax
    if (bracket) {
      return income * bracket.rate;
    } else {
      return "Invalid income for tax calculation.";
    }
  };
}

// Create a tax calculator function
const calculateTaxForIncome = calculateTax();

// Test the function with various incomes
const income1 = 8000;
const income2 = 25000;
const income3 = 45000;
const income4 = 75000;

console.log(`Tax for income $${income1}: $${calculateTaxForIncome(income1)}`);
console.log(`Tax for income $${income2}: $${calculateTaxForIncome(income2)}`);
console.log(`Tax for income $${income3}: $${calculateTaxForIncome(income3)}`);
console.log(`Tax for income $${income4}: $${calculateTaxForIncome(income4)}`);
