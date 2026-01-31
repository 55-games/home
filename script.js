function searchGame() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('game-card');

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName('h2')[0];
        if (title) {
            let textValue = title.textContent || title.innerText;
            // Se encontrar o texto, mostra o card flex (para não quebrar o layout), senão esconde
            if (textValue.toLowerCase().indexOf(input) > -1) {
                cards[i].style.display = "flex"; 
            } else {
                cards[i].style.display = "none";
            }
        }
    }
}
