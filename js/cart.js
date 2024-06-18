
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


document.getElementById("dl1").addEventListener('click', (event) => {
    if (event.target && event.target.id === "l1") {
        document.getElementById("dl1").innerHTML = '<i class="fa-solid fa-heart" id="fl1"></i>';
    } else if (event.target && event.target.id === "fl1") {
        document.getElementById("dl1").innerHTML = '<i class="fa-regular fa-heart" id="l1"></i>';
    }
});


document.getElementById("dl2").addEventListener('click', (event) => {
    if (event.target && event.target.id === "l2") {
        document.getElementById("dl2").innerHTML = '<i class="fa-solid fa-heart" id="fl2"></i>';
    } else if (event.target && event.target.id === "fl2") {
        document.getElementById("dl2").innerHTML = '<i class="fa-regular fa-heart" id="l2"></i>';
    }
});


document.getElementById("dl3").addEventListener('click', (event) => {
    if (event.target && event.target.id === "l3") {
        document.getElementById("dl3").innerHTML = '<i class="fa-solid fa-heart" id="fl3"></i>';
    } else if (event.target && event.target.id === "fl3") {
        document.getElementById("dl3").innerHTML = '<i class="fa-regular fa-heart" id="l3"></i>';
    }
});


document.getElementById("dl4").addEventListener('click', (event) => {
    if (event.target && event.target.id === "l4") {
        document.getElementById("dl4").innerHTML = '<i class="fa-solid fa-heart" id="fl4"></i>';
    } else if (event.target && event.target.id === "fl4") {
        document.getElementById("dl4").innerHTML = '<i class="fa-regular fa-heart" id="l4"></i>';
    }
});


document.getElementById("dl5").addEventListener('click', (event) => {
    if (event.target && event.target.id === "l5") {
        document.getElementById("dl5").innerHTML = '<i class="fa-solid fa-heart" id="fl5"></i>';
    } else if (event.target && event.target.id === "fl5") {
        document.getElementById("dl5").innerHTML = '<i class="fa-regular fa-heart" id="l5"></i>';
    }
});

document.getElementById("r1").addEventListener('click', () =>{
    document.getElementById("box1").style.display="none";
    total=total-(Number(document.getElementById("qt1").value)*223800)
     document.getElementById("tot6").innerHTML="$"+total
})

document.getElementById("r2").addEventListener('click', () =>{
    document.getElementById("box2").style.display="none";
    total=total-(Number(document.getElementById("qt2").value)*845000)
     document.getElementById("tot6").innerHTML="$"+total
})

document.getElementById("r3").addEventListener('click', () =>{
    document.getElementById("box3").style.display="none";
    total=total-(Number(document.getElementById("qt3").value)*126895)
     document.getElementById("tot6").innerHTML="$"+total
})

document.getElementById("r4").addEventListener('click', () =>{
    document.getElementById("box4").style.display="none";
    total=total-(Number(document.getElementById("qt4").value)*190400)
     document.getElementById("tot6").innerHTML="$"+total
})

document.getElementById("r5").addEventListener('click', () =>{
    document.getElementById("box5").style.display="none";
    total=total-(Number(document.getElementById("qt5").value)*92550)
     document.getElementById("tot6").innerHTML="$"+total
})