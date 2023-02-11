// const usuarios = localStorage.getItem("arrayUsuario");
var usuarios = JSON.parse(localStorage.getItem('arrayUsuario'));

let jsonTarefa =  localStorage.getItem('arrayUsuario');

let tarefa = JSON.parse(jsonTarefa);
const registerForm = document.getElementById("forms");
registerForm.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    let emailf = document.getElementById("email")
    let email = document.getElementById("email").value
    let senhaf = document.getElementById("password")
    let senha = document.getElementById("password").value
    if (jsonTarefa = localStorage.getItem('arrayUsuario') == null) {
        emailf.value = ''
        senhaf.value = ''
       let dados = confirm("Dados inválidos, Deseja se cadastrar?")
       if (dados) {
        return window.location.href = './cadastro.html'
       }
    }
    const usuarioEncontrado = tarefa.find((usuario) => usuario.email === email && usuario.senha === senha)
    
    if (usuarioEncontrado) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado))
        trocarpagina()
    } else {
        let aceitar = confirm("Dados inválidos, Deseja se cadastrar?")
        emailf.value = ''
        senhaf.value = ''
        if (aceitar) {
            return window.location.href = './cadastro.html' 
        }
    }
})
function trocarpagina(){
    window.location.href = './anotacoes.html'
}