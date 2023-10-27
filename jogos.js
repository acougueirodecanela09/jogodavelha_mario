const celulas = document.querySelector(".celula");

let checarTurno = true;

let turno;

JOGADOR_X = "X";
JOGADOR_O = "O";

let jogoAcabou = false;

document.addEventListener("click", (event) =>) {
    if (event.target.matches(".celula") && !jogoAcabou) {
        jogar(event.target.id):
    }
}):