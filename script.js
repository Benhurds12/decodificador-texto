const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const copia = document.querySelector(".copiar");

textArea.addEventListener('click', () => {
    if (textArea.value === "digite seu texto") {
      textArea.value = "";
    }
  });

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z ]*$/);

    if(!validador || validador === 0) {
        alert("Somente são permitidas letras minusculas e sem acentos")
        location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensagem.value = textoEncriptado
        mensagem.style.backgroundImage = "none"
        textArea.value = "";
    
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensagem.value = textoEncriptado
    textArea.value = "";
    
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}


function btnCopiar() {
  if (mensagem.value !== "") {
    copiar();
  } else {
    alert("Não há texto para copiar.");
  }
}

function copiar(){
    mensagem.focus();  // Foca no elemento de texto
    mensagem.select(); // Seleciona o texto
    navigator.clipboard.writeText(mensagem.value)
        .then(() => {
            alert("Texto Copiado");
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
    mensagem.value = "";
}