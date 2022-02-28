const myInterval = setInterval(myTimer, 1000)
function myTimer() {
  const date = new Date();
  document.getElementById("txt0").innerHTML = `<b>Hora Atual</b>` + '<br>' + date.toLocaleTimeString();
}



let txt1 = document.querySelector('#txt1')
let lang = window.navigator.language

txt1.innerHTML = `<b>LANG:</b> ${lang}`


let txt2 = document.querySelector('#txt2')
let version = navigator.appVersion
txt2.innerHTML = `<b>VERSION:</b> ${version}`

let txt3 = document.querySelector('#txt3')
let online = navigator.onLine
txt3.innerHTML = `<b>seu brawser esta online:</b> ${online}`

let txt4 = document.querySelector('#txt4')
let platform = navigator.platform
txt4.innerHTML = `<b>platform:</b> ${platform}`

let txt5 = document.querySelector('#txt5')
let agent = navigator.userAgent
txt5.innerHTML = `<b>userAgent:</b> ${agent}`


let txt6 = document.querySelector('#txt6')
let w = window.innerWidth
let h = window.innerHeight
txt6.innerHTML = `
<b>largura: </b> ${w}
<br>
<b>altura:</b> ${h}`
