const welcome = document.querySelector('.welcome_container');
const enterBtn = document.querySelector('.enter');
const HTML = document.querySelector('html');
const BODY = document.querySelector('body');
const loading = document.querySelector('.loading');
const bodyContainer = document.querySelector('.body_container');
const players = document.querySelectorAll('.players');

window.addEventListener('load', () => {
    enterBtn.style.transform = 'translateX(0px)';
});

let background = 0;

enterBtn.addEventListener('click', () => {
    welcome.style.display = 'none';
    loading.style.display = 'block';
    bodyContainer.style.display = 'flex';
    if (background == 0) {
        BODY.classList.add('background1')
        HTML.style.animation = 'opacity2 1s forwards'
    }
    checkIfImagesLoaded(); // Проверить, загружены ли уже изображения
});

function checkIfImagesLoaded() {
    let loadedCount = 0;
    const totalImages = players.length;

    players.forEach(player => {
        if (player.complete) {
            // Если изображение уже загружено
            loadedCount++;
        } else {
            // Если изображение еще загружается, добавить обработчик
            player.onload = () => {
                loadedCount++;
                if (loadedCount === totalImages) {
                    loading.style.display = 'none';
                    bodyContainer.classList.add('opacity2');
                }
            };
        }
    });

    // Если все изображения были загружены до регистрации обработчиков
    if (loadedCount === totalImages) {
        loading.style.display = 'none';
        bodyContainer.classList.add('opacity2');
    }
}
