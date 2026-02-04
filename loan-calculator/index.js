function calculatePayment() {

    const principal = document.getElementById('principal-amount').value;
    const interestRate = document.getElementById('interest-rate').value;
    const months = document.getElementById('months').value;

    const interest = (principal * interestRate * 0.01 ) / months;
    const monthlyPayment = (( principal / months ) + interest).toFixed(2);

    document.getElementById('monthly-payment').innerHTML = `Monthly Payment : ${monthlyPayment}`;
}
calculatePayment()