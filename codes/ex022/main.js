function nome(){
	let nome = document.querySelector('[name="nome"]').value.trim()

	let resultado = document.querySelector('#resultado')
	
	let nomesArray = nome.split(' ')
	let primeiroNome = nomesArray[0]
	let ultimoNome = nomesArray[nomesArray.length - 1]



	resultado.innerHTML = `Seu Primeiro Nome e: <b>${primeiroNome}</b>
	<br>
	Seu Ultimo Nome e: <b>${ultimoNome}</b>


	`

}
