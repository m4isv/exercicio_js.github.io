let numb1 = document.querySelector("#number1")

let numb2 = document.querySelector("#number2")

let btn = document.querySelector("#btn")



btn.onclick = function(){
	
	let result = document.querySelector("#resultado")
	
	let p = document.createElement("p")
	p.setAttribute("class", "card-panel blue white-text")
	p.innerHTML= `A Soma Entrer ${numb1.value} e ${numb2.value} e ${parseInt(numb1.value) + parseInt(numb2.value)}`
	
	result.appendChild(p)
	
	document.querySelector("#number1").value = ""
	document.querySelector("#number2").value = ""
	



}
