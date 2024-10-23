async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()

    console.log(dados)
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type:'bar'
            marker:{
                color:getComputedStyle(document.body).getPropertyValue('--primary-color')

            }
        }
    ]

    const grafico = document.createElement('div')//cria uma div
    grafico.className = 'grafico'//cria aclasse para a div
    //insere a div  e a classe na tag onte tem o id = "graficos-container"
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}
quantidadeUsuarios()