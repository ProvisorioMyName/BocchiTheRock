const personagens = {
  hitori: {
    cor: "#FF4FA3",
    Tsombra: '0px 0px 5px #FF4FA38c',
    nome: "Hitori Gotoh",
    foto: "../imagens/person/hitori-perfil.jpg",
    posicao: 'Guitarrista',
    instrumento1: '../imagens/icones/graves.png',
    instrumento2: '',
    sobre: 'Hitori Gotoh (Bocchi) é uma estudante extremamente tímida e com forte ansiedade social, mas que esconde um talento excepcional na guitarra. Após passar anos praticando sozinha trancada em seu armário e postando vídeos na internet como "guitarhero", ela foi convidada a se juntar à Kessoku Band, iniciando sua jornada para superar seus medos e se conectar com os outros através da música.',
  },
  nijika: {
    cor: "#f7c600",
    Tsombra: '0px 0px 5px #f7c6008c',
    nome: "Nijika Ijichi",
    foto: "../imagens/person/nijika-perfil2.jpg",
    posicao: 'Baterista',
    instrumento1: '../imagens/icones/bateria.png',
    instrumento2: '',
    sobre: 'Nijika Ijichi é a enérgica, organizada e dedicada baterista da Kessoku Band. Sendo a fundadora do grupo ao lado de Ryo, ela assume o papel de líder e é a força acolhedora que mantém todas unidas. Seu grande sonho é transformar a Kessoku Band em um enorme sucesso, em parte para homenagear sua irmã mais velha e apoiar a casa de shows STARRY.'
  },
  ryo: {
    cor: "#1e4bff",
    Tsombra: '0px 0px 5px #1e4bff8c',
    nome: "Ryo Yamada",
    foto: "../imagens/person/yamada-perfil.jpg",
    posicao: 'Baixista',
    instrumento1: '../imagens/icones/bass.png',
    instrumento2: '',
    sobre: 'Ryo Yamada é a excêntrica, calma e reservada baixista da Kessoku Band, sendo também a mente responsável por compor as melodias da banda. Ela tem uma personalidade única, valoriza profundamente sua individualidade e prefere passar o tempo sozinha, mantendo um estilo de vida peculiar que muitas vezes intriga suas amigas.',

  },
  kita: {
    cor: "#ff174d",
    Tsombra: '0px 0px 5px #ff174d8c',
    nome: "Ikuyo Kita",
    foto: "../imagens/person/kita-perfil.jpg",
    posicao: 'Vocalista/Guitarrista',
    instrumento1: '../imagens/icones/guitarravermelha.png',
    instrumento2: '../imagens/icones/microfone.png',
    sobre: 'Ikuyo Kita é a vocalista e guitarrista secundária da Kessoku Band. Com uma personalidade radiante, otimista e extremamente sociável, ela é o completo oposto de Bocchi. Kita brilha tanto que sua energia positiva e presença nas redes sociais funcionam como o principal motor de divulgação e carisma da banda.'
  },
};



function selecPersonagem(id){
    const personagem = personagens[id];
    atualizarPerfil(personagem);
    atualizarInfo(personagem);
    atualizarCurio(personagem);
}


function atualizarPerfil(personagem) {
  let perfil = document.getElementById("perfil");
  let personImg = document.querySelector(".person-img");
  let nome = document.querySelector('.person-text h2')
  let cargo = document.querySelector('.person-cargo p')
  let inst1 = document.getElementById('inst1')
  let inst2 = document.getElementById('inst2')
  let sobre = document.getElementById('txt')


  perfil.style.borderColor = personagem.cor;
  
  personImg.style.backgroundImage = `url('${personagem.foto}')`;

  nome.innerText = personagem.nome
  nome.style.color = personagem.cor
  nome.style.textShadow = personagem.Tsombra

  cargo.innerText = personagem.posicao
  cargo.style.color = personagem.cor

  inst1.src = personagem.instrumento1

  if (personagem.instrumento2 != ''){
    inst2.src = personagem.instrumento2
    inst2.style.display = 'inline'
  }else{
    inst2.style.display = 'none'
  }

  sobre.innerText = personagem.sobre
}
