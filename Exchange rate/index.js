const currrencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currrencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
    const currency_one = currrencyEl_one.value;
    const currency_two = currrencyEl_two.value;
    fetch("https://open.exchangerate-api.com/v6/latest")
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const rate = data.rates[currency_two] / data.rates[currency_one];
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
        });
}


// Event Listener 
currrencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currrencyEl_two.addEventListener('change', calculate)
amountEl_two.addEventListener('input', calculate);


swap.addEventListener('click', () => {
    const temp = currrencyEl_one.value;
    currrencyEl_one.value = currrencyEl_two.value;
    currrencyEl_two.value = temp;
    calculate();
});

calculate();



