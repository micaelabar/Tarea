// Función para verificar si una palabra termina en "ciòn" y comienza con una vocal
function cumpleCondicion(palabra) {
    // Expresión regular para verificar la condición
    const regex = /^[aeiouAEIOU].*ciòn$/;

    // Verificar si la palabra cumple con la expresión regular
    return regex.test(palabra);
}

// Array de palabras de ejemplo
const palabras = ["emociòn", "atención", "acción", "elección"];

// Imprimir las palabras que cumplen con la condición
palabras.forEach(palabra => {
    if (cumpleCondicion(palabra)) {
        console.log(palabra);
    }
});