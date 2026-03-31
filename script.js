    function atualizarStatus() {
        const texto = document.getElementById('status-texto');
        const img = document.getElementById('status-img');
        texto.textContent = "Concluído!";
        texto.style.color = "green";
        img.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/190/190411.png'); // Ícone d
    }
    function alternarTema() {
        document.body.classList.toggle('dark-theme');
        const btn = document.getElementById('btn-tema');
        btn.textContent = document.body.classList.contains('dark-theme') ? "Ativar Modo Claro" : "Ativar Modo Escuro";

        let selecaoPorId = document.getElementById('input-tarefa');
        console.log(selecaoPorId);
        let selecaoPorClasse = document.querySelector('.card desafio');
        console.log(selecaoPorClasse)
        let selecaoSelectorAll = document.querySelectorAll('h1');
        console.log(selecaoSelectorAll)

        const logo = document.getElementById('main-logo');
        const primeiroLink = document.querySelector('nav ul li a');
        const botoesComprar = document.querySelectorAll('.btn-compra');

        botoesComprar.forEach((botao, indice) => {
            botão.innerText = `Comprar Produto ${indice + 1}`;
        });
    }

    
