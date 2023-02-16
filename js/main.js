var reveals = document.querySelectorAll('.revelar');

function iniciar(){reveals[0].classList.add('fade_in')};

window.addEventListener('scroll', reveal);

function reveal(){
    for(i = 0; i < reveals.length; i++){
        
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('fade_in');
        }else{
            reveals[i].classList.remove('fade_in');
        }
    }
}   

new Skill('HTML', './img/skills/html.svg', 4);
new Skill('CSS', './img/skills/css.svg', 4);
new Skill('Javascript', './img/skills/js.svg', 4);
new Skill('Java', './img/skills/java.svg', 3);
new Skill('C#', './img/skills/cs.svg', 2);
new Skill('SQL', './img/skills/sql.svg', 2);
new Skill('C', './img/skills/c.svg', 1);
new Skill('C++', './img/skills/cpp.svg', 1);
new Skill('Python', './img/skills/python.svg', 1);

new Formacao('Iniciante em Progamação', 'Alura', 'alura_programacao.jpg', '08', '2022', 'https://cursos.alura.com.br/degree/certificate/eb04c6b3-096c-493f-9c49-2f613c2d9783');
new Formacao('Lógica de Programação', 'Udemy','udemy.jpg', '10', '2022', 'https://www.udemy.com/certificate/UC-f64278c0-efc1-44d7-95eb-3b1cc30f21d2/' );
new Formacao('Front-end', 'Alura', 'alura_front-end.jpg', '11', '2022', 'https://cursos.alura.com.br/degree/certificate/c21db86c-fcab-4804-aa24-15d5084b322d');
new Formacao('Java e Orientação a Objetos', 'Alura', 'alura_programacao.jpg', '01', '2023', 'https://cursos.alura.com.br/degree/certificate/c42d57dd-10eb-4e0b-bfcc-3089704be525');
new Formacao('Business Agility', 'Alura', 'alura_inovacao_e_gestao.jpg', '02', '2023', 'https://cursos.alura.com.br/degree/certificate/790f0524-dcb0-4b6d-afd9-dd6f843359c6');
new Formacao('Desenvolvimento Pessoal', 'Alura', 'alura_inovacao_e_gestao.jpg', '02', '2023', 'https://cursos.alura.com.br/degree/certificate/fb466f2b-52b0-4114-b5f0-e34c102acdd6');
new Formacao('Empreendedorismo', 'Alura', 'alura_inovacao_e_gestao.jpg', '02', '2023', 'https://cursos.alura.com.br/degree/certificate/f5cb6722-e612-4a28-9213-37ff3b995fbe');
new Formacao('SQL com MySQL Server da Oracle', 'Alura', 'alura_data_science.jpg');
//new Formacao('Python, Data Science no OCI e Oracle Analytics', 'Alura', 'alura_data_science.jpg');
//new Formacao('Oracle Cloud Infrastructure', 'Alura', 'alura_devops.jpg');

new Experiencia("AluraGeek",
    "Alurageek é um site de e-commerce que foi desenvolvido com HTML, CSS e Javascript. Ele possui recursos para gerenciamento de produtos, incluindo a possibilidade de fazer login, criar, editar e excluir produtos. Além disso, uma máscara de monetária foi implementada para formatar os preços de maneira intuitiva para os usuários. <mark>(01/2023)</mark>",
    "alurageek.png",
    "https://github.com/JoaoGabrielFA/AluraGeek",
    "https://joaogabrielfa.github.io/AluraGeek/"
).addSkills('html', 'css', 'js');

new Experiencia("Conversor de Moedas",
    "Meu primeiro projeto em Java, uma aplicação simples para converter diferentes moedas, incluindo real, dólar, euro, libra, iene, won, peso argentino, além de um campo para digitar outras moedas. Para obter as cotações de moedas atualizadas, implementei uma API. <mark>(02/2023)</mark>",
    "conversor_de_moeda.png",
    "https://github.com/JoaoGabrielFA/ConversorDeMoedas",
    "https://github.com/JoaoGabrielFA/ConversorDeMoedas"
).addSkills('java');

new Experiencia("Jogo da Forca",
    "Este jogo de forca simples foi desenvolvido com HTML, CSS, Javascript e um pouco de Bootstrap. Possui 50 palavras distribuídas entre 5 categorias distintas e um código que registra o número de tentativas dos jogadores. Além disso, a arte do jogo foi criada por mim. <mark>(11/2022)</mark>",
    "jogo_da_forca.png",
    "https://github.com/JoaoGabrielFA/JogoDaForca",
    "https://joaogabrielfa.github.io/JogoDaForca/"
).addSkills('html', 'css', 'js');

new Experiencia("Codificador",
    "Meu primeiro projeto em HTML é um codificador simples, foi desenvolvido com HTML, CSS e Javascript. Ele oferece 4 funcionalidades práticas: codificar, decodificar, copiar e apagar o texto. É uma ferramenta simples e eficiente para codificar e decodificar mensagens. <mark>(09/2022)</mark>",
    "codificador.png",
    "https://github.com/JoaoGabrielFA/Codificador",
    "https://joaogabrielfa.github.io/Codificador/"
).addSkills('html', 'css', 'js');

new Experiencia("Resgate aos Porquinhos",
    "Meu primeiro projeto de programação é um jogo mobile 2D de plataforma criado no motor gráfico Unity com a C#. O jogo consiste em salvar os porquinhos-da-índia que foram capturados por cogumelos malignos e possui 50 fases desafiadoras. Além disso, há várias skins desbloqueáveis e 5 inimigos diferentes, incluindo um chefe. Todos os sprites e a música tema foram criados por mim e meu irmão. <mark>(08/2021)</mark>",
    "resgate_aos_porquinhos.jpeg",
    "https://play.google.com/store/apps/details?id=com.BolinhoTech.ResgateaosPorquinhos&hl=pt_BR&gl=US",
    "https://www.youtube.com/watch?v=gdgkchMpD00",
    "Baixar", 
    "Ver Trailer"
).addSkills('cs');