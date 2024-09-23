const bars = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.sidebar');
const closingButton = document.querySelector('.fa-xmark');

bars.addEventListener('click', () => {
  // HTML elementinin sınıf listesinde belirli bir sınıfın olup olmadığını kontrol eder ve sınıfı ekler veya çıkarır.
  sidebar.classList.toggle('showSidebar');
});

closingButton.addEventListener('click', () => {
  sidebar.classList.remove('showSidebar');
});
