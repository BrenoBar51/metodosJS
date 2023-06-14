/*Map
const container = document.getElementById('container')

const clientes = [
    {
        nome: "Breno",
        email: "brenobarcelos9@gmail.com",
        cidade: "Fortaleza",
        estado:"CE",
        idade:18
    },
    {
        nome: "Breno",
        email: "brenobarcelos9@gmail.com",
        cidade: "Fortaleza",
        estado:"CE",
        idade:18
    }
]
clientes.map((cliente, i) => {
    console.log(cliente, i)
})
clientes.map((cliente, i) => {
    container.innerHTML += `
        <div>
            <p>Posição no Array: ${i}</p>
            <p>${cliente.nome}</p>
            <p>${cliente.email}</p>
            <p>${cliente.cidade}</p>
            <p>${cliente.estado}</p>
            <p>${cliente.idade}</p>
        </div>
        <hr>
    `
})*/
/*Reduce*/
const container = document.getElementById('container')
const vendas = [50, 120, 100, 20, 15]
const somaVendas = vendas.reduce(
        (valorAnterior, valorAtual) => {
            let total = valorAnterior + valorAtual
            return container.innerHTML = total
        }, 0
    );
console.log(somaVendas)