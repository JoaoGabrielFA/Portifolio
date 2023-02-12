class Formacao {
    #nome;
    #dataConclusao;
    #empresa;
    #imagem;
    #conclusao;
    #certificado;

    constructor(nome, empresa, imagem, mes, ano, certificado){
        this.#nome = nome;
        this.#empresa = empresa;
        this.#imagem = imagem;
        this.#dataConclusao = mes == null || ano == null ? 'Em andamento' : mes + ' / ' + ano;
        this.#conclusao = mes == null || ano == null ? '' : 'mostrarCertificado';
        this.#certificado = certificado == null ? '#' : certificado;

        this.#criaFormacao();
    }

    #criaFormacao(){
        document.querySelector('.formacao--lista').innerHTML +=
            `<div class="formacao__lista--card">` +
                `<div class="formacao__lista--img" style="background-image: url('./img/formacoes/${this.#imagem}');">` +
                    `<img class="formacao--lista--certificado ${this.#conclusao}" onclick="mostrarCertificado('${this.#certificado}')" src="./img/formacoes/icon-certificate.svg" alt="Imagem do Curso">` +
                `</div>` +
                `<span class="formacao__lista--titulo subtitulo">${this.#nome}</span>` +
                `<span class="formacao__lista--ano">${this.#dataConclusao} - ${this.#empresa}</span>` +
            `</div>`;
    }
}

function mostrarCertificado(link){
    return link != null ? window.open(link, '_blank') : alert('Erro');
}