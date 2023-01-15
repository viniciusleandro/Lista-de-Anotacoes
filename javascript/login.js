// const usuarios = localStorage.getItem("arrayUsuario");
var usuarios = JSON.parse(localStorage.getItem('arrayUsuario'));

let jsonTarefa = localStorage.getItem('arrayUsuario');

let tarefa = JSON.parse(jsonTarefa);
const registerForm = document.getElementById("formu");
registerForm.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    let email = document.getElementById("email").value
    let senha = document.getElementById("password").value
    //verificar com o tech helper como eu faço quando retorna nulo no find
    if (jsonTarefa = localStorage.getItem('arrayUsuario') == null) {
       return alert("dados invalidos")
    }
    // let existe = tarefa.some((valor) => valor.email == email && valor.senha == senha)
    const usuarioEncontrado = tarefa.find((usuario) => usuario.email === email && usuario.senha === senha)
    // if(existe){
    //     localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado))
    //     trocarpagina()
    // }else{
    //     return alert("Dados invalidos")
    // }
    if (usuarioEncontrado) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado))
        trocarpagina()
    } else {
        alert("dados invalidos")
    }
})
function trocarpagina(){
    window.location.href = './anotacoes.html'
}