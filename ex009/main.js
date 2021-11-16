function parede(){
	let altura = document.querySelector('[name="altura"]').value
	let largura = document.querySelector('[name="largura"]').value
	let result = document.querySelector("#resultado")


	let area = parseFloat(largura) * parseFloat(altura)

	let tinta = area/2

	let aside = document.createElement('aside')
	
   aside.setAttribute('class','card-panel z-depth-5 blue')
	
	aside.innerHTML=`Sua Parede tem a Dimensão de <b> ${largura}</b>X<b> ${altura} </b> 
	E Sua Area quadrada e de <b> ${area.toFixed(1)}m²</b>
	Para Pinta essa Parede voce precisara de <B>${tinta}</B> Litros de tinta.`
	
	result.appendChild(aside)


}
