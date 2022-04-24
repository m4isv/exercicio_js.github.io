const inputTarefa=document.querySelector("input")

const btnTarefa=document.querySelector(".btn")

const tarefas=document.querySelector(".tarefas")


//limpa imput
limpa_impute=()=>{ document.querySelector("input").value = "" }


//criar botão apagar
function botaoBotaoApagar(li){
	li.innerText += "  "
	const botaoApagar=document.createElement("button")
	botaoApagar.innerText="apagar"
	botaoApagar.classList.add("apagar")
	botaoApagar.setAttribute('class', 'apagar')
	botaoApagar.setAttribute('title', 'apagar esta Tarefa')
	
	li.appendChild(botaoApagar)
}

//criar uma li
function criarLi(){
	const li=document.createElement("li")
		return li
}

//criar tarefa
function criarTarefa(textoInput){
	//console.log(textoInput)
	const li=criarLi()
	li.innerText=textoInput
	tarefas.appendChild(li)
	botaoBotaoApagar(li)
}



btnTarefa.addEventListener("click", () => {
        if(!inputTarefa.value)return
        
        criarTarefa(inputTarefa.value)
        limpa_impute()
        
})



//qual elem ta sendo clicado
document.addEventListener("click", function(e){
	elemento = e.target
	if(elemento.classList.contains("apagar") ){
		elemento.parentElement.remove()
		
}

	

})
