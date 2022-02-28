
function distancia(){
    let distancia = document.querySelector("#txt").value
    let result = document.querySelector('#resultado')
	

   if(distancia <=20){
	preco = distancia * 0.50
	result.innerHTML = `VOCE esta Preste a Fazer uma Viagem de ${distancia} Km, o Total da Sua Parssagem a pagar Sera de R$${preco}`
	
	}

    else{ 
	
	preco = distancia *0.45
	result.innerHTML = `VOCE esta Preste a Fazer uma Viagem de ${distancia} Km, o Total da Sua Parssagem a pagar Sera de R$${preco}`

	}

	
}
