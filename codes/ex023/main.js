function numero(){
    let num = document.querySelector('[name="numero"]').value
    let result = document.querySelector('#resultado')
    
     let maximo =  5
 
    let pc = Math.floor(Math.random() * maximo)
	
    result.innerHTML = `Voce Escolheu o Numero <b>${num}</b> E eu Pensei No Numero <b>${pc}</b>....`
}
