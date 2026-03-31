const titulo = document.querySelector('#titulo');

titulo.addEventListener('mouseover', () => {
    titulo.textContent = "Lara Segatello Marquez";
});

titulo.addEventListener('mouseout', () => {
    titulo.textContent = "Passe o mouse aqui";
});