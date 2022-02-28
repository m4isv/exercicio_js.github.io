
let ano = document.querySelector('#txt')
let p = document.querySelector('#p')
let botao = document.querySelector('#botao')


botao.onclick = function ok(){
    if(ano.value %4==0 && ano.value % 100 != 0 || ano.value % 400==0){
	    p.innerHTML = `o Ano ${ano.value} e Bissexto`
    }

    else {
	    p.innerHTML = `O Ano ${ano.value} Não e Bissexto`
    }
}
