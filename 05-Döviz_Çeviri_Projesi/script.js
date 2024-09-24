const currencyFirst = document.getElementById('First');
const currencySecond = document.getElementById('Second');
const count = document.getElementById('count');
const equal = document.getElementById('equal');
const exchangeRate = document.getElementById('exchangeRate');

updateCoin();

function updateCoin() {
  fetch(
    `https://v6.exchangerate-api.com/v6/d3113a57ff65a0b688717acc/latest/${currencyFirst.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const rate = data.conversion_rates[currencySecond.value];

      exchangeRate.textContent = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`;

      equal.textContent = (count.value * rate).toFixed(3);
    });
}
// Kullanıcı para birimini değiştirdiğinde veya miktarı girdiğinde güncelleme fonksiyonunu çağırıyoruz
currencyFirst.addEventListener('change', updateCoin);
currencySecond.addEventListener('change', updateCoin);
count.addEventListener('input', updateCoin);
