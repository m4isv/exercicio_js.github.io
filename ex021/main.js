let btn = document.querySelector("#btn")
let nome = document.querySelector("#nome")


btn.onclick = function(){
	let result = document.querySelector("#resultado")
	
	let conta = nome.value.match(/a/g).length

	result.innerHTML=`
	o texto   <b>${nome.value}</b>
	 tem <b>${conta}</b> letras a`
   		

	document.querySelector("input").value = ''	
}
