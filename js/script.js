// Активная стрелка
const filter = document.querySelectorAll('.filter__text');

// console.log(filter);
filter.forEach(item => {
    item.addEventListener('click', event => {
        item.querySelector('.arrow').classList.toggle('arrow-rotate');
    });
});