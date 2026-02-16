/**
 * Tax Calculator logic - testable with Jasmine
 * Supports both browser (window) and Node (module.exports)
 */
function calculateTax(income) {
  if (typeof income !== 'number' || income < 0 || isNaN(income)) {
    return null;
  }
  if (income <= 10000) return income * 0.10;
  if (income <= 40000) return 1000 + (income - 10000) * 0.15;
  if (income <= 90000) return 5500 + (income - 40000) * 0.22;
  return 16600 + (income - 90000) * 0.28;
}

function getTaxBracket(income) {
  if (typeof income !== 'number' || income < 0) return null;
  if (income <= 10000) return 0.10;
  if (income <= 40000) return 0.15;
  if (income <= 90000) return 0.22;
  return 0.28;
}

function validateIncome(value) {
  const num = parseFloat(value);
  return typeof num === 'number' && !isNaN(num) && num >= 0;
}

function formatCurrency(amount) {
  if (amount == null || isNaN(amount)) return '';
  return '$' + Number(amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getEffectiveRate(income, tax) {
  if (!income || income <= 0 || tax == null) return null;
  return (tax / income) * 100;
}

function getTakeHome(income, tax) {
  if (income == null || tax == null) return null;
  return Math.max(0, income - tax);
}

function isInTopBracket(income) {
  return typeof income === 'number' && income > 90000;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculateTax,
    getTaxBracket,
    validateIncome,
    formatCurrency,
    getEffectiveRate,
    getTakeHome,
    isInTopBracket
  };
}
