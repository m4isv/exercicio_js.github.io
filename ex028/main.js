//alert(`escreva um programa que pergunte o salario do funcionario e calcule o valor do seu aumento.
Para salario superiores a R$1.250.00 ,calcule um aumento de 10%.
Para os inferiores ou inguais,
o aumento e de 15%.`)




let btn = document.querySelector('button')


btn.onclick = function(){

    let textElement = ''
    let salario = document.querySelector('input').value
    
    let pElement = document.createElement('p')
	pElement.setAttribute('class','card blue-grey darken-1')




    if(salario !== ''){
		//verificando o salario
		if(salario <=1250){
			novo = salario + (salario * 15 /100)
			textElement = document.createTextNode(`quem Ganhava R$${salario} Passa a Ganha R$${novo} Agora`)
		}
	    	else{
			novo = salario + (salario * 10 /100)
	   		textElement = document.createTextNode(`quem Ganhava, $R$${salario} Passa a Ganha R$${novo} Agora`)}
    }


   else{
	   	pElement.setAttribute('class','red')
		textElement = document.createTextNode('o Texto Esta Vazio ')
    }


    pElement.appendChild(textElement)



   //recuperando a div para adiciona
   let divElement = document.querySelector('#resultado')
	divElement.appendChild(pElement)

	//limpado o input
	document.querySelector('input').value = ''
    

}
