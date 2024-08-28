document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const senhaFeedback = document.getElementById('senhaFeedback');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modalMessage');
    const closeModal = document.getElementById('closeModal');

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showModal('Insira um email válido!');
        return;
    }

 
    if (senha.length < 8) {
        showModal('A senha deve ter pelo menos 8 caracteres!');
        senhaFeedback.textContent = 'A senha deve ter pelo menos 8 caracteres.';
        return;
    }


    if (senha.length >= 8 && senha.length < 12) {
        senhaFeedback.textContent = 'Senha fraca';
    } else if (senha.length >= 12) {
        senhaFeedback.textContent = 'Senha forte';
    } else {
        senhaFeedback.textContent = '';
    }

    function showModal(message) {
        modalMessage.textContent = message;
        modal.style.display = 'block';
    }

    // Fechar o modal e permitir novas interações
    closeModal.onclick = function () {
        modal.style.display = 'none';
        senhaFeedback.textContent = '';
    };

 
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            senhaFeedback.textContent = '';
        }
    };


    const formData = new FormData(document.getElementById('registerForm'));

    fetch('http://localhost:8000/php/process.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        showModal('Enviado com sucesso!');
        document.getElementById('registerForm').reset(); 
        senhaFeedback.textContent = '';
    })
    .catch(error => {
        showModal('Erro ao enviar. Tente novamente.');
    });
});


document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
