var svn=document.querySelector("#btn7")
svn.addEventListener("click",()=>{
    document.querySelector("#textbox").value = document.querySelector("#textbox").value +svn.value;
})

var egt=document.querySelector("#btn8")
egt.addEventListener("click",()=>{
    document.querySelector("#textbox").value = document.querySelector("#textbox").value +egt.value;
})

var nin=document.querySelector("#btn9")
nin.addEventListener("click",()=>{
    document.querySelector("#textbox").value = document.querySelector("#textbox").value +nin.value;
})

var fur=document.querySelector("#btn4")
fur.addEventListener("click",()=>{
    document.querySelector("#textbox").value = document.querySelector("#textbox").value +fur.value;
})

var fiv=document.querySelector("#btn5")
fiv.addEventListener("click",()=>{
    document.querySelector("#textbox").value = document.querySelector("#textbox").value +fiv.value;
})

var six=document.querySelector("#btn6")
six.addEventListener("click",()=>{
    document.querySelector("#textbox").value = document.querySelector("#textbox").value +six.value;
})

var one=document.querySelector("#btn1")
one.addEventListener("click",()=>{
    document.querySelector("#textbox").value = document.querySelector("#textbox").value +one.value;
})

var two=document.querySelector("#btn2")
two.addEventListener("click",()=>{
    document.querySelector("#textbox").value = document.querySelector("#textbox").value +two.value;
})

var thr=document.querySelector("#btn3")
thr.addEventListener("click",()=>{
    document.querySelector("#textbox").value = document.querySelector("#textbox").value +thr.value;
})

var zer=document.querySelector("#btn0")
zer.addEventListener("click",()=>{
    document.querySelector("#textbox").value = document.querySelector("#textbox").value +zer.value;
})


var clear=document.querySelector("#clear")
clear.addEventListener("click",()=>{
    document.querySelector("#textbox").value = "";
})

var mod=document.querySelector("#mod")
mod.addEventListener("click",()=>{
    document.querySelector("#textbox").value = document.querySelector("#textbox").value +mod.value;
})

var div=document.querySelector("#div")
div.addEventListener("click",()=>{
    document.querySelector("#textbox").value = document.querySelector("#textbox").value +div.value;
})

var mlt=document.querySelector("#mlt")
mlt.addEventListener("click",()=>{
    document.querySelector("#textbox").value = document.querySelector("#textbox").value +mlt.value;
})

var sub=document.querySelector("#sub")
sub.addEventListener("click",()=>{
    document.querySelector("#textbox").value = document.querySelector("#textbox").value +sub.value;
})

var add=document.querySelector("#add")
add.addEventListener("click",()=>{
    document.querySelector("#textbox").value = document.querySelector("#textbox").value +add.value;
})

var dec=document.querySelector("#dot")
dec.addEventListener("click",()=>{
    document.querySelector("#textbox").value = document.querySelector("#textbox").value +dec.value;
})


function solve(){
 var txt=document.querySelector("#textbox")
 let res=eval(txt.value)
 txt.value=res;
}