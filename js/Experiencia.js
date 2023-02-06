class Experiencia{

    static quantidadeDeExperiencias = 0;

    #titulo;
    #descricao;
    #imagem;
    #repositorio;
    #demo;

    #botao1 = 'Repositório';
    #botao2 = 'Ver Demo';

    constructor(titulo, descricao, imagem, repositorio, demo, botao1, botao2){
        
        Experiencia.quantidadeDeExperiencias++;

        this.#titulo = titulo;
        this.#descricao = descricao;
        this.#imagem = imagem;
        this.#repositorio = repositorio;
        this.#demo = demo;
        
        if(botao1 != null || botao2 != null){
            this.#botao1 = botao1;
            this.#botao2 = botao2;
        }
        

        this.#criaExperiencia();
    }
    

    #criaExperiencia(){
        let troca = Experiencia.quantidadeDeExperiencias%2 == true ? "" : "par";

        document.querySelector('.experiencia__lista').innerHTML +=
            `<div class="experiencia__item">`+
                `<img class="experiencia__item--img ${troca}" style="background-image: url(${this.#imagem});">`+
                `<div class="experiencia__item--dados">`+
                    `<span class="experiencia__item--titulo subtitulo">${this.#titulo}</span>`+
                    `<span class="experiencia__item--descricao">${this.#descricao}</span>`+
                    `<div class="experiencia__item--botoes">`+
                        `<a class="experiencia__lista--repositorio" target="_blank" href="${this.#repositorio}">${this.#botao1}</a>`+
                        `<a class="experiencia__lista--demo" target="_blank" href="${this.#demo}">${this.#botao2}</a>`+
                    `</div>`+
                `</div>`+
            `</div>`
    }
}