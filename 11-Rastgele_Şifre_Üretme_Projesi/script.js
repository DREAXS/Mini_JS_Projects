const passwordButton = document.querySelector('.passwordButton');
const input = document.querySelector('input');
const faCopy = document.querySelector('.fa-copy');
const alertContainer = document.querySelector('.alertContainer');

passwordButton.addEventListener('click', createPassword);
faCopy.addEventListener('click', copyPassword);

function createPassword() {
  const passwordLength = 15;
  const characters ='0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_-+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let password = '';
  for (let index = 0; index < passwordLength; index++) 
    {
    // Math.random 0 ile 1 arasında değer döndürür bunu tam sayı yapabilmek için Math.floor ile yuvarlama işlemi yapıldı
    const randomNum = Math.floor(Math.random() * characters.length);
    password += characters[randomNum];
    }
  input.value = password;
  alertContainer.textContent = password + ' kopyalandı!';
  //   console.log(password);
}

function copyPassword() {
  if (input.value) 
    {
    input.select();
    // kopyalama işlemi
    navigator.clipboard.writeText(input.value);
    alertContainer.classList.remove('active');
    setTimeout(() => {
      alertContainer.classList.add('active');
    }, 2000);
    }
}
