
let btn = document.querySelector("#btn")

btn.addEventListener("click",function(){
	let ano = document.querySelector("#ano")
	let result = document.querySelector("#resultado")
	
	//check
	const data = new Date()
	atual = data.getFullYear()
	nasc = ano.value
	
	idade = atual - nasc 
	if(idade == 18){
	    result.innerHTML=`quem nasceu em <b>${nasc}</b> tem <b>${idade}</b> anos em <b>${atual}</b> voce tem que se alista imediatamente`
	
}

    else if(idade <18){
        saldo =  18 - idade
	    ano = atual + saldo
	    
	    result.innerHTML=`quem nasceu em <b>${nasc}</b> tem <b>${idade}</b> anos, ainda faltam  <b>${saldo}</b> anos para o alistamento Militar Seu Alistamento sera em <b>${ano}</b>`
	
}

    else if(idade >18){
        saldo = idade - 18
	    ano = atual - saldo
	    result.innerHTML=`quem nasceu em <b>${nasc}</b> tem <b>${idade}</b> anos,
	    voce ja deveria te se alistado hà <b>${saldo}</b> anos Seu Alistamento foi
	    em <b>${ano}</b>`
}

	
	document.querySelector("input").value = ''
})
