const registerForm = document.getElementById("forms");
let arrayUsuario = JSON.parse(localStorage.getItem("arrayUsuario")) || [];

registerForm.addEventListener('submit',(evento)=>{
  evento.preventDefault()
    let nomeCompleto = document.querySelector('input[name=nome]')
    let textoNome = nomeCompleto.value;
    let email = document.querySelector('input[name=email]')
    let textoemail = email.value;
    let telefone = document.querySelector('input[name=telefone]')
    let textoTelefone = telefone.value;
    let senha= document.querySelector('input[name=senha]')
    let textoSenha = senha.value;
    let senha2 = document.querySelector('input[name=senha2]')
    let textoSenha2 = senha2.value;
    console.log(textoNome,textoSenha, textoTelefone,textoemail)
  if (textoSenha != textoSenha2) {
    return alert("Senhas não conferem ")
  }
  if(textoNome == '' || textoemail == '' || textoTelefone =='' || textoSenha ==''){
    return alert('existem campos vazios')
  }
    let nomeExiste = arrayUsuario.some((valor)=> valor.nome == textoNome)
    if (nomeExiste) {
      nomeCompleto.value = ''
      email.value = ''
      telefone.value = ''
      sexo.value = ''
      senha.value = ''
        return alert("usuario ja existe")
    }
    let emailExiste = arrayUsuario.some((valor)=> valor.email == textoemail)
    if (emailExiste) {
      nomeCompleto.value = ''
      email.value = ''
      telefone.value = ''
      sexo.value = ''
      senha.value = ''
        return alert("email ja existe")
    }
    let usuarioobject ={
        nome: textoNome,
        email: textoemail,
        telefone: textoTelefone,
        senha: textoSenha,
        recados: []
    };
    arrayUsuario.push(usuarioobject)
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
      alert("usuario criado com sucesso")
      window.location.href = './login.html'
      nomeCompleto.value = ''
      email.value = ''
      telefone.value = ''
      senha.value = ''
})