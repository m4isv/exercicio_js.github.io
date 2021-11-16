function num(){
	let numero = document.querySelector('[name="numero"]').value
	let result = document.querySelector('#result')
	
	let u = numero / 1 % 10
	let d = numero / 10 % 10
	let c = numero / 100 % 10
	let m = numero / 1000 % 10

	result.innerHTML = `Analizando o numero ${numero}.
	<br>
	Unidade <b> ${parseInt(u)} </b>
	<br>
	Dezena <b> ${parseInt(d)} </b>
	<br>
	Centena <b>  ${parseInt(c)} </b>
	<br>
	Milhar <b> ${parseInt(m)} </b>

		`


}

