const button_reset = document.getElementById("btn_reset");

button_reset.onmousedown = function(){
    button_reset.style.transform = 'scale(0.95)';
}

button_reset.onmouseup = function() {
    button_reset.style.transform = 'scale(1)';
}

button_reset.onmouseleave = function() {
    button_reset.style.transform = 'scale(1)';
}