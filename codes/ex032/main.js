


document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/d0/28/3f/d0283f4eb78abd248935d692d0d96f29.gif')";



document.body.style.backgroundRepeat = "no-repeat"
document.body.style.backgroundSize = "cover"
document.body.style.backgroundAttachment = "fixed"




const myInterval = setInterval(myTimer, 1000)

//funcao da hora
function myTimer() {
	const date = new Date()
	document.getElementById("demo").innerHTML = date.toLocaleTimeString()
}


