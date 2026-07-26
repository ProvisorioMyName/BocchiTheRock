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