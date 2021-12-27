let peso = document.querySelector('#peso')
let altura = document.querySelector('#altura')
let btn = document.querySelector('#btn')

btn.onclick = function(){
	let result = document.querySelector('#resultado')
	
	let imc = peso.value / (altura.value ** 2)
	let formata = imc.toFixed(1)

    if(imc <18.5){
    	 result.innerHTML= `o imc dessa pessoa e de <b>${formata}</b><br>voce esta abaixo do peso Normal`
        document.querySelector('#peso').value = ''
   document.querySelector('#altura').value = ''
}



   else if(imc >= 18.5 && imc < 25){
   	result.innerHTML = `o imc dessa pessoa e de <b>${formata}</b><br>voce esta na faixa de peso Normal`
    document.querySelector('#peso').value = ''
   document.querySelector('#altura').value = ''
}

   else if(imc >= 30 && imc <  40){
   	result.innerHTML = `o imc dessa pessoa e de <b>${formata}</b><br>voce esta em OBESIDADE`
    document.querySelector('#peso').value = ''
   document.querySelector('#altura').value = ''
}

   else if(imc >= 25 && imc <  30){
   	result.innerHTML = `o imc dessa pessoa e de <b>${formata}</b><br>voce esta em OBESIDADE CUIDADO`
    document.querySelector('#peso').value = ''
   document.querySelector('#altura').value = ''
}

   else if(imc >= 40){
   	result.innerHTML = `o imc dessa pessoa e de <b>${formata}</b><br>voce esta em OBESIDADE MORBIDA CUIDADO`
    document.querySelector('#peso').value = ''
   document.querySelector('#altura').value = ''
}

}

