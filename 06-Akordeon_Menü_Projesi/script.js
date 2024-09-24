const accordions = document.querySelectorAll('.accordion');
// console.log(accordions);

accordions.forEach((accordion) => {
  const accordionButton = accordion.querySelector('.accordionButton');
  accordionButton.addEventListener('click', () => {
    accordion.querySelector('.minusIcon').classList.toggle('active');
    accordion.querySelector('.plusIcon').classList.toggle('active');
    accordion.querySelector('.accordionText').classList.toggle('active');
  });
});
