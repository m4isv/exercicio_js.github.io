function produto(){
	let preco = document.querySelector('[name="preco"]').value
	
let novo = parseFloat(preco) - (parseFloat(preco) * 5/100)
	
	let result = document.querySelector(".resultado")
	
	let p=document.createElement("p")
	
	p.setAttribute("class","card-panel z-depth-5 blue")
	
	p.innerHTML=`um produto que custava <B>${preco}</B> 
Na Nova Promoção com <b>5%</b> de desconto
 Vai Custa <B>${novo}R$</B>`
	result.appendChild(p)
	document.querySelector("input").value=''


}
