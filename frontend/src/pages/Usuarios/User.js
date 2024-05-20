// Selecionando os botões
const buttons = document.querySelectorAll('a#comecarBtn');

// Adicionando evento de mouseover aos botões
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease';
    });

    // Adicionando evento de mouseout aos botões
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});
