const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

console.log(url);
async function visualizarInformacoesGlobais(params) {

    const res = await fetch(url);
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9).toFixed(1);
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9).toFixed(1);
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 60);
    const porcentagem = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(1);

    console.log(dados);
    const paragrafo = document.createElement('p');

    paragrafo.classList.add('graficos-container__texto');

    paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${pessoasNoMundo} bilhões </span> de pesoas
e que aproximadamente <span>${pessoasConectadas} bilhões </span>  estão conectadas em alguma
rede social e passam em média <span>${horas} horas</span> e <span> ${minutos} minutos</span> conectadas.<br>
Isso significa que aproximadamente <span>${porcentagem}%</span> 
de pessoas estão conctadas em alguma rede social

`
    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);

}
visualizarInformacoesGlobais();