const n1 = 8.0
const p1 = 2   

const n2 = 7.5
const p2 = 3

const n3 = 9.0
const p3 = 5

// Calcular a soma dos produtos das notas pelos seus respectivos pesos
const somaProdutos = (n1 * p1) + (n2 * p2) + (n3 * p3);

// Calcular a soma dos pesos
const somaPesos = p1 + p2 + p3;

// Calcular a média ponderada
const media = somaProdutos / somaPesos;

// Exibir a média ponderada no console
console.log("A média ponderada das notas é:", media);
