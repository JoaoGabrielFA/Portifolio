class Skill{
    #nome;
    #imagem;
    #nivel;

    constructor(nome, imagem, nivel){
        this.#nome = nome.toUpperCase();
        this.#imagem = imagem;
        this.#nivel = nivel;

        this.#criaSkill();
    }

    #criaSkill(){
        document.querySelector('.skills__lista').innerHTML += 
            `<li class="skills__item">` +
                `<div class="skills__item--img" style="background-image: url('${this.#imagem}');"></div>` +
                `<span class="skills__item--nome">${this.#nome}</span>` +
                `<span class="skills__item--nivel">${this.#criaNivel(this.#nivel)}</span>` +
            `</li>`;
    }

    #criaNivel(nivel){
        const estrelaCheia =  '&#9733;';
        const estrelaVazia =  '&#9734;';
        let estrelas = '';

        for(var i = 0; i < 5; i++){
            if(nivel > 0){
                estrelas += estrelaCheia;
                nivel--;
            }else{
                estrelas += estrelaVazia;
            }
        }

        return estrelas;
    }
}