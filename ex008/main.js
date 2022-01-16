function dinheiro(){
	let real = document.querySelector('[name="dinheiro"]').value
	let result = document.querySelector('#resultado')

	let dolar = parseFloat(real) / 5.54 

    if( real !=''){
	let p = document.createElement('p')
	p.setAttribute('class','card-panel blue z-depth-5')
	p.innerHTML=`Com ${real}R$ voce pode compra ${dolar.toFixed(1)} Dolares U$.`

	result.appendChild(p)
	document.querySelector('[name="dinheiro"]').value = ''  }

    else{

	let p = document.createElement('p')
	p.setAttribute('class','card-panel red z-depth-5')
	p.innerHTML=`o texto esta vazio`

	result.appendChild(p)
	document.querySelector('[name="dinheiro"]').value = '' 

    }

}


