let userlogado = localStorage.getItem('usuarioLogado')

document.addEventListener('DOMContentLoaded', () => {
    if(!userlogado){
        window.location.href = './login.html'
    }
})

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
            <button>Apagar</button>
            <button>Editar</button>
        </td>
        </tr>
    `
})

