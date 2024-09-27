const remainingDiv = document.getElementById('remainingDiv');
const timeDiv = document.getElementById('timeDiv');
const completeDiv = document.getElementById('complete');

const remainingForm = document.getElementById('remainingForm');
const dateInput = document.getElementById('date-picker');
const timeSpans = document.querySelectorAll('span');
const resetButton = document.getElementById('resetButton');
const completeButton = document.getElementById('completeButton');

let chosenDate = '';
let currentDateValue = new Date().getTime();

let currentTimeInterval;
let localStorageTime;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Tarih seçici için minimum tarih olarak bugünü ayarla
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

function updateDOM() {
  currentTimeInterval = setInterval(() => { // Her saniye çalışacak bir interval başlat
    const now = new Date().getTime();
    const betweenDate = currentDateValue - now;
    //   console.log(betweenDate);
    const days = Math.floor(betweenDate / day);
    const hours = Math.floor((betweenDate % day) / hour);
    const minutes = Math.floor((betweenDate % hour) / minute);
    const seconds = Math.floor((betweenDate % minute) / second);

    // console.log(days, hours, minutes, seconds);
    console.log(betweenDate);
    remainingDiv.hidden = true;

    // Eğer tarih geçmişse tamamlanmış div'ini göster ve intervali durdur
    if (betweenDate < 0) {
      timeDiv.hidden = true;
      clearInterval(currentTimeInterval);
      completeDiv.hidden = false;
    } 
    // Tarih gelecekteyse, süreyi güncelle ve görünür yap
    else {
      timeDiv.hidden = false;
      timeSpans[0].textContent = `${days}`;
      timeSpans[1].textContent = `${hours}`;
      timeSpans[2].textContent = `${minutes}`;
      timeSpans[3].textContent = `${seconds}`;
    }
  }, 1000);
}

function calculateTime(e) {
  // Formun varsayılan davranışını engelle
  e.preventDefault();
  chosenDate = remainingForm.date.value;
  //   console.log(new Date(chosenDate).getTime());
  //   console.log(new Date().getTime());

  localStorageTime = {
    date: chosenDate,
  };
  // Tarihi localStorage'a kaydet
  localStorage.setItem('time', JSON.stringify(localStorageTime));
  if (chosenDate == '') {
    alert('Lütfen tarih seçiniz');
  } else {
    currentDateValue = new Date(chosenDate).getTime();
    updateDOM();
  }
}
function reset() {
  timeDiv.hidden = true;
  completeDiv.hidden = true;
  remainingDiv.hidden = false;
  clearInterval(currentTimeInterval);
  localStorage.removeItem('time');
}

// Sayfa yüklendiğinde localStorage'daki zamanı yenileme fonksiyonu
function refleshTime() {
  if (localStorage.getItem('time')) {
    remainingDiv.hidden = true;
    localStorageTime = JSON.parse(localStorage.getItem('time'));
    chosenDate = localStorageTime.date;
    currentDateValue = new Date(chosenDate).getTime();

    updateDOM();
  }
}

remainingForm.addEventListener('submit', calculateTime);
resetButton.addEventListener('click', reset);
completeButton.addEventListener('click', reset);
refleshTime();
