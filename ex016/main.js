function sortear(){
	let aluno1 = document.querySelector('[name="aluno1"]').value

	let aluno2 = document.querySelector('[name="aluno2"]').value

	let aluno3 = document.querySelector('[name="aluno3"]').value

	let alunos = [aluno1, aluno2, aluno3]

	let random = alunos[Math.floor(Math.random()*alunos.length)]
	

	let result = document.querySelector('#result')
	
	result.innerHTML = `O Aluno Escolhido Foi: <b> ${random}</b>`
  
document.querySelector('[name="aluno1"]').value=''
    
document.querySelector('[name="aluno2"]').value=''
    
document.querySelector('[name="aluno3"]').value=''

	
}
