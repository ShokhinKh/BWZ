/* js */   


// Пролистывание до формы
// Выберем кнопку и форму
const button = document.querySelector('#book_button');
const form = document.querySelector('#select');
// При клике на кнопку
button.addEventListener('click', e => {
  // Прокрутим страницу к форме 
  form.scrollIntoView({ 
    block: 'center', // к ближайшей границе экрана
    behavior: 'smooth', // и плавно 
  });
});

// Пролистывание до зон

const button1 = document.querySelector('#zone_btn');
const zone = document.querySelector('.zones');

button1.addEventListener('click', e => { 
  zone.scrollIntoView({ 
    block: 'center',
    behavior: 'smooth', 
  });
});

// Пролистывание до команды

const button2 = document.querySelector('#team_btn');
const team = document.querySelector('.team');

button2.addEventListener('click', e => { 
  team.scrollIntoView({ 
    block: 'center',
    behavior: 'smooth', 
  });
});


// Пролистывание до отзывов

const button3 = document.querySelector('#reviews_btn');
const reviews = document.querySelector('.reviews');

button3.addEventListener('click', e => { 
  reviews.scrollIntoView({ 
    block: 'center',
    behavior: 'smooth', 
  });
});

// Модальное окно 

const modal = document.getElementById("modal");
const btn = document.getElementById("btn");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

btn.onclick = openModal;

window.onclick = function (e) {
  if(e.target === modal)  {
    closeModal();
  }
}
