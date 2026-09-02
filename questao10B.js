


// Solução 2 (closure):


function criarCallback(numero_i) {

	return function () {
		console.log(numero_i);
	};

}

for (var i = 0; i<5; i++) {

	setTimeout(
	criarCallback(i),
	1000
	);

}
