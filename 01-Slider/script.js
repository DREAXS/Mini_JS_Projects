const nextIcon = document.querySelector('.next');
const prevIcon = document.querySelector('.prev');
const image = document.querySelector('.image');
const imgs = document.querySelectorAll('img');

let currentImg = 1;
let timeout;

prevIcon.addEventListener('click', () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

nextIcon.addEventListener('click', () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

function updateImg() {
  //Sona geldiğinde başa döndürme işlemi
  if (currentImg > imgs.length) {
    currentImg = 1;
  } 
  //En başta sola tıklandığında en sona dönmesi için
  else if (currentImg < 1) {
    currentImg = imgs.length;
  }
  image.style.transform = `translateX(-${(currentImg - 1) * 700}px)`;

  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3500);
}

updateImg();
