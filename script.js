window.addEventListener("keydown", function(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
});
const keys = document.querySelectorAll('.key');
function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
keys.forEach(key => key.addEventListener('transitionend', removeTransition))