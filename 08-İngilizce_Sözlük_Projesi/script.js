const wordInput = document.getElementById('word');
const button = document.querySelector('button');
const translatedDiv = document.getElementById('translatedDiv');

const title = document.getElementById('title');
const meaning = document.getElementById('meaning');
const audio = document.getElementById('audio');

async function fetchApi() {
  translatedDiv.style.display = 'none';
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`;
  // await kullanmamızın nedeni data dönene kadar bekletmek yoksa hata alınabilir
  // ayrıca await kullanabilmemiz için fonksiyonun başına async eklenmeli
  // const result = await fetch(url).then((res) => res.json());
  const result = await fetch(url).then((res) => {
    return res.json();
  });
  console.log(result);
  // dönen api yanıtında hata varsa title dönüyor hata varsa hiçbir işlem yapmayacak
  if (result.title) {
  } 
  else {
    translatedDiv.style.display = 'block';
    title.textContent = result[0].word;
    meaning.textContent = result[0].meanings[0].definitions[0].definition;
    audio.src = result[0].phonetics[0].audio;
  }
}

button.addEventListener('click', fetchApi);
