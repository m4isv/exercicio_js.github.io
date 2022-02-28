
botao.onclick = function numero(){
	let a = document.querySelector('[name="n1"]')
	let b = document.querySelector('[name="n2"]')
	let c = document.querySelector('[name="n3"]')
	let resultado = document.querySelector("#resultado")
	let botao = document.querySelector("#botao")
	let todos = [a.value,b.value,c.value]
	let maior = Math.max(...todos)
	let menor = Math.min(...todos)

	
    resultado.innerHTML = `O Maior Valor Digitado Foi <b>${maior}</b> o Menor Valor Digitado Foi  <b>${menor}</b>`
	
}



