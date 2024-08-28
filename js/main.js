document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do envio do formulário

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const senhaFeedback = document.getElementById('senhaFeedback');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modalMessage');
    const closeModal = document.getElementById('closeModal');

    // Validação do email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showModal('Insira um email válido!');
        return;
    }

    // Validação da senha
    if (senha.length < 8) {
        showModal('A senha deve ter pelo menos 8 caracteres!');
        senhaFeedback.textContent = 'A senha deve ter pelo menos 8 caracteres.';
        return;
    }

    // Exibe a força da senha
    if (senha.length >= 8 && senha.length < 12) {
        senhaFeedback.textContent = 'Senha fraca';
    } else if (senha.length >= 12) {
        senhaFeedback.textContent = 'Senha forte';
    } else {
        senhaFeedback.textContent = '';
    }

    // Função para exibir o modal com mensagem de erro ou sucesso
    function showModal(message) {
        modalMessage.textContent = message;
        modal.style.display = 'block';
    }

    // Fechar o modal e permitir novas interações
    closeModal.onclick = function () {
        modal.style.display = 'none';
        senhaFeedback.textContent = '';
    };

    // Fechar o modal ao clicar fora da área de conteúdo
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            senhaFeedback.textContent = '';
        }
    };

    // Submissão do formulário com AJAX para exibir mensagem de sucesso
    const formData = new FormData(document.getElementById('registerForm'));

    fetch('http://localhost:8000/php/process.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        showModal('Enviado com sucesso!');
        document.getElementById('registerForm').reset(); // Reseta o formulário após o envio
        senhaFeedback.textContent = '';
    })
    .catch(error => {
        showModal('Erro ao enviar. Tente novamente.');
    });
});

// Alternar modo noturno
document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
