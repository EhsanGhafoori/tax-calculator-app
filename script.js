(function() {
  var form = document.getElementById('taxForm');
  var resultEl = document.getElementById('result');
  if (!form || !resultEl) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var input = document.getElementById('income');
    var income = parseFloat(input.value, 10);
    resultEl.classList.remove('show', 'error');
    if (!validateIncome(income)) {
      resultEl.textContent = 'Please enter a valid non-negative number.';
      resultEl.classList.add('show', 'error');
      return;
    }
    var tax = calculateTax(income);
    var takeHome = getTakeHome(income, tax);
    resultEl.innerHTML = 'Tax: ' + formatCurrency(tax) + '<br>Take-home: ' + formatCurrency(takeHome);
    resultEl.classList.add('show');
  });
})();
