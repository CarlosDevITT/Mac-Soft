// SignIn.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('loginForm');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('iemail').value;
        const senha = document.getElementById('isenha').value;

        // Recuperar os dados do usuário armazenados no localStorage
        const userData = JSON.parse(localStorage.getItem('userData'));

        // Verificar se os dados fornecidos correspondem aos dados armazenados
        if (userData && userData.email === email && userData.senha === senha) {
            alert('Login realizado com sucesso!');
            // Redirecionar para a página HOME
            window.location.href = "http://127.0.0.1:5500/frontend/src/pages/HOME/home.html";
        } else {
            alert('E-mail ou senha incorretos. Tente novamente.');
        }
    });
});
