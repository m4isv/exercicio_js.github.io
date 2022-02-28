
let btn = document.querySelector('button')

let r1 = document.querySelector('#txt1')
let r2 = document.querySelector('#txt2')
let r3 = document.querySelector('#txt3')

let result = document.querySelector("#resultado")
	
	
btn.onclick = function(){
	if(r1.value < r2.value + r3.value && r2.value < r1.value + r3.value && r3.value < r1.value + r2.value){
		//result.innerHTML=`Os Seguimentos Acima <b> pode</b> Forma um Triangulo`
		alert(`Os Seguimentos Acima [ pode ] Forma um Triangulo`)
	}

	else{
		//result.innerHTML=`Os Seguimentos Acima <b> Nao pode</b> pode Forma um Triangulo`
		alert(`Os Seguimentos Acima [ Nao pode ] Forma um Triangulo`)
	}

r1.value=""
r2.value=""
r3.value =""

}
