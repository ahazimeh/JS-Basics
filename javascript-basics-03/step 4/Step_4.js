var password = document.getElementById("password");
var confirmation = document.getElementById("confirmation");
var button = document.getElementsByName("button");

button[0].addEventListener("click",function(){
    if(password.value != confirmation.value){
        password.style="border:solid red;"
        confirmation.style="border:solid red;"
    }
});