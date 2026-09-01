function meuForEach(array, callback) {
	//Percorre todos os índices do vetor passado como argumento, usando laço de repetição:
	
	for(let i = 0; i < array.length; i++) {
		//Para cada elemento do vetor, executar uma chamada de callback durante uma iteração do laço:
		callback(array[i]);
	}

}

const nomes = ["Ana", "João", "Carlos"];
meuForEach(nomes, function(elemento) {
	console.log(elemento);
}
);
