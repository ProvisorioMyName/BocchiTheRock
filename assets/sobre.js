const informaçoes ={
    episodios :{
        titulo: 'Episódios',
        conteudo: '12 Episódios',
    },

    genero: {
        titulo: 'Gênero',
        conteudo : 'Comédia, música, slice of life',
    },

    lancamento: {
        titulo: 'Lançamento',
        conteudo: '09 de outubro de 2022',
    },
    estudio:{
        titulo : 'Estúdio',
        conteudo: 'CloverWorks'
    }
}


function selectInfo(id){
    const info = informaçoes[id]
    let titulo = document.getElementById('titulo')
    let conteudo = document.getElementById('conteudo')
    let caixa = document.querySelector('.info-box')


    titulo.innerText = info.titulo
    conteudo.innerText = info.conteudo
    caixa.style.display = 'block'
}

const linhas ={
    linha1: {
        numero: '1',
        titulo: 'Uma vida isolada',
        texto: 'Hitori passa seu tempo tocando guitarra e postando covers na internet.',
        foto: '../imagens/anime/hitori.jpg'
    },
    linha2: {
        numero: '2',
        titulo: 'O encontro',
        texto: 'Ela conhece Nijika, que a convida para entrar na Kessoku Band.',
        foto: '../imagens/anime/nijikagoto.jpg'
    },
    linha3: {
        numero: '3',
        titulo: 'Primeiros passos',
        texto: 'Hitori começa a ensaiar e enfrentar o desafio de tocar com outras pessoas.',
        foto: '../imagens/anime/treinohitori.jpg'
    },
    linha4: {
        numero: '4',
        titulo: 'Novas Aamizades',
        texto: 'Ela cria laços verdadeiros com a banda e descobre que não está sozinha.',
        foto: '../imagens/anime/grupo.jpg'
    },
    linha5: {
        numero: '5',
        titulo: 'No palco',
        texto: 'Bocchi supera seus medos e finalmente sente a alegria de tocar em um show.',
        foto: '../imagens/anime/banda.jpg'
    }
}
function selectTempo(id){
    const tempo = linhas[id]

    let num = document.getElementById('tempo-num')
    let til = document.getElementById('tempo-ti')
    let txt = document.getElementById('tempo-txt')
    let img = document.querySelector('.tempo-img')

    num.innerText = tempo.numero
    til.innerText = tempo.titulo
    txt.innerText = tempo.texto
    img.style.backgroundImage = `url('${tempo.foto}')`
}

