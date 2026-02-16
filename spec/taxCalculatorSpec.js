const {
  calculateTax,
  getTaxBracket,
  validateIncome,
  formatCurrency,
  getEffectiveRate,
  getTakeHome,
  isInTopBracket
} = require('../taxCalculator.js');

describe('Tax Calculator', function() {
  it('should return 10% tax for income in first bracket', function() {
    expect(calculateTax(5000)).toBe(500);
    expect(calculateTax(10000)).toBe(1000);
  });

  it('should return 15% marginal rate for income in second bracket', function() {
    expect(calculateTax(20000)).toBe(2500);
    expect(calculateTax(40000)).toBe(5500);
  });

  it('should return correct tax for income in third bracket', function() {
    expect(calculateTax(50000)).toBe(7700);
    expect(calculateTax(90000)).toBe(16600);
  });

  it('should return null for invalid income', function() {
    expect(calculateTax(-100)).toBeNull();
    expect(calculateTax('abc')).toBeNull();
    expect(calculateTax(NaN)).toBeNull();
  });

  it('should return correct tax bracket rate', function() {
    expect(getTaxBracket(5000)).toBe(0.10);
    expect(getTaxBracket(25000)).toBe(0.15);
    expect(getTaxBracket(100000)).toBe(0.28);
  });

  it('should validate income input', function() {
    expect(validateIncome(1000)).toBe(true);
    expect(validateIncome('5000')).toBe(true);
    expect(validateIncome(-1)).toBe(false);
    expect(validateIncome('invalid')).toBe(false);
  });

  it('should format currency correctly', function() {
    expect(formatCurrency(1234.5)).toMatch(/\$1,234\.50/);
    expect(formatCurrency(0)).toBe('$0.00');
  });
});
