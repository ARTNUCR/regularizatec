const usuarios = [
  { username: "usuario1", password: "contrasena1" },
  { username: "usuario2", password: "contrasena2" }
];

const temarioMatematicas = [
  
  {
    id: 1,
    titulo: "Álgebra",
    contenido: "<embed src='ManualDeAlgebra.pdf' type='application/pdf' width='100%' height='600px' />"
    +"Las matemáticas son la puerta de entrada a un mundo de descubrimientos, donde cada fórmula y teorema es una ventana hacia el asombroso, poder del razonamiento humano."
  },  
  {
    id: 2,
    titulo: "Geometría",
    contenido: "<embed src='GEOMETRIA.pdf' type='application/pdf' width='100%' height='600px' />"
    +"En el universo de las matemáticas, cada problema resuelto es un puzle completado, cada ecuación equilibra la balanza del conocimiento y cada paso adelante es un avance hacia el entendimiento del mundo que nos rodea."
  },
  {
    id: 3,
    titulo: "Trigonometría",
    contenido: "<embed src='TRIGONOMETRIA.pdf' type='application/pdf' width='100%' height='600px' />"
    +"Las ciencias matemáticas son el lenguaje universal que desbloquea los misterios de la naturaleza, permitiéndonos comprender desde la estructura del cosmos hasta los intrincados patrones que rigen nuestro día a día."
  }
];

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const usuarioValido = usuarios.find(user => user.username === username && user.password === password);

  if (usuarioValido) {
    mostrarTemario();
  } else {
    alert('Credenciales inválidas. Inténtalo de nuevo.');
  }
});

function mostrarTemario() {
  ocultarElemento('.login-container');
  const contenidoMatematico = document.querySelector('.contenido-matematico');
  contenidoMatematico.style.display = 'block';

  temarioMatematicas.forEach(tema => {
    const divTema = document.createElement('div');
    divTema.classList.add('tema');
    divTema.innerHTML = `
      <h2>${tema.titulo}</h2>
      <p>${tema.contenido}</p>
      <button onclick="realizarEvaluacion(${tema.id}, '${getFormLink(tema.id)}')">Realizar Evaluación</button>
    `;
    contenidoMatematico.appendChild(divTema);
  });

  document.getElementById('botonFormulario').addEventListener('click', function () {
    window.location.href = 'ENLACE_DEL_FORMULARIO_GENERAL';
  });
}

function realizarEvaluacion(temaId, formLink) {
  // Aquí puedes hacer cualquier acción adicional antes de redireccionar, si es necesario
  window.location.href = formLink;
}

function getFormLink(temaId) {
  // Aquí puedes definir la lógica para obtener el enlace específico del formulario según el tema
  // Por ejemplo, puedes tener un objeto que mapee los IDs de temas a enlaces de formularios
  const formLinks = {
    1: 'https://forms.office.com/r/8VtRYLjiBm',
    2: 'https://forms.gle/3AZQe3PR3FJWHn6S7',
    3: 'https://docs.google.com/forms/d/e/1FAIpQLSeORfmzL2Dr58rg-RQszBsXthS3Xabb6Rv7nGtpBvG6_Z0nPw/viewform?usp=sf_link'
  };
  return formLinks[temaId] || 'ENLACE_FORMULARIO_POR_DEFECTO';
}

function ocultarElemento(selector) {
  document.querySelector(selector).style.display = 'none';
}
