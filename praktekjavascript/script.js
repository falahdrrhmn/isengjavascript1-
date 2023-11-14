// merubah warna body
var buttons = document.querySelectorAll('.bagbutton button');
var body = document.body;

buttons.forEach(function (button) {
    button.addEventListener('mouseover', function () {
        var color = button.getAttribute('data-color');
        body.style.transition = 'background-color 1s ease';
        body.style.backgroundColor = color;
    });

    button.addEventListener('mouseout', function () {
        body.style.transition = 'background-color 0.3s ease';
        body.style.backgroundColor = '';
    });
});


function gambarsatu(){
    let isigambar = document.getElementById('gambartampil');
    isigambar.src = "aset belajar/01.jpg"
}

function gambardua() {
    let isigambar = document.getElementById('gambartampil');
    isigambar.src = "aset belajar/02.jpg"
}

function gambartiga() {
    let isigambar = document.getElementById('gambartampil');
    isigambar.src = "aset belajar/03.jpg"
}



