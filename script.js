const botonEncriptar = document.querySelector('.btnEncriptar');
const botonDesencriptar = document.querySelector('.btnDesencriptar');
const figura = document.querySelector('.containerFig');
const contenedor = document.querySelector('.containerP');
const resultado = document.querySelector('.textResult');

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
	ocultarAdelante();
	const cajatexto = recuperarTexto();
	resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
	ocultarAdelante();
	const cajatexto = recuperarTexto();
	resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
	const cajatexto = document.querySelector('.boxText');
	return cajatexto.value;
}

function ocultarAdelante() {
	figura.classList.add('ocultar');
	contenedor.classList.add('ocultar');
}

function encriptarTexto(mensaje) {
	var texto = mensaje;
	var textoFinal = '';

	for (let i = 0; i < texto.length; i++) {
		if (texto[i] == 'a') {
			textoFinal = textoFinal + 'ai';
		} else if (texto[i] == 'e') {
			textoFinal = textoFinal + 'enter';
		} else if (texto[i] == 'i') {
			textoFinal = textoFinal + 'imes';
		} else if (texto[i] == 'o') {
			textoFinal = textoFinal + 'ober';
		} else if (texto[i] == 'u') {
			textoFinal = textoFinal + 'ufat';
		} else {
			textoFinal = textoFinal + texto[i];
		}
	}
	return textoFinal;
}

function desencriptarTexto(mensaje) {
	var texto = mensaje;
	var textoFinal = '';

	for (let i = 0; i < texto.length; i++) {
		if (texto[i] == 'a') {
			textoFinal = textoFinal + 'a';
			i = i + 1;
		} else if (texto[i] == 'e') {
			textoFinal = textoFinal + 'e';
			i = i + 4;
		} else if (texto[i] == 'i') {
			textoFinal = textoFinal + 'i';
			i = i + 3;
		} else if (texto[i] == 'o') {
			textoFinal = textoFinal + 'o';
			i = i + 3;
		} else if (texto[i] == 'u') {
			textoFinal = textoFinal + 'u';
			i = i + 3;
		} else {
			textoFinal = textoFinal + texto[i];
		}
	}

	return textoFinal;
}

const btnCopiar = document.querySelector('.btnCopy');
btnCopiar.addEventListener(
	'click',
	(copiar = () => {
		let contenido = document.querySelector('.textResult').textContent;
		navigator.clipboard.writeText(contenido);
	}),
);
