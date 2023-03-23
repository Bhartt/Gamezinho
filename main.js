const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
        
    }, 500);
}

const loop = setInterval(() => {

    const pipePosiotion = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosiotion < 120 && pipePosiotion > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosiotion}px`
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`
        

        mario.src = './assets/over.webp';
        mario.style.width = '75px';
        mario.style.marginLeft = '70px'

        clearInterval(loop);
    }
}, 10)

document.addEventListener('keydown', jump)