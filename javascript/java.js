const registerForm = document.getElementById("formu");
let arrayUsuario = JSON.parse(localStorage.getItem("arrayUsuario")) || [];

registerForm.addEventListener('submit',()=>{
    let nomeCompleto = document.querySelector('input[name=nome]')
    let textoNome = nomeCompleto.value;
    let email = document.querySelector('input[name=email]')
    let textoemail = email.value;
    let telefone = document.querySelector('input[name=telefone]')
    let textoTelefone = telefone.value;
    let sexo = document.querySelector('input[name=genero]:checked')
    let textoSexo = sexo.value;
    let senha= document.querySelector('input[name=senha]')
    let textoSenha = senha.value;

    let nomeExiste = arrayUsuario.some((valor)=> valor.nome == textoNome)
    if (nomeExiste) {
        return alert("usuario ja existe")
    }
    let emailExiste = arrayUsuario.some((valor)=> valor.email == textoemail)
    if (emailExiste) {
        return alert("email ja existe")
    }
    arrayUsuario.push({
        nome: textoNome,
        email: textoemail,
        telefone: textoTelefone,
        sexo: textoSexo,
        senha: textoSenha
    });
    if (localStorage.getItem("items") === null) {
        array_json = JSON.stringify(arrayUsuario);
        //----------------------------//chave, valor
        localStorage.setItem("arrayUsuario", array_json);
      } else {
        // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
        localStorage.setItem(
          "items",
          // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
          JSON.stringify([JSON.parse(localStorage.getItem("items")), array_json])
        );
      }
    // salvarStorage()
})

// function salvarStorage(){
//     localStorage.setItem('list', JSON.stringify(arrayUsuario))
// }