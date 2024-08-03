//intalar o node js
//instalar atraves do terminal
//utilizando o comando
// npm install readline-sync
//readline - biblioteca para armazenar valores por prompts
//INCLUDES/ PACKAGE/ IMPORTS
let meuStorage = localStorage;
let data; // data do acadastro
let aCadastroIntegrante = []; //LISTA PARA ARMAZENAR OS CADASTROS
let formRegister = document.getElementById("formRegister");
let userNameProfile = document.getElementById("userNameProfile");
let firstNameProfile = document.getElementById("firstNameProfile");
let lastNameProfile = document.getElementById("lastNameProfile");
let emailProfile = document.getElementById("emailProfile");
let passWordProfile = document.getElementById("passWordProfile");
let passWord2Profile = document.getElementById("passWord2Profile");
let btnSubmitRegister = document.getElementById("btnSubmitRegister");
let checkbox = document.getElementById("checkbox");

btnSubmitRegister.addEventListener("click", function () {
  if (checkbox.checked == false) {
  } else {
    if (passWordProfile.value !== passWord2Profile.value) {
      alert("AS SENHAS ESTÃO DIFERENTES");
      return;
    } else {
      realizarCadastro();
      alert("SEU CADASTRO FOI REALIZADO COM SUCESSO!");

      //reseta o formulario
      formRegister.reset();

      //função para trocar de pagina
      //volta para a pagina principal INDEX
      setTimeout(function () {
        window.location.replace("./index.html");
      }, 500);
    }
  }
});

//CADASTRO DE INTEGRANTE
function realizarCadastro() {
  definirData();
  let nomeUsuario = userNameProfile.value;
  let nome = firstNameProfile.value;
  let sobrenome = lastNameProfile.value;
  //let idade = prompt.question("Qual eh a sua idade? ");
  let email = emailProfile.value;
  let telefone = "";
  let instrumento = "";
  let cidade = "";
  let banda = "";
  let linkFace = "";
  let linkInsta = "";
  let linkYoutube = "";
  let linkFoto = "";
  let password = passWordProfile.value;
  let password2 = passWord2Profile.value;
  let termos = checkbox.checked;

  linkFace = "https://www.facebook.com/" + linkFace;
  linkInsta = "https://www.instagram.com/" + linkInsta;
  linkYoutube = "https://www.youtube.com/" + linkYoutube;

  let aCadastro = [
    ["Data de Cadastro: ", data],
    ["Username: ", nomeUsuario],
    ["Nome: ", nome],
    ["Sobrenome: ", sobrenome],
    //["Idade: ", idade],
    ["Email: ", email],
    ["Telefone: ", telefone],
    ["Instrumento: ", instrumento],
    ["Cidade: ", cidade],
    ["Banda: ", banda],
    ["Facebook: ", linkFace],
    ["Instagram: ", linkInsta],
    ["YouTube: ", linkYoutube],
    ["Foto: ", linkFoto],
    ["pass1: ", password],
    ["pass2: ", password2],
    ["termos: ", termos],
  ];

  aCadastroIntegrante.push(aCadastro);
  console.log(aCadastroIntegrante);

  //SALVANDO NO LOCAL STORAGE
  //localStorage.setItem("Meus cadastros:", aCadastroIntegrante);
  //EXIBINDO OS CADASTROS SALVOS NO CONSOLE
  //console.log(localStorage.getItem("Meus cadastros:"));

  
// Cria um json a partir do objeto "aux" 
let jsonCad = JSON.stringify(aCadastroIntegrante);
// "Seta" este json no localStorage
window.localStorage.setItem('Meus cadastros:', jsonCad);
// Recupera o json do localStorage
let jsonCadastros = window.localStorage.getItem("Meus cadastros:");
// Converte este json para objeto
let tarefa = JSON.parse(jsonCadastros);
console.log(jsonCad);
console.log(tarefa);

  return aCadastroIntegrante;
}

//CADASTRO DE BANDAS
/*function realizarCadastroBanda() {
  definirData();
  let nomeBanda = prompt.question("Qual eh o nome da Banda? ");
  let estilo = prompt.question("Qual eh o estilo? ");
  let email = prompt.question("Qual eh o seu email? ");
  let telefone = prompt.question("Qual eh o seu telefone? ");
  let cidade = prompt.question("Qual a sua cidade? ");
  let linkFace = prompt.question("Inclua o Facebook da Banda: ");
  let linkInsta = prompt.question("Inclua o Instagram da Banda: ");
  let linkYoutube = prompt.question("Inclua a página do Banda no YouTube: ");
  let linkFoto = prompt.question("Inclua a foto da Banda: ");

  linkFace = "https://www.facebook.com/" + linkFace;
  linkInsta = "https://www.instagram.com/" + linkInsta;
  linkYoutube = "https://www.youtube.com/" + linkYoutube;

  let aCadastro = [
    ["Data de Cadastro: ", data],
    ["Nome: ", nomeBanda],
    ["Estilo: ", estilo],
    ["Email: ", email],
    ["Telefone: ", telefone],
    ["Cidade: ", cidade],
    ["Facebook: ", linkFace],
    ["Instagram: ", linkInsta],
    ["YouTube: ", linkYoutube],
    ["Foto: ", linkFoto],
  ];

  aCadastroBanda.push(aCadastro);

  return aCadastroBanda;
}
  */

//AJUSTAR A DATA, MANIPULANDO DATAS
function definirData() {
  data = new Date();
  let meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();
  let hora = data.getHours();
  let minuto = data.getMinutes();
  let segundos = data.getSeconds();
  let diaNome = data.getDay() + 1;
  meses = meses[mes];

  //PARA ATRIBUIR O NOME DA SEMANA
  switch (diaNome) {
    case 1:
      diaNome = "Domingo";
      break;
    case 2:
      diaNome = "Segunda-feira";
      break;
    case 3:
      diaNome = "Terça-feira";
      break;
    case 4:
      diaNome = "Quarta-feira";
      break;
    case 5:
      diaNome = "Quinta-feira";
      break;
    case 6:
      diaNome = "Sexta-feira";
      break;
    case 7:
      diaNome = "Sábado";
      break;
    default:
      diaNome = "Esse dia não existe";
      break;
  }

  //PAA CORRIGIR A APRESENTAÇÃO DOS DADOS EM TELA
  //SE ALGUM DOS DADOS FOR MENOR QUE 10, SERA ACRESCIDO DO ZERO AO LADO ESQUERDO
  if (dia || mes || hora || minuto || segundos) {
    dia = `${dia < 10 ? "0" + dia : dia}`;
    mes = `${mes < 10 ? "0" + mes : mes}`;
    hora = `${hora < 10 ? "0" + hora : hora}`;
    minuto = `${minuto < 10 ? "0" + minuto : minuto}`;
    segundos = `${segundos < 10 ? "0" + segundos : segundos}`;
  }
  data = `${diaNome}, ${dia}/${mes}/${ano} , ${hora}:${minuto}:${segundos}`;
  return data;
}
