let btn = document.querySelector("#btn")
let nome = document.querySelector("#nome")


btn.onclick = function(){
	let result = document.querySelector("#resultado")
	
	let conta = nome.value.match(/a/g).length

	result.innerHTML=`
	seu Nome e  <b>${nome.value}</b>
	Seu Nome tem <b>${conta}</b> letras a`
   		

	document.querySelector("input").value = ''	
}
