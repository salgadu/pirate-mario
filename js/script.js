document.addEventListener('keydown', function(e) {
    if(e.keyCode == 32) {
        document.querySelector('.character').classList.add('jump');
        setTimeout(function() {
            document.querySelector('.character').classList.remove('jump');
        }, 500);
    }
});

loop = setInterval(function () {
    obstaclePosition = document.querySelector('.obstacle').offsetLeft;
    characterPosition = +window.getComputedStyle(
        document.querySelector('.character')).bottom.replace('px', '');
       
    console.log(characterPosition);
    if (obstaclePosition <= 120 && obstaclePosition > 0 && characterPosition < 80) {
        document.querySelector('.obstacle').style.animation = 'none';
        document.querySelector('.obstacle').style.left = '${obstaclePosition}px';

        document.querySelector('.character').style.animation = 'none';
        document.querySelector('.character').style.bottom = '${characterPosition}px';
        document.querySelector('.character').src = 'images/game-over.png';
        document.querySelector('.character').style.width = '75px';
        document.querySelector('.character').style.marginLeft = '50px';

        clearInterval(loop);
    }
}, 10);