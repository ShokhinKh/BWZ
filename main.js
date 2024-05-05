/* js */      
// Выберем кнопку и форму
const button = document.querySelector('.button');
const form = document.querySelector('.select');
// При клике на кнопку
button.addEventListener('click', e => {
  // Прокрутим страницу к форме 
  form.scrollIntoView({ 
    block: 'nearest', // к ближайшей границе экрана
    behavior: 'smooth', // и плавно 
  });
});



const button1 = document.querySelector('.nav__link1');
const form1 = document.querySelector('.zones');
button1.addEventListener('click', e => { 
  form1.scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth',
  });
});

const button2 = document.querySelector('.nav__link2');
const form2 = document.querySelector('.team');
button2.addEventListener('click', e => { 
  form2.scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth',
  });
});

const button3 = document.querySelector('.nav__link3');
const form3 = document.querySelector('.reviews');
button3.addEventListener('click', e => { 
  form3.scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth',
  });
});



const button4 = document.querySelector('.button-zone');
const form4 = document.querySelector('.input');
button4.addEventListener('click', e => {
  form4.scrollIntoView({ 
    block: 'nearest', 
    behavior: 'smooth', 
  });
});