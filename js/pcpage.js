// JavaScript Document
window.onload = function(){ 
  var swiper = new Swiper('.swiper-container',{
	speed:400,
	mode : 'vertical', 
	resistance:'100%',
	loop:true,
	mousewheelControl : true,
	grabCursor: true,
	pagination: '.pagination',
    paginationClickable: true,
	onInit:function(){
		$('.slide1').addClass('ani-slide');
		 swiperAnimateCache(swiper);
		 // swiperAnimate(swiper); 
		},

	onSlideChangeEnd:function(swiper){
  		 swiperAnimate(swiper); 
  		console.log(swiper.activeIndex);
  		if(swiper.activeIndex==1){
  			$(".nav").css({
  				"background":"#212121"
  			})
  			$("li").css({
  				color:"white"
  			})
  			$("a").css({
  				color:"white"
  			})
  		}else if(swiper.activeIndex==2){
  			$(".nav").css({
  				"background":"#636363"
  			})
  			$("li").css({
  				color:"white"
  			})
  			$("a").css({
  				color:"white"
  			})
  		}else if(swiper.activeIndex==3){
  			$(".nav").css({
  				"background":"#939393"
  			})
  			$("li").css({
  				color:"white"
  			})
  			$("a").css({
  				color:"white"
  			})
  		}else if(swiper.activeIndex==4){
  			$(".nav").css({
  				"background":"#e8e8e8"
  			})
  			$("li").css({
  				color:"black"
  			})
  			$("a").css({
  				color:"black"
  			})
  		}
  	}



    })
  swiper.wrapperTransitionEnd(function () {//隐藏方法
	$('.ani-slide').removeClass('ani-slide')
	$('.swiper-slide').eq(swiper.activeIndex).addClass('ani-slide')
	},true);
  	


  	}
  
