function criarContador() {

	let contagem = 0; // contador inicialmente em zero na primeira chamada da função criarContador.

	return function contador() { // cria uma função interna como return da função principal criarContador
	
	contagem++; // como a funcção contador é chamada, a variável contagem ganha um incremento de +1
	return contagem; // no fim, o que é retornado pela função contador é o valor incrementado
	};


}

const contadorA = criarContador(); // cria uma closure

console.log(contadorA()); // 0+1 -> 1
console.log(contadorA()); // 1+1 -> 2

const contadorB = criarContador(); // cria uma segunda closure

console.log(contadorB()); // 0+1 -> 1
