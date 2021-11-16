function dinheiro(){
	let real = document.querySelector('[name="dinheiro"]').value
	let result = document.querySelector('#resultado')

	let dolar = parseFloat(real) / 5.54 

	let p = document.createElement('p')
	p.setAttribute('class','card-panel blue z-depth-5')
	p.innerHTML=`Com ${real}R$ voce pode compra ${dolar.toFixed(1)} Dolares U$.`

	result.appendChild(p)

}
