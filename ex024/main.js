

function velocidade(){
    let velocidade = document.querySelector('[name="carro"]').value
    let result = document.querySelector('#resultado')

	if(velocidade >80){
		multa = (velocidade -80) *7
		alert(`Mutado Voce Excedeu o Limite Permitido que e de 80KM/h. Voce deve Pagar Uma Multa de R$${multa}`)
	}

	else{
	   result.innerHTML = `Tenham um <b>Bom Dia</b> Dirijam Com Segurança`
	}
	
}
