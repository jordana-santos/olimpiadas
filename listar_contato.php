<?php
require 'conexao.php';

try {
    $sql = "SELECT nome, email, assunto, mensagem, enviado_em FROM contatos";
    $stmt = $conn->query($sql);
    $contatos = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Erro ao consultar os dados: " . $e->getMessage());
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contatos Enviados</title>
</head>
<body>
    <h1>Mensagens Recebidas</h1>
    <table border="1">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Assunto</th>
                <th>Mensagem</th>
                <th>Enviado em</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($contatos as $contato): ?>
                <tr>
                    <td><?= htmlspecialchars($contato['nome']) ?></td>
                    <td><?= htmlspecialchars($contato['email']) ?></td>
                    <td><?= htmlspecialchars($contato['assunto']) ?></td>
                    <td><?= htmlspecialchars($contato['mensagem']) ?></td>
                    <td><?= $contato['enviado_em'] ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>
