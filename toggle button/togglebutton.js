var toggle = document.getElementById('toggle');
var circle = document.getElementById('circle');
var desc = document.getElementById('desc');
var body = document.getElementsByTagName('body')[0];
var toggled = false;

function toggle_effect() {
    if(!toggled) {
        body.style.backgroundColor = 'black';
        desc.style.color = 'white';
        circle.style.marginLeft = '50px';
        
        toggled = true;
    }
    else {
        body.style.backgroundColor = 'white';
        desc.style.color = 'black';
        circle.style.marginLeft = '0';

        toggled = false;
    }
    
}

circle.addEventListener('click', toggle_effect);