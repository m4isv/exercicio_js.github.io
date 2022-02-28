function temperatura(){
	let valor = document.querySelector('[name="valor"]').value
	let f = ((9 * parseFloat(valor)) /5) + 32

	let resultado = document.querySelector('#resultado')

	resultado.innerHTML = `A Temperatura de <b> ${valor} Celsius</b> em  <b>Fahrenheit e  ${f} </b>`

}
