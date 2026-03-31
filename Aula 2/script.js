const btnTheme= document.querySelector('#btn-theme-toggle');
btnTheme.addEventListener('click', () => {
     document.body.classList.toggle('dark-theme');
});

function exemploParentesco(){
    const alvo = document.querySelector('#filhofoco');

    console.log("Elemento alvo: ", alvo.textContent);
    console.log("Pai: ", alvo.parentElement);
    console.log("Irmão Anteriores: " , alvo.previousElementSibling.textContent);
    console.log("Próximo Irmão: ", alvo.nextElementSibling.textContent);
}

const btnEstiloMassa = document.querySelector('#btn-estilo-massa');
const btnResetar = document.querySelector('#btn-reset');
const itensTest = document.querySelectorAll('.item-teste');


// 1.Ação e destacar 
btnEstiloMassa.addEventListener('click', ()=> {
    itensTest.forEach(item => { 
        item.classList.add('highlight');
    });
});

// 2. Ação resetar

btnResetar.addEventListener('click', ()=> {
    itensTest.forEach(item=> {

        //Remove o CSS
        item.classList.remove('highlight');


        // Remove estilos diretos(inline)
        item.style.backgroundColor = "";
        item.style.color = "";
        item.style.transform = "";

    });
});


const listaPrincipal = document.querySelector('#lista-logs');

//Ouvinte no pai

listaPrincipal,addEventListener('click', (event) => {
    if (event.target.classList.contais('btn-delete')) {
        const itemSendoDeletado= event.target.parentElement;
        itemSendoDeletado.remove(); // Remove o nó da árvore
    }
})