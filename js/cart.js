
let total=1478645

document.getElementById("qt1").addEventListener('input',() =>{
    document.getElementById("tot1").innerHTML="$"+Number(document.getElementById("qt1").value)*223800
    document.getElementById("tot6").innerHTML="$"+(223800+total)
    total+=223800
})

document.getElementById("qt2").addEventListener('input',() =>{
    document.getElementById("tot2").innerHTML="$"+Number(document.getElementById("qt2").value)*845000
    document.getElementById("tot6").innerHTML="$"+(845000+total)
    total+=845000
})

document.getElementById("qt3").addEventListener('input',() =>{
    document.getElementById("tot3").innerHTML="$"+Number(document.getElementById("qt3").value)*126895
    document.getElementById("tot6").innerHTML="$"+(126895+total)
    total+=126895
})

document.getElementById("qt4").addEventListener('input',() =>{
    document.getElementById("tot4").innerHTML="$"+Number(document.getElementById("qt4").value)*190400
    document.getElementById("tot6").innerHTML="$"+(190400+total)
    total+=190400
})

document.getElementById("qt5").addEventListener('input',() =>{
    document.getElementById("tot5").innerHTML="$"+Number(document.getElementById("qt5").value)*92550
    document.getElementById("tot6").innerHTML="$"+(92550+total)
    total+=92550
})