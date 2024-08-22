document.getElementById("btnEncriptar").addEventListener("click", function() {
    let texto = document.getElementById("inputTexto").value;
    let textoEncriptado = encriptar(texto);
    document.getElementById("outputTexto").innerText = textoEncriptado;
});

document.getElementById("btnDesencriptar").addEventListener("click", function() {
    let texto = document.getElementById("inputTexto").value;
    let textoDesencriptado = desencriptar(texto);
    document.getElementById("outputTexto").innerText = textoDesencriptado;
});

function encriptar(texto) {
    // Implementa la lógica de encriptación aquí
    return texto.split('').reverse().join(''); // Ejemplo: invierte el texto
}

function desencriptar(texto) {
    // Implementa la lógica de desencriptación aquí
    return texto.split('').reverse().join(''); // Ejemplo: invierte el texto
}
document.getElementById('inputTexto').addEventListener('input', function() {
    const inputTexto = document.getElementById('inputTexto').value;
    const validationMessage = document.getElementById('validationMessage');
    
    // Expresión regular que acepta solo letras minúsculas y espacios
    const validPattern = /^[a-z\s]*$/;

    // Validar el texto ingresado
    if (!validPattern.test(inputTexto)) {
        validationMessage.style.display = 'block';
    } else {
        validationMessage.style.display = 'none';
    }
});
// Aquí iría la lógica para encriptar y desencriptar utilizando JavaScript
document.getElementById('encrypt-button').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = encrypt(inputText); // Función ficticia para encriptar
    document.getElementById('output-text').textContent = encryptedText;
});

document.getElementById('decrypt-button').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = decrypt(inputText); // Función ficticia para desencriptar
    document.getElementById('output-text').textContent = decryptedText;
});

document.getElementById('copy-button').addEventListener('click', function() {
    const outputText = document.getElementById('output-text').textContent;
    navigator.clipboard.writeText(outputText);
});

