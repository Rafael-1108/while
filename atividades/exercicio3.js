let somador = 0;
let numero = 1;

while (numero <= 30) {
    somador++;
    numero+= somador;
}
console.log("Resultado: " + (somador + numero));
console.log("Vezes somadas: " + somador);