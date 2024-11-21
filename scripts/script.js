document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});

function exibirFormulario(){
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    document.getElementById('resultadoNome').innerText = `Nome: ${nome}`;
    document.getElementById('resultadoEmail').innerText = `Email: ${email}`;
    document.getElementById('resultadoSubject').innerText = `Assunto: ${subject}`;
    document.getElementById('resultadoMessage').innerText = `Mensagem: ${message}`;

    document.getElementById('reservado').style.display = 'block';
};