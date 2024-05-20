// signup.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('cadastroForm');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('inome').value;
        const email = document.getElementById('iemail').value;
        const senha = document.getElementById('isenha').value;
        const cpf = document.getElementById('icpf').value;

        const userData = {
            nome: nome,
            email: email,
            senha: senha,
            cpf: cpf
        };

        // Simulando salvamento dos dados no localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        alert('Cadastro realizado com sucesso!');

        // Redirecionando para a página de boas-vindas
        window.location.href = "http://127.0.0.1:5500/frontend/src/pages/HOME/home.html";
    });
});
