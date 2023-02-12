let userlogado = JSON.parse(localStorage.getItem('usuarioLogado'))
var usuarios = JSON.parse(localStorage.getItem('arrayUsuario'));
document.addEventListener('DOMContentLoaded', () => {
    if(!userlogado){
        window.location.href = './login.html'
    }
})
let texto = document.getElementById('user').innerText = `Bem vindo ${userlogado.nome} a sua lista de anotaçoes`
let botao = document.getElementById('salvar')
const tbody = document.getElementById('list-todo')

function adddescricao(){
    let descricao = document.getElementById('description').value
    let detalhamento = document.getElementById('detalhe').value
    console.log(detalhamento)
    console.log(descricao)
    if (descricao == "") {
      return alert("Coloque uma descrição")
    }
    const novodetalhe = {
        descricao: descricao,
        detalhe: detalhamento
    }
    userlogado.recados.push(novodetalhe)
    renderTable();
    salvarStorage();
    let descricao1 = document.getElementById('description')
    let detalhamento2 = document.getElementById('detalhe')
    descricao1.value = ''
    detalhamento2.value = ''
    console.log(userlogado)
}
function salvarStorage(){
    localStorage.setItem('usuarioLogado', JSON.stringify(userlogado))
    const usuario1 = usuarios.findIndex((value) => value.nome === userlogado.nome)
        usuarios[usuario1] = userlogado
        localStorage.setItem('arrayUsuario', JSON.stringify(usuarios))
}
function renderTable() {
  tbody.innerHTML = ''
  userlogado.recados.map((element, index) => {
    tbody.innerHTML += `              <li class="list-group-item d-flex justify-content-between fs-5 row">
    <div class="col-12 col-xl-5 col-md-5">descrição: ${element.descricao}</div>
    <div class="col-12 col-xl-5 col-md-5">detalhamento: ${element.detalhe} </div>
  <div class="d-flex gap-3 col-12 col-xl-2 col-md-2 wrap align-items-center">
    <i class="bi bi-pencil edit" onClick="editar(${index})"></i>
        <i class="bi bi-trash3 delete" onClick="deletar(${index})"></i>
  </div>
  </li>`
});
    // userlogado.recados.map((user, index) => {
    //   const tr = document.createElement("tr");
    //   const td1 = document.createElement("td");
    //   const td2 = document.createElement("td");
    //   const td3 = document.createElement("td");
    //   const td4 = document.createElement("td");
    //   const deleteButton = document.createElement("button");
    //   const EditButton = document.createElement("button");

    //   tr.setAttribute("class", "tr-style");
    //   deleteButton.setAttribute("onClick", `deletar(${index})`);
    //   EditButton.setAttribute("onClick", `editar(${index})`);
    // deleteButton.setAttribute('class', 'apagar')
    // EditButton.setAttribute('class', 'editar')
    //   tr.appendChild(td1);
    //   tr.appendChild(td2);
    //   tr.appendChild(td3);
    //   tr.appendChild(td4);
    //   td4.appendChild(deleteButton);
    //   td4.appendChild(EditButton);

    //   td1.innerHTML = index + 1;
    //   td2.innerHTML = user.descricao;
    //   td3.innerHTML = user.detalhe;
    //   deleteButton.innerHTML = "Delete";
    //   EditButton.innerHTML = "Edit";
    //   tbody.appendChild(tr);
    // });
  }
renderTable()
function deletar(index) {
    userlogado.recados.splice(index, 1);
    renderTable();
    salvarStorage();
  }

  function editar(index) {
    console.log(index)
    const descricao = prompt("Digite seu descrição");
    const detalhe = prompt("Digite seu detalhe");

    userlogado.recados[index].descricao = descricao;
    userlogado.recados[index].detalhe = detalhe;
    renderTable();
    salvarStorage();
  }

  function sair(){
    localStorage.removeItem('usuarioLogado')
    window.location.href = './login.html'
  }