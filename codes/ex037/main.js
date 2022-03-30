function criaHoraDosSegundos(segundos){
	const data = new Date(segundos *1000)
	return data.toLocaleTimeString('pt-br',{
		hour12: false,
		timeZone: 'UTC'
	})
}

//console.log(criaHoraDosSegundos(10))

const relogio = document.querySelector(".relogio")
const inicia = document.querySelector(".iniciar")
const pausar = document.querySelector(".pausar")
const zerar = document.querySelector(".zerar")
let segundos = 0
let timer

function iniciaRelogio(){
    timer = setInterval(function(){
	    segundos++
	    relogio.innerHTML=criaHoraDosSegundos(segundos)
    },1000)
}

inicia.addEventListener('click',function(event){
	relogio.classList.remove('pausado')
	clearInterval(timer)
	iniciaRelogio()
})


pausar.addEventListener('click',function(event){
	clearInterval(timer)
	relogio.classList.add('pausado')
})


zerar.addEventListener('click',function(event){
	clearInterval(timer)
	relogio.innerHTML='00:00:00'
	segundos=0
	relogio.classList.remove('pausado')
})

