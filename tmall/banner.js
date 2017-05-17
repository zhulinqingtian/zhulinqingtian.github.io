var bannerbox=document.querySelector(".banner-daohang-bannertu");
var pictures=document.querySelectorAll(".bpic");
var btns=document.querySelectorAll(".lunbodian_box li");

console.log(pictures)
btns.forEach(function(ele,index){
    ele.onmouseover=function(){
        num=index;
        for(var i=0;i<btns.length;i++){
            btns[i].style.background="rgba(0,0,0,0.5)";
            pictures[i].style.opacity=0.5;
            pictures[i].style.zIndex=2;

        }
        this.style.background="rgba(255,255,255,0.5)";
        pictures[index].style.opacity=1;
        pictures[index].style.zIndex=999;
    }

})