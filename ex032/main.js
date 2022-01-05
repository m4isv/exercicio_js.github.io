


document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/08/c7/50/08c750f04ab654dbef2c9d8c294f8a0b--gears-beautiful-places.jpg')";



document.body.style.backgroundRepeat = "no-repeat"
document.body.style.backgroundSize = "cover"
document.body.style.backgroundAttachment = "fixed"




const myInterval = setInterval(myTimer, 1000)

//funcao da hora
function myTimer() {
	const date = new Date()
	document.getElementById("demo").innerHTML = date.toLocaleTimeString()
}


