<?php
require 'conexao.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = trim($_POST['name']);
    $email = trim($_POST['email']);
    $assunto = trim($_POST['subject']);
    $mensagem = trim($_POST['message']);

    if (empty($nome) || empty($email) || empty($mensagem)) {
        echo "Erro: Todos os campos obrigatórios devem ser preenchidos.";
        exit;
    }

    try {
        $sql = "INSERT INTO contatos (nome, email, assunto, mensagem) VALUES (:nome, :email, :assunto, :mensagem)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':assunto', $assunto);
        $stmt->bindParam(':mensagem', $mensagem);
        $stmt->execute();

        echo "success";
    } catch (PDOException $e) {
        echo "Erro ao salvar os dados: " . $e->getMessage();
    }
}
?>
