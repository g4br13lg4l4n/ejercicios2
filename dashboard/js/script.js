
//document.getElementById('btn').onsubmit

function send() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;

    document.getElementById('respuesta').innerHTML = email + ' ' + name;
}

function testAge() {
    const age = document.getElementById('edad').value;

    if (age >= 18) {
        document.getElementById('respuestaAge').innerHTML = '<p class="text-bold">Es mayor </p>'
    } else {
        document.getElementById('respuestaAge').innerHTML = '<p class="text-bold">Es menor</p>'
    }
}

