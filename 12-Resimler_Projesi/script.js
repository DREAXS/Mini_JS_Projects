// const count = 30;
// const apiKey = 'FV80aL2fVXpvofyotSYoSK1xCN2SIo76y9L6oYcLiFw';
// const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// const imageContainer = document.getElementById('imageDiv');
// const loader = document.getElementById('loading');

// let isDownloaded = false;
// let imagesLoaded = 0;
// let totalImages = 0;
// let imagesArray = [];

// getImages();
// async function getImages() {
//   try {
//     const response = await fetch(apiUrl);
//     imagesArray = await response.json();
//     // console.log(imagesArray);

//     displayImages();
//   } catch (error) {
//     // console.log(error);
//   }
// }

// function displayImages() {
//   imagesLoaded = 0;
//   totalImages = imagesArray.length;
//   imagesArray.forEach((image) => {
//     // Yeni bir <a> öğesi oluştur
//     const item = document.createElement('a');
//     setAttributes(item, { href: image.urls.regular });
//      // Yeni bir <img> öğesi oluştur
//     const img = document.createElement('img');
//     setAttributes(img, {
//       src: image.urls.regular,
//       alt: image.alt_description,
//     });
//     img.addEventListener('load', imageLoaded);
//     item.appendChild(img);
//     imageContainer.appendChild(item);
//   });
// }

// function imageLoaded() {
//   imagesLoaded++;
//   if (imagesLoaded === totalImages) {
//     isDownloaded = true;
//     loader.hidden = true;
//   }
// }
// function setAttributes(element, attributes) {
//   for (const key in attributes) {
//     element.setAttribute(key, attributes[key]);
//   }
// }

// // Sayfa kaydırıldığında yeni görselleri dinamik olarak yükleyerek sonsuz kaydırma işlevi
// window.addEventListener('scroll', () => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&isDownloaded) {
//     // console.log(window.innerHeight+" window");
//     // console.log(window.scrollY+" scrolly");
//     // console.log(document.body.offsetHeight);
//     getImages();
//   }
// });



const count = 30;
const apiKey = 'FV80aL2fVXpvofyotSYoSK1xCN2SIo76y9L6oYcLiFw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const imageContainer = document.getElementById('imageDiv');
const loader = document.getElementById('loading');

let isDownloaded = false;
let imagesLoaded = 0;
let totalImages = 0;
let imagesArray = [];

getImages();
async function getImages() {
  try {
    const response = await fetch(apiUrl);
    imagesArray = await response.json();

    displayImages();
  } catch (error) {}
}

function displayImages() {
  imagesLoaded = 0;
  totalImages = imagesArray.length;
  imagesArray.forEach((image) => {
    const item = document.createElement('a');
    setAttributes(item, { href: image.urls.regular });
    const img = document.createElement('img');
    setAttributes(img, {
      src: image.urls.regular,
      alt: image.alt_description,
    });
    img.addEventListener('load', imageLoaded);
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    isDownloaded = true;
    loader.hidden = true;
  }
}
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    isDownloaded
  ) {
    getImages();
  }
});
