function alugar(){
	let dias  = document.querySelector('[name="valor"]').value
	let km = document.querySelector('[name="km"]').value
	let pagor = (dias * 60) + (km * 0.15)
	
	//document.write(`o valor Total a Pagar e ${pagor}`)


	let result = document.querySelector('#resultado')


	result.innerHTML  = `<b>o valor Total a Pagar e R$: ${pagor} </b>`

}
