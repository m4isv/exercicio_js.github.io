function salario(){
    let salario = document.querySelector('[name="valor"]').value
    let novo = parseFloat(salario) + (parseFloat(salario) * 15/100)

    let result=document.querySelector("#resultado")
	resultado.innerHTML=`um funcionario que ganhava <B>${salario}</B> 
	agora com <B> 15%</B> de aumenta vai Ganha <B>${novo.toFixed(2)}</B>`

}


