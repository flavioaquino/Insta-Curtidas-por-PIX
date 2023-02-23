// objeto para armazenar usuários cadastrados
let users = [];

function saveUser() {
  // obter valores de entrada
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // criar um objeto de usuário
  const user = {
    name: name,
    email: email,
    username: username,
    password: password
  };

  // adicionar usuário ao array de usuários
  users.push(user);

  // limpar campos de entrada
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

function login() {
  // obter valores de entrada
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  // pesquisar usuário correspondente
  const user = users.find(user => user.username === username && user.password === password);

  // verificar se usuário foi encontrado
  if (user) {
    console.log(`Usuário encontrado: ${user.name}`);
  } else {
    console.log("Usuário não encontrado");
  }

  // limpar campos de entrada
  document.getElementById("loginUsername").value = "";
  document.getElementById("loginPassword").value = "";
}