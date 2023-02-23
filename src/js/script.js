const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlayElem = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlayElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


// const form = document.querySelector(".contacts__form");

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); 
//     const formData = new FormData(form);
//     const xhr = new XMLHttpRequest(); 
//     xhr.open('POST', 'mailer/smart.php'); 
//     xhr.send(formData); 

//     form.reset();

//     const modal = document.querySelector('.contacts__modal');
//     modal.style.display = 'block';
    
//     setTimeout(function () {
//         modal.style.display = 'none';
//     }, 4000);
    
// });

