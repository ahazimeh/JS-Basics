var show = document.getElementById("show");
var hide = document.getElementById("hide");
var texte = document.getElementById("texte");

hide.addEventListener("click",function(){
    texte.style.display="none";
});
show.addEventListener("click",function(){
    texte.style.display="";
});
