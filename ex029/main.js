let btn=document.querySelector("#btn")
let numero=document.querySelector("#numero")



btn.onclick=function(){
	function convertToBinary1 (number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    //console.log(binary)
    
    //func dentro da outra
    let result=document.querySelector("#resultado")
	
	     result.innerHTML=`o Numero <b>${numero.value}</b> em binario e <b>${binary}</b>`
  
}

	convertToBinary1(numero.value)

   document.querySelector("input").value = ''
}
