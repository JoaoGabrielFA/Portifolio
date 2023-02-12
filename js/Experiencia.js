class Experiencia{

    static quantidadeDeExperiencias = 0;

    #numero;
    #titulo;
    #descricao;
    #imagem;
    #repositorio;
    #demo;

    #botao1 = 'REPOSITÓRIO';
    #botao2 = 'VER DEMO';

    constructor(titulo, descricao, imagem, repositorio, demo, botao1, botao2){
        
        Experiencia.quantidadeDeExperiencias++;

        this.#numero = Experiencia.quantidadeDeExperiencias;
        this.#titulo = titulo;
        this.#descricao = descricao;
        this.#imagem = imagem;
        this.#repositorio = repositorio;
        this.#demo = demo;
        if(botao1){this.#botao1 = botao1.toUpperCase()};
        if(botao2){this.#botao2 = botao2.toUpperCase()};
        

        this.#criaExperiencia();
    }

    #criaExperiencia(){
        document.querySelector('.experiencia__lista').innerHTML +=
        `<div class="experiencia__item">`+
            `<div class="experiencia__item--img" style="background-image: url(./img/experiencias/${this.#imagem});"></div>`+
            `<div class="experiencia__item--dados">`+
                `<span class="experiencia__item--titulo subtitulo">${this.#titulo}</span>`+
                `<span class="experiencia__item--descricao">${this.#descricao}</span>`+
                `<div class="experiencia__item--skills" id="skillsExperiencia${this.#numero}"></div>`+
                `<div class="experiencia__item--botoes">`+
                    `<button class="experiencia__lista--repositorio" onclick="abrirLink('${this.#repositorio}')">${this.#botao1}</button>`+
                    `<button class="experiencia__lista--demo" onclick="abrirLink('${this.#demo}')">${this.#botao2}</button>`+
                `</div>`+
            `</div>`+
        `</div>`;
    }

    addSkills(skill_1, skill_2, skill_3, skill_4){
        const skillList = [];
        if(skill_1){skillList.push(skill_1)};
        if(skill_2){skillList.push(skill_2)};
        if(skill_3){skillList.push(skill_3)};
        if(skill_4){skillList.push(skill_4)};

        skillList.forEach(skill => {
            document.getElementById('skillsExperiencia' + this.#numero).innerHTML += `<img class="experiencia__item--skill" src="./img/skills/${skill}.svg" alt=""></img>`
        });
    }
}

function abrirLink(url){
    window.open(url, '_blank');
}

var n = 0;
checkButton();

function checkButton(){
    if(n == 0){
        document.querySelectorAll('.experiencia--botoes')[0].disabled = true;
    }else{
        document.querySelectorAll('.experiencia--botoes')[0].disabled = false;
    }

    if(n == Experiencia.quantidadeDeExperiencias - 1){
        document.querySelectorAll('.experiencia--botoes')[1].disabled = true;
    }else{
        document.querySelectorAll('.experiencia--botoes')[1].disabled = false;
    }
}
function experienciaAnterior() {
    if(n > 0){
        n--;
        document.documentElement.style.setProperty('--slide_atual', `-${n}00%`);
    }
    checkButton();
}

function experienciaPosterior() {
    if(n < Experiencia.quantidadeDeExperiencias - 1){
        n++;
    document.documentElement.style.setProperty('--slide_atual', `-${n}00%`);
    }
    checkButton();
}