var shoeSize=prompt("Enter your shoe size");
var birthYear=prompt("Enter your birth year");
result(shoeSize,birthYear);
function result(shoeSize,birthYear){
    alert((shoeSize*2+5)*50-birthYear+1766);
}