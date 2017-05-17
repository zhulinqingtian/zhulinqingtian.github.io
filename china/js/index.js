/*
* @Author: lll
* @Date:   2017-04-27 11:11:41
* @Last Modified by:   lll
* @Last Modified time: 2017-04-28 17:23:30
*/

'use strict';

	window.onload=function(){

	var b_box=document.querySelector(".banner");
	var imgs=document.querySelectorAll(".bannerlist img")
	var btns=document.querySelectorAll(".lunbobox li")
	var next12=document.querySelector(".lbpre");
	var pre11=document.querySelector(".lbnext");

	var bbnum=0;
	var z=5;//层级

	function moveb3(){
		// 移走当前图片
		imgs[bbnum].classList.add("leftOut");
		
		btns[bbnum].classList.remove("active");

		bbnum++;

		if(bbnum==imgs.length){
			bbnum=0;
		}

		btns[bbnum].classList.add("active");
		imgs[bbnum].classList.add("leftIn")//后一张
		imgs[bbnum].style.zIndex=z++;
	}
	Array.from(imgs).forEach(function(ele,index){
		ele.addEventListener("animationend",function(){
			ele.className="";
			flag=true;
		})
	})

	//鼠标移入停止
	var tt3=setInterval(moveb3,3000)

	b_box.onmouseover=function(){
		clearInterval(tt3)
	}  
	b_box.onmouseout=function(){
		tt3=setInterval(moveb3,3000)
	}

	//获取轮播点

	btns.forEach(function(btn,index){
		btn.onclick=function(){
			if(bbnum==index){
				return;
			}
			if(index<bbnum){
				imgs[bbnum].classList.add("rightOut");
				imgs[index].classList.add("rightIn");
				
			}else if(index>bbnum){
				imgs[bbnum].classList.add("leftOut");
				imgs[index].classList.add("leftIn");//后一张
				
			}

			//操作第index张
			
			btns[bbnum].classList.remove("active");
			btns[index].classList.add("active");
			imgs[index].style.zIndex=z++;

			bbnum=index;
		}
	})

	var flag=true;
	pre11.onclick=function(){
		if(flag){
			flag=false;
			moveb3();
		}

	}	
	next12.onclick=function(){
		

		if(flag){
			flag=false;
			imgs[bbnum].classList.add("rightOut");
			
			btns[bbnum].classList.remove("active");
			bbnum--;
			if(bbnum==-1){
				bbnum=imgs.length-1;
			}
			imgs[bbnum].classList.add("rightIn");
			imgs[bbnum].style.zIndex=z++;

			btns[bbnum].classList.add("active")
				
		}

	}

	

		//二级标题
		var yijis=document.querySelectorAll(".has_two");
		var erjis=document.querySelectorAll(".istwo");
		var erji_cons=document.querySelectorAll(".istwo li")
		console.log(erji_cons)
		Array.from(yijis).forEach(function(ele,index){
			ele.onmouseover=function(){
				erjis[index].style.display="block";
				ele.style.color="#29A7FE";
				ele.style.background="#F3F3F3";

				Array.from(erji_cons).forEach(function(ele,index){
					ele.onmouseover=function(){
						erji_cons[index].style.color="#29A7FE";
					}
					ele.onmouseout=function(){
						erji_cons[index].style.color="#000";
					}
				})		

			}
			ele.onmouseout=function(){
				erjis[index].style.display="none";
				ele.style.color="#000";
				ele.style.background="#E4E4E4";
			}
		})
	
		// banner右侧小图标
		// var brs=document.querySelectorAll(".quickbtn .top li");
		// var brs_z=document.querySelectorAll(".quickbtn .top li .sele");
		// console.log(brs_z)
		// Array.from(brs).forEach(function(ele,index){
		// 	ele.onmouseover=function(){
		// 		ele.style.transform="scale(1.05)";
		// 		brs_z[index].style.fontSize="10px";
		// 	}
		// 	ele.onmouseout=function(){
		// 		ele.style.transform="scale(1)";
		// 		brs_z[index].style.fontSize="10px";
		// 	}
		// })

		//右侧
		var blue_right=document.querySelectorAll(".blue_right");
				console.log(blue_right)
		Array.from(blue_right).forEach(function(ele,index){
			ele.onmouseover=function(){
				ele.style.transform="translateX(-60px)";
			}
			ele.onmouseout=function(){
				ele.style.transform="translateX(0px)";

			}
		})


		//导航下拉
		var dh_yijis=document.querySelectorAll(".dh_yiji");
		var dh_erjis=document.querySelectorAll(".dh_erji");

		Array.from(dh_yijis).forEach(function(ele,index){
			ele.onmouseover=function(){
				dh_erjis[index].style.display="block";
				ele.style.color="#31ADFC";
			}
			ele.onmouseout=function(){
				dh_erjis[index].style.display="none";
				ele.style.color="";
			}
		})

		//公告


		var gonggaos=document.querySelectorAll(".ggul1 li");//公告内容
    	var gg=document.querySelector(".ggul1");		//公告栏
    	var jtz=document.querySelector(".leftjiantou")
    	var jty=document.querySelector(".rightjiantou");
   		function move3(){
        	var str=gonggaos[0].innerHTML;
        	for(let i=0;i<gonggaos.length-1;i++){
            	gonggaos[i].innerHTML=gonggaos[i+1].innerHTML;
        	}
        	gonggaos[gonggaos.length-1].innerHTML=str;
	
    	}

    	function move4(){
       	 var str1=gonggaos[gonggaos.length-1].innerHTML;
        	for(let i=gonggaos.length-1;i>0;i--){
           	 gonggaos[i].innerHTML=gonggaos[i-1].innerHTML;
       	 }
        	gonggaos[0].innerHTML=str1;

    	}
	
    	var t5=setInterval(move3,5000);
    	gg.onmouseover=function(){
        	clearInterval(t5);
    	}
    	gg.onmouseout=function(){
       	 t5=setInterval(move3,5000);
    	};
    	jtz.onclick=function () {
        	move4()
    	};
    	jty.onclick=function () {
        	move3()
    	}


		//流量放心包
		var inner1=document.querySelector(".yhlist");
		var yhcx=document.querySelector(".yh");
		var btnyhpre=document.querySelector(".yhnext");
		var btnyhnext=document.querySelector(".yhpre");
		var gg_num=4;
		var flag1=true;
		var fangxiang=0;

		function yhlist_move() {
                if(gg_num == 4) {
                    inner1.style.transition = "all 1s";//初始位置  加上过渡属性
                }
                gg_num++;

                // if(gg_num == 16) {
                //     gg_num = 4;
                // }

                inner1.style.left = -295 * gg_num + "px";

              }

         function yhlist_move2() {
                if(gg_num == 8||gg_num==4) {
                    inner1.style.transition = "all 1s";
                }
                gg_num--;

                if(gg_num == -1) {
                    gg_num = 8;
                }

                inner1.style.left = -295 * gg_num + "px";
            }

             var yh_t = setInterval(yhlist_move, 2000);

            yhcx.onmouseover = function() {
                clearInterval(yh_t);
            };
            yhcx.onmouseout = function() {
                if(fangxiang==0){
                    yh_t = setInterval(yhlist_move, 2000);
                }else{
                    yh_t = setInterval(yhlist_move2, 2000);
                }

            };

             inner1.addEventListener("transitionend", function() {
                if(gg_num == 12) {//再走后面会出现空白
                    inner1.style.transition = "none";//回到初始位置，去掉过渡

                    inner1.style.left = -1180+"px"; //回到初始位置   num=4位置
                    gg_num = 4;
                }
                flag1 = true;
            });

             inner1.addEventListener("transitionend",function(){
                if(gg_num == 0) {
                    inner1.style.transition = "none";
                    inner1.style.left = -2360+"px";   //8*-295
                    gg_num = 8;
                }
                flag1 = true;
            });


            btnyhnext.onclick = function() {
                if(flag1){
                    yhlist_move();
                    flag1 = false;
                     console.log(gg_num)
                }
                fangxiang=1;


            }

            btnyhpre.onclick = function() {
                if(flag1) {
                    yhlist_move2();
                    flag1 = false;
                     console.log(gg_num)
                }
                fangxiang=0;

          	}
            // btnyhpre.onclick = function() {

            //     if(flag){
            //     	gg_num-=2;
            //     	flag=false;
            //     }
            // }

}

	// 	function yhlist_move(){
	// 		gg_num=Math.abs(parseInt(gg_num));
	// 		gg_num++;
	// 		yhlist.style.marginLeft=-298*gg_num+"px";

	// 		if(gg_num==7){
	// 		    gg_num=0;
	// 			yhlist.style.marginLeft=0;
	// 		}
	// 		if(gg_num>5){
	// 			gg_num=0;
	// 			yhlist.style.marginLeft=0+"px";
	// 		}
	// 		console.log(gg_num)
			
	// 	}
	// 	//向右
	// 	function yhlist_move2(){

	// 		gg_num--;
	// 		yhlist.style.marginLeft=298*gg_num+"px";

	// 		if(gg_num==0){
	// 			yhlist_li.style.transition="none"
	// 		    gg_num=5;
	// 		    yhlist.style.marginLeft=0+"px";
	// 		}
	// 		if(gg_num<-5){
	// 			yhlist.style.marginLeft=0+"px";
	// 			gg_num=0;
	// 		}
	// 		console.log(gg_num+"cccc")
	// 	}

	// 	var yh_stop=setInterval(yhlist_move2,2000)

		
	// 	yhlist_li.addEventListener("animationend",function(){
	// 		if(gg_num==5){				//播完后清除过度效果
	// 			yhlist.style.transition="none";
	// 			yhlist.style.marginLeft=0;			//播完后回到开始位置继续播放
	// 			gg_num=0;
	// 		}
	// 	})


	// 	yhlist.onmouseover=function(){
	// 		clearInterval(yh_stop)
	// 	}
	// 	yhlist.onmouseout=function(){
	// 		yh_stop=setInterval(yhlist_move2,2000)
	// 	}


	// 	yh_pre.onclick=function(){
	// 		yhlist_move()
	// 		console.log(gg_num)
	// 	}
	// 	yh_next.onclick=function(){
	// 		yhlist_move2()
	// 		console.log(gg_num+"right")
	// 	}
	// }
	
	
	