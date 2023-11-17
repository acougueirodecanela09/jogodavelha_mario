const celulas = document.querySelector(".celula");

let checarTurno = true;

let turno;

JOGADOR_X = "X";
JOGADOR_O = "O";

let jogoAcabou = false;

document.addEventListener("click", (event) => {
    if (event.target.matches(".celula") && !jogoAcabou) {
        jogar(event.target.id);
    }
});

functionjogar(id) {
    const celula = document.getElementById(id);
    if (celula.textContent ==="") {
        turno = checarTurno ? JOGADOR_X : JOGADOR_O;
        checarTurno = !checarTurno;
        celula.textContent = turno;
        celula.classList.add(turno); 
        celula.removeEventListener("click, jogar");
        verificarVencedor(turno);
    }
}