<?php
require 'config.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $senha = filter_input(INPUT_POST, 'senha', FILTER_SANITIZE_SPECIAL_CHARS);

    if (!$nome || !$email || !$senha) {
        echo "Todos os campos são obrigatórios.";
        exit;
    }

    if (strlen($senha) < 8) {
        echo "A senha deve conter pelo menos 8 caracteres.";
        exit;
    }


    $senhaHash = password_hash($senha, PASSWORD_BCRYPT);

    try {

        $sql = "INSERT INTO tbl_usuario (nome, id_email, id_senha) VALUES (:nome, :email, :senha)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':senha', $senhaHash);
        $stmt->execute();

        echo "Cadastro realizado com sucesso!";
    } catch (PDOException $e) {

        echo "Erro ao cadastrar: " . $e->getMessage();
    }
} else {
    echo "Método de requisição inválido.";
}
?>
