document.getElementById('formContact').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === 'success') {
            alert("Mensagem enviada com sucesso!");
            window.location.href = 'contato.html';
        } else {
            alert("Erro ao enviar: " + data);
        }
    })
    .catch(error => {
        alert("Ocorreu um erro ao processar a solicitação.");
        console.error(error);
    });
});