const welcome = document.querySelector('.welcome_container');
const enterBtn = document.querySelector('.enter');
const HTML = document.querySelector('html');
const BODY = document.querySelector('body');
const loading = document.querySelector('.loading');
const htmlContainer = document.querySelector('.html_container');
const players = document.querySelectorAll('.players');

const header = document.querySelector('.header')
const icon = document.querySelector('.icon2')
const searchInp = document.querySelector('.search_inp')

window.addEventListener('scroll',()=>{
    if (window.scrollY > 100) {
        header.style.animation = 'pos 0.6s forwards'
        header.style.position = 'fixed'
        searchInp.style.position = 'absolute'
        icon.style.visibility = 'hidden';
    } else {
        header.style.animation = 'opacity 0.6s forwards'
        header.style.position = 'absolute'
        searchInp.style.position = 'static'
        icon.style.visibility = 'visible';
    }
})

window.addEventListener('load', () => {
    enterBtn.style.transform = 'translateX(0px)';
});

enterBtn.addEventListener('click', () => {
    welcome.style.display = 'none';
    loading.style.display = 'block';
    htmlContainer.style.display = 'flex';
    checkIfImagesLoaded(); // Проверить, загружены ли уже изображения
    BODY.style.backgroundSize = 'cover';
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
                    htmlContainer.classList.add('opacity2');
                }
            };
        }
    });
    
    // Если все изображения были загружены до регистрации обработчиков
    if (loadedCount === totalImages) {
        loading.style.display = 'none';
        htmlContainer.classList.add('opacity2');
    }
}

const btn1 = document.querySelector('.btn1').addEventListener('click',()=>{BODY.style.background = `url('https://media.licdn.com/dms/image/D4D12AQHTpd7toYLLgw/article-cover_image-shrink_720_1280/0/1682617672812?e=2147483647&v=beta&t=7iBJauAKKVCCxPBmsNICp9Un683n-qCau5ac-5SL91M')`;BODY.style.backgroundSize = 'cover';})
const btn2 = document.querySelector('.btn2').addEventListener('click',()=>{BODY.style.background = `url('https://s0.rbk.ru/v6_top_pics/media/img/0/99/347053527482990.jpeg')`;BODY.style.backgroundSize = 'cover';})
const btn3 = document.querySelector('.btn3').addEventListener('click',()=>{BODY.style.background = `url('https://kartinki.pics/pics/uploads/posts/2022-08/1660475704_1-kartinkin-net-p-ronaldu-oboi-krasivo-1.jpg`;BODY.style.backgroundSize = 'cover';})