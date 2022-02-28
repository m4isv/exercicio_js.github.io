
let ip = document.querySelector('input[type=text]')
console.log(ip)

let resultado = document.querySelector('#resultado')

let btn = document.querySelector('#btn')


btn.onclick = function(){
    axios.get(`http://ip-api.com/json/${ip.value}`)
     .then(function (response) {
    resultado.innerHTML = `
  
<b>ip:</b> <i>${response.data.query}</i><br>
    
<b>status:</b> <i>${response.data.status}</i><br>
    
<b>pais:</b> <i>${response.data.country}</i><br>
    
<b>codigo do pais:</b> <i>${response.data.countryCode}</i><br>

<b>região:</b> <i>${response.data.region}</i><br>                      
       
<b>nome da região:</b> <i>${response.data.regionName}</i><br>

<b>cidade:</b> <i>${response.data.city}</i><br>   

<b>codigo postal:</b> <i>${response.data.zip}</i><br>

<b>lat:</b> <i>${response.data.lat}</i><br>

<b>lon:</b> <i>${response.data.lon}</i><br>

<b>fuso horario:</b> <i>${response.data.timezone}</i><br>

<b>isp:</b> <i>${response.data.isp}</i><br>

<b>org:</b> <i>${response.data.org}</i><br>

<b>as: </b> <i>${response.data.as}</i><br>`

  })
  
  document.querySelector('input').value = ''
  
}
