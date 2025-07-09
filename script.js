// Espera o DOM (Document Object Model) ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões com a classe 'toggle-sinopse'
    const botoesSinopse = document.querySelectorAll('.toggle-sinopse');

    // Itera sobre cada botão encontrado
    botoesSinopse.forEach(botao => {
        // Adiciona um "ouvinte de evento" de clique para cada botão
        botao.addEventListener('click', function() {
            // Encontra o elemento pai do botão (que é o <li>)
            const listItem = this.closest('li');
            
            // Dentro do <li>, encontra a div com a classe 'sinopse-completa'
            const sinopseCompleta = listItem.querySelector('.sinopse');

            // Verifica o estilo atual da sinopse completa
            if (sinopseCompleta.style.display === 'none' || sinopseCompleta.style.display === '') {
                // Se estiver escondida (ou não definida), mostra
                sinopseCompleta.style.display = 'block';
                // E muda o texto do botão
                this.textContent = 'Ver Menos';
            } else {
                // Se estiver visível, esconde
                sinopseCompleta.style.display = 'none';
                // E muda o texto do botão de volta
                this.textContent = 'Ver Sinopse';
            }
        });
    });
});