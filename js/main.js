// Declarando variables
let inputMensaje = document.getElementById("inputMensaje");
let btnEncriptar = document.getElementById("btnEncriptado");
let btnDesencriptar = document.getElementById("btnDesencriptado");
let mensajeFinal = document.getElementById("mensajeFinal");
let btnCopiarResultado = document.getElementById("btnCopiarResultado");
let pre_informacion = document.querySelector(".ningun-mensaje");
let resultado = document.getElementById("resultado");
let ningunMensaje;

inputMensaje.addEventListener("input", validarTexto);

// Funcion para poder encriptar
function encriptarTxt(text) {
  text = text.replace(/e/g, "enter");
  text = text.replace(/i/g, "imes");
  text = text.replace(/a/g, "ai");
  text = text.replace(/o/g, "ober");
  text = text.replace(/u/g, "ufat");
  return text;
}
// Funcion para poder desencriptar
function desencriptarTxt(text) {
  text = text.replace(/enter/g, "e");
  text = text.replace(/imes/g, "i");
  text = text.replace(/ai/g, "a");
  text = text.replace(/ober/g, "o");
  text = text.replace(/ufat/g, "u");
  return text;
}

// Boton para poder encriptar el texto ingresado en el textarea
btnEncriptar.addEventListener("click", () => {
  ningunMensaje = inputMensaje.value;
  if (inputMensaje.value === "") {
    Swal.fire({
      icon: 'error',
      title: 'Error...',
      text: '¡Ingrese un texto!',
      timer: 2000
    })
    ningunMensaje.display = "block";
  }else{
    mostrarResultado(encriptarTxt(inputMensaje.value));
  }
});

// Boton para poder desencriptar el resultado del texto que se encripto
btnDesencriptar.addEventListener("click", () => {
  ningunMensaje = inputMensaje.value;
  if (inputMensaje.value === "") {
    Swal.fire({
      icon: 'error',
      title: 'Error...',
      text: 'No tiene nada para desencriptar',
      timer: 2000
    })
    ningunMensaje.display = "block";
  } else {
    mostrarResultado(desencriptarTxt(inputMensaje.value));
  }
});

// Funcion para mostrar el resultado
function mostrarResultado(text) {
  mensajeFinal.value = text;
  mostrarOcultarTexto("none", "block");
}
//Funcion para poder validar el texto ingresado, no aceptara letras mayusculas y acentos.
function validarTexto() {
  if (inputMensaje.value === "") {
    pre_informacion.style.display = "block";
    resultado.style.display = "none";
    return;
  }
  // USANDO REGEX PARA EL USO DE EXPRESION REGULAR "Solo letras minusculas y sin acentos"
  const regex =
    /[W]|[áéíóúÁÉÍÓÚ¿¡«»“”‘’'"´`+*()\-–—/\\=|#@^\[\]{}%$§&~;:.<>!?]|[A-Z]/g;
  const cleanedText = inputMensaje.value.replace(regex, "");
  inputMensaje.value = cleanedText;
}

function mostrarOcultarTexto(style1, style2) {
  mensajeFinal.style.display = style2;
  btnCopiarResultado.style.display = style2;

  resultado.style.display = "inherit";
  resultado.style.height = "80vh";
  document.querySelector(".ningun-mensaje").style.display = "none";
}

btnCopiarResultado.addEventListener("click", function () {
  navigator.clipboard.writeText(mensajeFinal.value);
});
