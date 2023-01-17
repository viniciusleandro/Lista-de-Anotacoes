let userlogado = JSON.parse(localStorage.getItem('usuarioLogado'))
document.addEventListener('DOMContentLoaded', () => {
    if(!userlogado){
        window.location.href = './login.html'
    }
})
let texto = document.getElementById('user').innerText = `${userlogado.nome}`
let botao = document.getElementById('salvar')
const tbody = document.getElementById('lista-contatos')
botao.addEventListener('click', () =>{
    let descricao = document.getElementById('description').value
    let detalhamento = document.getElementById('detalhe').value
    tbody.innerHTML += `
        <tr>
        <td>#</td>
        <td>${descricao}</td>
        <td>${detalhamento}</td>
        <td>
            <button class="editar">Editar</button>
            <button class="apagar" onclick=''>Apagar</button>
        </td>
        </tr>
    `
    
})

function deletar(param){
    console.log(param)
}