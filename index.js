var slide=document.querySelector(".slide");
var leftArrow=document.getElementById("leftArrow");
var rightArrow=document.getElementById("rightArrow");


let x=0;

rightArrow.onclick=function(){
    if(x>"-1485"){
        x-=495;
        slide.style.left=x+"px";
    }
}

leftArrow.addEventListener("click",function(){
    if(x<0){
        x+=495;
        slide.style.left=x+"px";
    }
})