const buttons=document.querySelectorAll(".button")
//console.log(button);
const body =document.querySelector("body");
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener("click",function(e){
        console.log(e.target);
        // if(e.target.id=="grey")
        // body.style.backgroundColor=e.target.id;
        // if(e.target.id=="white")
        // body.style.backgroundColor=e.target.id;
        // if(e.target.id=="blue")
        // body.style.backgroundColor=e.target.id;
        // if(e.target.id=="yelow")
        // body.style.backgroundColor=e.target.id;
        body.style.backgroundColor=e.target.id;
    })
})