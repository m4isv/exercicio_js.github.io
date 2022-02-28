let numb = Number(prompt("digite um Nunero"))


document.body.innerHTML += `Seu Numero Digitado foi: <strong>${numb}</strong><br>`

document.body.innerHTML += `Raiz e: <strong>${numb ** (0.5)}</strong><br>`

document.body.innerHTML += `numero <strong>${numb}</strong> e inteiro? ${Number.isInteger(numb)}</br>`


document.body.innerHTML += `e NaN <strong>${numb}</strong>? ${Number.isNaN(numb)}</br>`


document.body.innerHTML += `arredondamento para cima <strong>${Math.ceil(numb)}</strong> </br>`

document.body.innerHTML += `arredondamento para Baixo<strong>${Math.floor(numb)}</strong></br>`


document.body.innerHTML += `com duas casas decimais <strong>${numb.toFixed(2)}</strong> </br>`



