const root = document.getElementById('root');

function Titulo(nome){
    const h1= document.createElement('h1');
    h1.innerText = nome;
    return h1;
}

function Cabecalho(){
    const header = document.createElement("header");
    header.setAttribute('class', '.cabecalho');
    header.append(Titulo('Login'));
    return header;
}


/**
 * [
 *  {
 *   key: string,
 *   value: 
 *   }
 * ]
 */
//const setAttributes = (element, attr) => {
    //attr.forEach(({key, value}) => {
    //    element.setAttribute(key, value)
    //})
//}

function Formulario(){
    const form = document.createElement("form");
    const inputEmail = document.createElement('input');
   // setAttributes = (inputEmail, [{
   //     type: 'email',
   //     name: 'email',
   //     required: true,
   // }])
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('name', 'email');
    inputEmail.setAttribute('required', true);
    const inputSenha = document.createElement('input');
    inputSenha.setAttribute('type', 'password');
    inputSenha.setAttribute('name', 'senha');
    inputSenha.setAttribute('placeholder', 'Senha');
    inputSenha.setAttribute('required', true);
    const inputSubmit = document.createElement('input');
    inputSubmit.setAttribute('type','submit');
    inputSubmit.setAttribute('value', 'Entrar');
    inputSubmit.addEventListener('click', efetuarLogin);
    form.append(inputEmail);
    form.append(inputSenha);
    form.append(inputSubmit);
    return form;
}

function efetuarLogin(event){
    event.preventDefault();

    const inputEmail = document.querySelector('input[type="email"]');
    if (!inputEmail.value){
        const erro = document.createElement('p');
        erro.innerText = 'Email é Obrigatorio';
        inputEmail.parentElement.appendChild(erro);
        inputEmail.focus();
    }

    const inputSenha = document.querySelector('input[type="password"]');
    //chamada a api REST
    fetch.post('/users/login',{
        method:'POST',
        body: {email:inputEmail.value, senha: inputSenha.value}
    });

}

function Principal(){
    const main = document.createElement('main');
    main.append(Formulario());
    return main;
}

root.append(Cabecalho());
root.append(Principal());