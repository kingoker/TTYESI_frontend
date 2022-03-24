
const arrow = document.querySelectorAll('.arrow');

arrow.forEach(item =>{
    item.addEventListener('click', () => {
        item.classList.toggle('arrow-rotate');
    });
});