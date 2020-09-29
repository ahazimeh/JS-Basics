var text = document.getElementById("text");
var green = document.getElementsByClassName("color");
green[0].addEventListener("click",function(){
    text.style.color="green";
});
green[1].addEventListener("click",function(){
    text.style.color="red";
});
green[2].addEventListener("click",function(){
    text.style.color="blue";
});