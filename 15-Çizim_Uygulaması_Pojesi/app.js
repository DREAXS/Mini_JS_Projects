// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

const canvas = document.getElementById("canvas"); // "canvas" id'sine sahip öğeyi al
const ctx = canvas.getContext("2d"); // 2D çizim bağlamını al

const increaseBtn = document.getElementById("increase"); // "increase" id'sine sahip butonu al
const decreaseBtn = document.getElementById("decrease"); // "decrease" id'sine sahip butonu al
const clearBtn = document.getElementById("clear"); // "clear" id'sine sahip butonu al
const colorInput = document.getElementById("color"); // "color" id'sine sahip girişi al
const sizeRange = document.getElementById("size"); // "size" id'sine sahip öğeyi al

let size = 8; // Çizim boyutunu başlangıçta 8 olarak ayarla
let color = "black"; // Renk başlangıçta siyah olacak şekilde ayarlandı
let x; // X koordinatı için değişken
let y; // Y koordinatı için değişken
let isPressed = false; // Fare tıklanıp tıklanmadığını takip eden değişken

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2); // Belirtilen koordinatlarda çember çiz
  ctx.fillStyle = color; // Çemberin rengini ayarla
  ctx.fill(); // Çemberi doldur
}

// drawCircle(100, 200)  Çemberi 100, 200 koordinatında çiz

function drawLine(x1, y1, x2, y2) {
  // Çizgi çizme fonksiyonu
  ctx.beginPath(); // Yeni bir yol başlat
  ctx.moveTo(x1, y1); // İlk koordinata git
  ctx.lineTo(x2, y2); // İkinci koordinata çizgi çek
  ctx.strokeStyle = color; // Çizginin rengini ayarla
  ctx.lineWidth = size * 2; // Çizgi kalınlığını boyuta göre ayarla
  ctx.stroke(); // Çizgiyi çiz
}

// drawLine(300, 300, 300, 500)  300, 300'dan 300, 500'e çizgi çek

canvas.addEventListener("mousedown", (e) => {
  // Fare tıklandığında
  isPressed = true; // Tıklama durumunu aktif yap
  x = e.offsetX; // Tıklanan X koordinatını al
  y = e.offsetY; // Tıklanan Y koordinatını al

  //console.log(isPressed, x, y)  Durum ve koordinatları konsola yazdır
});

canvas.addEventListener("mouseup", (e) => {
  // Fare bırakıldığında
  isPressed = false; // Tıklama durumunu pasif yap
  x = undefined; // X koordinatını sıfırla
  y = undefined; // Y koordinatını sıfırla

  //console.log(isPressed, x, y)  Durum ve koordinatları konsola yazdır
});

canvas.addEventListener("mousemove", (e) => {
  // Fare hareket ettiğinde
  if (isPressed) {
    // Eğer tıklama durumu aktifse
    const x2 = e.offsetX; // Yeni X koordinatını al
    const y2 = e.offsetY; // Yeni Y koordinatını al

    //console.log(x2, y2) // Yeni koordinatları konsola yazdır (açıklama için)
    drawCircle(x2, y2); // Yeni konumda çember çiz
    drawLine(x, y, x2, y2); // Önceki ve yeni konum arasında çizgi çek

    x = x2; // X koordinatını güncelle
    y = y2; // Y koordinatını güncelle
  }
});

colorInput.addEventListener("change", (e) => (color = e.target.value)); // Renk seçimi değiştiğinde rengi güncelle

increaseBtn.addEventListener("click", () => {
  // Artır butonuna tıklandığında
  size += 4; // Boyutu 4 artır

  if (size > 64) {
    // Eğer boyut 64'ten büyükse
    size = 64; // Boyutu 64'e ayarla
  }

  updateSizeOnScreen(); // Ekranda boyutu güncelle
});

function updateSizeOnScreen() {
  // Boyutu ekranda güncelleme fonksiyonu
  sizeRange.innerText = size; // Boyut değerini ekranda göster
}

decreaseBtn.addEventListener("click", () => {
  // Azalt butonuna tıklandığında
  size -= 4; // Boyutu 4 azalt

  if (size < 4) {
    // Eğer boyut 4'ten küçükse
    size = 4; // Boyutu 4'e ayarla
  }

  updateSizeOnScreen(); // Ekranda boyutu güncelle
});

clearBtn.addEventListener("click", () => {
  // Temizle butonuna tıklandığında
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Tüm canvas alanını temizle
});
