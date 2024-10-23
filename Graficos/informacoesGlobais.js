const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

console.log(url);

async function visualizarInformacoesGlobais(params) {
    const res = await fetch(url);
    const dados = await res.json();
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9).toFixed(1);
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9).toFixed(1);
    const horas = parseInt(dados.tempo_medio)/d()"
    const minutos = Math.round((dados.tempo_medio - horas) * 60);
    const porcentagem = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(1);

    console.log(dados);//visualizar as informações no cosole
    const paragrafo = document.createElement('p');

    paragrafo.classList.add('graficos-container__texto');

    /*insere o texto "Você sabia que o mundo tem "+total_pessoas_mundo ...*/
    paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${pessoasNoMundo} bilhões </span> de pesoas
e que aproximadamente <span>${pessoasConectadas} bilhões </span>  estão conectadas em alguma
rede social e passam em média <span>${horas} horas</span> e <span> ${minutos} minutos</span> conectadas.<br>
Isso significa que aproximadamente <span>${porcentagem}%</span> 
de pessoas estão conctadas em alguma rede social

`
    //cria a variável "container", seleciona o ID "graficos-container" na section do HTML 
    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);//insere o paragrafo dentro do "container"

}
visualizarInformacoesGlobais();//chama a função 