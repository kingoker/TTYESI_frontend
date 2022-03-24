// Активная стрелка
const filter = document.querySelectorAll('.filter__text');

filter.forEach(item => {
    item.addEventListener('click', event => {
        item.querySelector('.arrow').classList.toggle('arrow-rotate');
    });
});