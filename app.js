const firstScreen = document.querySelector(".first")
const secondScreen = document.querySelector(".second")
const main = document.querySelector(".main")
let op;

main.addEventListener("click", (e) => {
    console.log(e.target)


    if (e.target.classList.contains("num")) {
        if(secondScreen.innerHTML=="0" ){secondScreen.innerHTML=""}
        
        secondScreen.innerHTML += e.target.textContent
        console.log(e.target.textContent)
    }
    if (e.target.classList.contains("op")) {
        op = e.target.textContent
        
        if (!(secondScreen.innerHTML == 0 || secondScreen.innerHTML == "")) {
            secondScreen.innerHTML += op
            firstScreen.innerHTML = secondScreen.innerHTML
            secondScreen.innerHTML = ""
        }
    }
    if(e.target.classList.contains("eq")){
        if (op == "+") {
            secondScreen.innerHTML = +(firstScreen.innerHTML.slice(0, -1)) + +(secondScreen.innerHTML)
            firstScreen.innerHTML =""
            
        }
        if (op == "-") {
            secondScreen.innerHTML = +(firstScreen.innerHTML.slice(0, -1)) - +(secondScreen.innerHTML)
            firstScreen.innerHTML =""
            
        }
        if (op == "*") {
            secondScreen.innerHTML = +(firstScreen.innerHTML.slice(0, -1)) * +(secondScreen.innerHTML)
            firstScreen.innerHTML =""
            
        }
        if (op == "/") {
            secondScreen.innerHTML = +(firstScreen.innerHTML.slice(0, -1)) / +(secondScreen.innerHTML)
            firstScreen.innerHTML =""
            
        }
        if (op == "%") {
            secondScreen.innerHTML = +(firstScreen.innerHTML.slice(0, -1)) % +(secondScreen.innerHTML)
            firstScreen.innerHTML =""
            
        }
    }
    if(e.target.classList.contains("ac")){
        firstScreen.innerHTML = ""
        secondScreen.innerHTML=0
    }
    if(e.target.classList.contains("plusminus")){
        if (!(secondScreen.innerHTML == 0 || secondScreen.innerHTML == "")) {
            secondScreen.innerHTML=-secondScreen.innerHTML
        }
       
    }
    if (e.target.classList.contains("dot")){
        if(! (secondScreen.innerHTML == 0 || secondScreen.innerHTML == "") ){
            secondScreen.innerHTML += e.target.textContent
        }
    }
   
})