//intalar o node js
//instalar atraves do terminal
//utilizando o comando
// npm install readline-sync
//readline - biblioteca para armazenar valores por prompts
//INCLUDES/ PACKAGE/ IMPORTS
const prompt = require("readline-sync");
let data; // data do acadastro
let aCadastroIntegrante = []; //LISTA PARA ARMAZENAR OS CADASTROS
let aCadastroBanda = []; //LISTA PARA ARMAZENAR OS CADASTROS

exePergunta();

//realizar Perguntas do MENU PRINCIPAL
function exePergunta() {
  console.log("O que você deseja Fazer? ");
  let mensagem = Number(
    prompt.question(
      "1-Cadastrar Integrante/ 2-Cadastrar Banda/ 3-Ver todos os cadastros/ 4-Sair"
    )
  );

  switch (mensagem) {
    case 1:
      realizarCadastro();
      exePergunta();
      break;
    case 2:
      realizarCadastroBanda();
      exePergunta();
      break;
    case 3:
      exibirCadastros(aCadastroIntegrante, aCadastroBanda);
      exePergunta();
      break;
    case 4:
      console.log("Obrigado! Volte Sempre");
      break;
    default:
      exePergunta();
      break;
  }
}

//CADASTRO DE INTEGRANTE
function realizarCadastro() {
  definirData();
  let nome = prompt.question("Qual eh o seu nome? ");
  let idade = prompt.question("Qual eh a sua idade? ");
  let email = prompt.question("Qual eh o seu email? ");
  let telefone = prompt.question("Qual eh o seu telefone? ");
  let instrumento = prompt.question("Qual instrumento você toca? ");
  let cidade = prompt.question("Qual a sua cidade? ");
  let banda = prompt.question("Toca em alguma banda? ");
  let linkFace = prompt.question("Inclua o seu Facebook: ");
  let linkInsta = prompt.question("Inclua o seu Instagram: ");
  let linkYoutube = prompt.question("Inclua a página do seu YouTube: ");
  let linkFoto = prompt.question("Inclua a sua foto: ");

  linkFace = "https://www.facebook.com/" + linkFace;
  linkInsta = "https://www.instagram.com/" + linkInsta;
  linkYoutube = "https://www.youtube.com/" + linkYoutube;

  let aCadastro = [
    ["Data de Cadastro: ", data],
    ["Nome: ", nome],
    ["Idade: ", idade],
    ["Email: ", email],
    ["Telefone: ", telefone],
    ["Instrumento: ", instrumento],
    ["Cidade: ", cidade],
    ["Banda: ", banda],
    ["Facebook: ", linkFace],
    ["Instagram: ", linkInsta],
    ["YouTube: ", linkYoutube],
    ["Foto: ", linkFoto],
  ];

  aCadastroIntegrante.push(aCadastro);

  return aCadastroIntegrante;
}

//CADASTRO DE BANDAS
function realizarCadastroBanda() {
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

//EXIBIR OS CADASTROS EM TELA
function exibirCadastros(aCadastroIntegrante, aCadastroBanda) {
  console.log("Cadastros:");
  console.log(aCadastroIntegrante);
  console.log("Cadastros de Banda:");
  console.log(aCadastroBanda);
}

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
