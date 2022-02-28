
function texto(){
	let txt = document.querySelector('[name="nome"]').value

	let p = document.querySelector('#result')
	
	let tamanho = txt.replace(' ', '')

	let separa = txt.split(' ')

	p.innerHTML = `Seu Nome E maiúsculas e:  
	<b>${txt.toUpperCase()}</b><br>
	e em Minusculas e: <b>${txt.toLowerCase()}</b><br>
	Seu Nome ao Todo tem <b>${tamanho.length}</b> Letras</br>
	Seu Primeiro Nome e <b>${separa[0] }<b></br>
		`

}
