var img1 = document.getElementById("image1");
var img2 = document.getElementById("image2");
var img3 = document.getElementById("image3");
var img4 = document.getElementById("image4");
var img5 = document.getElementById("image5");

replaceImg();
restoreImg();
function replaceImg(){
    img1.addEventListener("mouseover",function(){
        img1.src="images/image1_2.jpg";
    });
    img2.addEventListener("mouseover",function(){

        img2.src="images/image2_2.jpg";
    });
    img3.addEventListener("mouseover",function(){

        img3.src="images/image3_2.jpg";
    });
    img4.addEventListener("mouseover",function(){

        img4.src="images/image4_2.jpg";
    });
    img5.addEventListener("mouseover",function(){

        img5.src="images/image5_2.jpg";
    });
}




function restoreImg(){
    img1.addEventListener("mouseleave",function(){
        img1.src="images/image1.jpg";
    });
    img2.addEventListener("mouseleave",function(){

        img2.src="images/image2.jpg";
    });
    img3.addEventListener("mouseleave",function(){

        img3.src="images/image3.jpg";
    });
    img4.addEventListener("mouseleave",function(){

        img4.src="images/image4.jpg";
    });
    img5.addEventListener("mouseleave",function(){

        img5.src="images/image5.jpg";
    });
}
