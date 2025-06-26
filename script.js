document.querySelector('.convert-btn').addEventListener('click', () => {
  const amount = document.querySelector('.amount-input').value;
  const fromCurrency = document.getElementById('from-currency').value;
  const toCurrency = document.getElementById('to-currency').value;
  const resultBox = document.getElementById('result');

  if (!amount || amount <= 0) {
    resultBox.textContent = "Please enter a valid amount.";
    return;
  }

  access_key = 'c3c62a8938362ff61135c477b8ff4c07'

  // Show loading state
  resultBox.textContent = "Converting...";

  // Build API URL
  const apiUrl ='https://api.exchangerate.host/' + 'convert' + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount;

  // Make the API call
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const convertedAmount = data.result.toFixed(2);
        resultBox.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
      } else {
        resultBox.textContent = "Conversion failed. Please try again.";
      }
    })
    .catch(error => {
      resultBox.textContent = "Error fetching exchange rate.";
      console.error(error);
    });
});
