function metro(){
	let metro = document.querySelector('[name="metro"]').value
	let medida = parseFloat(metro)
	let cm = medida * 100
	let mm = medida * 1000

	let result = document.querySelector("#resultado")
	let p = document.createElement("p")
	p.setAttribute("class","card-panel blue z-depth-5")
	
	result.appendChild(p)
	
	p.innerHTML=`A Medida de ${medida}m corresponde a ${cm}cm  E ${mm}mm`
	
	document.querySelector("input").value = ""

}
