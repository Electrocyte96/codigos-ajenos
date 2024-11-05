const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//problemas al llamar la clase
const $b = document.querySelector('.blog');//llamada a id no especificadp
const $l = document.querySelector('.location');//.location  elemento no existente


//error en la declaracion de funcion asincrona
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //variable data no inicializada y declarada
  const data = await response.json(); 
  console.log(data);
  $n.textContent = `${data.name}`; //comillas simples no permiten 
  $b.textContent = `${data.blog}`; //mostrar datos de la API, cambiado a
  $l.textContent = `${data.location}`; //backticks
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);