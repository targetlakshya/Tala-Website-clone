let menu = document.querySelector("#nav-prt2 i")
let full = document.querySelector("#full-scr-nav")

var flag = 0;
menu.addEventListener("click", function() {
    if (flag === 0){
        full.style.top = "0%"
        document.querySelector('#nav h2').style.color = '#222'
        document.querySelector('#nav h3').style.color = '#222'
        document.querySelector('#nav i').style.color = '#222'
        flag = 1
    } else {
        full.style.top = '-100%';
        document.querySelector('#nav h2').style.color = '#dadada'
        document.querySelector('#nav h3').style.color = '#dadada'
        document.querySelector('#nav i').style.color = '#dadada'
        flag = 0
    }
})

 