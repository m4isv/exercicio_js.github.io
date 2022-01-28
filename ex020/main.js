//alert("escrever um programa que mostre se tem santo no nome")



function cidade(){

	let cidade = document.querySelector('[name="cidade"]').value.toLowerCase()
	let result = document.querySelector('#resultado')
	
	if(cidade.startsWith('santo'))
	    { result.innerHTML = `A Cidade <b>${cidade}</b> Começa com Santo? <b>Sim</b>  `}

	else 
	    { result.innerHTML = `A Cidade <b>${cidade}</b> <b>Não Comerça com Santo</b>`}

	document.querySelector('input').value = ''

}
