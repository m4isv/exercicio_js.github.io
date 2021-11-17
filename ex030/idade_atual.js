console.clear()


const data = new Date()

atual = data.getFullYear()


nasc = 2005


idade = atual - nasc 

if(idade == 18){
	
	console.log(`quem nasceu em ${nasc} tem ${idade} anos voce tem que se alista imediatamente`)
	
}


else if(idade <18){
	saldo =  18 - idade
	ano = atual + saldo
	
	console.log(`quem nasceu em ${nasc} tem ${idade} anos, ainda faltam  ${saldo} anos para o alistamento Militar`)
	console.log(`Seu Alistamento sera em ${ano}`)
}


else if(idade >18){
	saldo = idade - 18
	ano = atual - saldo
	console.log(`quem nasceu em ${nasc} tem ${idade} anos ,voce ja deveria te se alistado hà ${saldo} anos`)
	console.log(`Seu Alistamento foi em ${ano}`)
}
