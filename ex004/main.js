function media(){
  let nota1 = document.querySelector('[name="nota1"]').value
  
  let nota2 = document.querySelector('[name="nota2"]').value
  
  let media = (parseFloat(nota1)+parseFloat(nota2))/2

  let result = document.querySelector("#result")
	result.innerHTML=`A Media entrer ${nota1} E ${nota2} e ${media}`
}
