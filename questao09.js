function criarContaBancaria (saldoInicial) {
	let saldo = saldoInicial;
	
	return {
	
		depositar(valor) { // primeiro método
			saldo += valor;
		},
		
		sacar(valor) { // segundo método
			if (valor <= saldo) {
				saldo -= valor;
			} else {
				console.log("Saldo insuficiente.");
			}
		},
		
		consultarSaldo() { // terceiro método
			return saldo;
		}
	} // fim do return

}

const conta = criarContaBancaria(1000);
conta.depositar(500);
conta.sacar(200);
console.log(conta.consultarSaldo());
