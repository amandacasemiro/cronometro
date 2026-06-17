const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2026-12-05T00:00:00");
const tempoObjetivo2 = new Date("2026-12-30T00:00:00");
const tempoObjetivo3 = new Date("2026-10-25T00:00:00");
const tempoObjetivo4 = new Date("2026-11-15T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return; // Retorna zerado se o tempo já acabou
    }
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        let tempo = calculaTempo(tempos[i]);
        contadores[i].innerHTML = `
            <div class="contador-digito"><p class="contador-digito-numero">${tempo[0]}</p><p class="contador-digito-texto">dias</p></div>
            <div class="contador-digito"><p class="contador-digito-numero">${tempo[1]}</p><p class="contador-digito-texto">horas</p></div>
            <div class="contador-digito"><p class="contador-digito-numero">${tempo[2]}</p><p class="contador-digito-texto">min</p></div>
            <div class="contador-digito"><p class="contador-digito-numero">${tempo[3]}</p><p class="contador-digito-texto">seg</p></div>
        `;
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
