const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navMainPage = document.getElementById('navMainPage');
const navAbout = document.getElementById('navAbout');
const navServices = document.getElementById('navServices');
const navPrices = document.getElementById('navPrices');
const navContact = document.getElementById('navContact');
const navItems = [navMainPage, navAbout, navServices, navPrices, navContact];

// Menü öğeleri için animasyon sınıflarını değiştiren fonksiyon
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

// Menü açma ve kapama işlemini kontrol eden fonksiyon
function toggleNav() {
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // overlay.classList.remove('overlay-slide-left');
    // overlay.classList.add('overlay-slide-right');
    navAnimation('out', 'in');
    // navMainPage.classList.remove('slide-out-1');
    // navMainPage.classList.add('slide-in-1');
  } else {
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // overlay.classList.remove('overlay-slide-right');
    // overlay.classList.add('overlay-slide-left');

    navAnimation('in', 'out');
    // navMainPage.classList.remove('slide-in-1');
    // navMainPage.classList.add('slide-out-1');
  }
}

// Menü butonuna ve menü öğelerine tıklama olaylarını ekleme işlemi
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});
