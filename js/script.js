// Активная стрелка
const filter = document.querySelectorAll('.arrow');
const filterText = document.querySelectorAll('.filter__text');

function activeFilter(){
    filter.forEach((item) => 
        item.classList.remove('arrow-rotate'));
        this.classList.add('arrow-rotate');
}
filter.forEach((item) => 
    item.addEventListener('click', activeFilter));