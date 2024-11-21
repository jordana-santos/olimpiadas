<?php
$host = 'localhost';
$username = 'root';
$password = '';
$banco = 'Olimpiadas';

try {
    // Conexão inicial apenas com o servidor
    $conn = new PDO("mysql:host=$host", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Criar o banco de dados se não existir
    $sqlCriarBanco = "CREATE DATABASE IF NOT EXISTS $banco";
    $conn->exec($sqlCriarBanco);
    echo "Banco de dados '$banco' criado ou já existente.<br>";

    // Selecionar o banco de dados
    $conn->exec("USE $banco");

    // Criar tabela
    $sqlCriarTabela = "
        CREATE TABLE IF NOT EXISTS contatos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            assunto VARCHAR(150),
            mensagem TEXT NOT NULL,
            enviado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    ";
    $conn->exec($sqlCriarTabela);
    echo "Tabela 'contatos' criada ou já existente.<br>";

} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}
?>
