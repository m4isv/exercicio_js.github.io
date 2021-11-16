function tabuada(){
	let numero = document.querySelector('[name="numero"]').value
	let resultado=document.querySelector("#resultado")
	console.log(resultado)
	let n = parseInt(numero)
	
	for(let x=1;x<=10;x ++){
		document.write(`${n} X ${x} = ${n*x}<br>`)
	}
}
