function hipotenusa(){
	let co = document.querySelector('[name="oposto"]').value
	let ca  = document.querySelector('[name="ad"]').value
	let p = document.querySelector('#result')

	let hip = (co **2 + ca **2) ** (1/2)


	p.innerHTML = `A Hipotenusa Vai Medir ${hip.toFixed(2)}`


}
