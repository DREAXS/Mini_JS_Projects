const counter = document.querySelector('.counter');
const loadingBarFront = document.querySelector('.loadingBarFront');

let number = 0;

updateNumber();

function updateNumber() {
  counter.textContent = number + '%';
  loadingBarFront.style.width = number + '%';
  number++;

  if (number < 101) {
    //Kaç ms de bir çağrılacak
    setTimeout(updateNumber, 35);
  }
}
