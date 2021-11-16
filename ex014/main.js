function numero(){
	let num = document.querySelector('[name="numero"]').value

	let p = document.querySelector('#p')

	p.innerHTML = `O Numero Digitado Foi: ${num} e sua Porção inteira e ${parseInt(num)}`
}
