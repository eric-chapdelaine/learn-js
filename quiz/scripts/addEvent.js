window.onload = function() {
    let x = document.getElementById('myBtn');
    x.addEventListener('mouseover', () => {return myFunction('Moused over!')});
    x.addEventListener('click', () => {return mySecondFunction('Clicked!')});
    x.addEventListener('mouseout', () => {return myThirdFunction('Moused out!')});
}

function myFunction(msg) {
    document.getElementById('demo').textContent = msg;
}

function mySecondFunction(msg) {
    document.getElementById('demo').textContent = msg;
}

function myThirdFunction(msg) {
    document.getElementById('demo').textContent = msg;
}
