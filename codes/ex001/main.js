let numero = document.querySelector("#numero")

let btn = document.querySelector("#btn")

btn.onclick = function(){
	let resultado = document.querySelector("#resultado")
	
	let p =  document.createElement("h6")
	 p.setAttribute("class","card-panel blue white-text z-depth-5")
	 p.innerText =`
Numero ${numero.value}
o dobro e ${numero.value*2}
o triplo e ${numero.value*3}
a Raiz e ${Math.sqrt(numero.value)}`


		
	
    resultado.appendChild(p)
    document.querySelector("input").value = ""

	
	
		
}
