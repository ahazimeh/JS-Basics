var input = document.getElementById("name");


var div = document.createElement('div');
// set style
// div.style.color = 'red';
// better to use CSS though - just set class
document.body.appendChild(div);
input.addEventListener("change",function(e){
    div.innerHTML = "<b>"+input.value+"</b>";
});