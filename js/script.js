document.addEventListener('keydown', function(e) {
    if(e.keyCode == 32) {
        document.querySelector('.character').classList.add('jump');
        setTimeout(function() {
            document.querySelector('.character').classList.remove('jump');
        }, 500);
    }
});

loop = setInterval(function () {
    pipePosition = document.querySelector('.obstacle').offsetLeft;
    characterPosition = window.getComputedStyle(
        document.querySelector('.character')).bottom.replace('px', '');

    if (pipePosition < 120 && pipePosition > 10 && characterPosition < 80) {
        document.querySelector('.obstacle').style.animation = 'none';
        document.querySelector('.obstacle').style.left = '${pipePosition}px';
    }
}, 10);