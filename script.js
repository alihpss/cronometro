var iniciar = document.getElementById('iniciar')
var parar = document.getElementById('parar')
var reiniciar = document.getElementById('reiniciar')

var cronom = document.getElementById('num')

var segundo = document.getElementById('segundo')
var milesimo = document.getElementById('milesimo')
var minuto = document.getElementById('minuto')
var hora = document.getElementById('hora')

iniciar.addEventListener ('click', inicia)
parar.addEventListener ('click', para)
resetar.addEventListener ('click', reseta)

var mil = 0
var seg = 0
var min = 0
var hr = 0

var conta


function inicia() {
    para();
    conta = setInterval(() => { sequencia(); }, 10);
}

function para() {
    clearInterval(conta);
}

function sequencia () {

    if (mil <= 9){
        milesimo.innerHTML = (`0${mil ++}`)
    
        } else if (mil <= 99){
            milesimo.innerHTML =(mil ++)
    
        } else if (mil == 100) {
            mil = 0
            milesimo.innerHTML = (`0${mil}`) 
            mil++
    
            seg++
    
        } 
        
    if (seg <= 9) {
        segundo.innerHTML = (`0${seg}`) 
        
        } else if (seg <= 59) {
            segundo.innerHTML = (seg)

        } else if (seg == 60) {
            seg = 0 
    
            min ++
    
            segundo.innerHTML = (`0${seg}`)
        } 
            
    if (min <= 9) {
        minuto.innerHTML = (`0${min}`)

        } else if ( min <= 59) {
            minuto.innerHTML = (min)
    
        } else if (min == 60) {
            min = 0
            hr ++
    
            minuto.innerHTML = ('0' + min)
        }

    if (hr <= 9) {
        hora.innerHTML = (`0${hr}`)

    }   else if (hr <= 59 ) {
        hora.innerHTML = (hr)

        } else if (hr == 60 ) {
            cronom.innerHTML = ('Limite de tempo atingido!')
        }
}

function reseta() {
    mil = 0
    seg = 0
    min = 0
    hr = 0 

    milesimo.innerHTML = (`0${mil}`)
    segundo.innerHTML = (`0${seg}`)
    minuto.innerHTML = (`0${min}`)
    hora.innerHTML = (`0${hr}`)
}





