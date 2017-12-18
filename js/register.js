

function dofocus(item){
	$(item).css({
		border:"3px solid white"
	});
}

function doblurf(){
	var reg=/^1\d{10}$/;
	if($("#username-txt").val()==""){
		$("#username-txt").css({
			border:"3px solid red",
			"box-shadow":"0px 0px 30px red"
		});
		$(".username-icon").css({
			color:"white"
		});
		$("#username-p").html("User name must be filled in").css("color","red")
		return false;
	}else if(reg.test($("#username-txt").val())){
		$("#username-txt").css({
			border:"3px solid green",
			"box-shadow":"0px 0px 0px "
		});
		$(".username-icon").css({
			color:"tomato"
		});
		$("#username-p").html("Input correct").css("color","green")
		return true;
	}else{
		$("#username-txt").css({
			border:"3px solid red",
			"box-shadow":"0px 0px 30px red"
		});
		$(".username-icon").css({
			color:"white"
		});
		$("#username-p").html("Incorrect format").css("color","red")
		return false;
	}
}

/*function doblurc(){
	if($("#code-txt").val()==""){
		$("#code-txt").css({
			border:"3px solid red",
			"box-shadow":"0px 0px 30px red"
		});
		$("#code-p").html("User name must be filled in").css("color","red")
	}
}*/

$(function(){
	var clock;
		$("#get-code").click(function get(){
			var i=10;
			clearInterval();
			var a=Math.ceil(Math.random(1,8)*9);
			var b=parseInt(Math.random()*10);
			var c=parseInt(Math.random()*10);
			var d=parseInt(Math.random()*10);
			var ef=1000*a+100*b+10*c+d;
			$("#math").html(ef);
			var clock=setInterval(function(){
				i--;
				$("#egain").html(i);
				$("#math").off("click");
				if(i==0){

					$("#egain").html("Regain");
					clearInterval(clock);
					$("#math").on("click",get);

					i=10;
				}
			},1000);
		});

		$("#egain").click(function(){
		var a=Math.ceil(Math.random(1,8)*9);
		var b=parseInt(Math.random()*10);
		var c=parseInt(Math.random()*10);
		var d=parseInt(Math.random()*10);
		var ef=1000*a+100*b+10*c+d;
		$("#math").html(ef);
		console.log('1');
	});

})

function doblurc(){
	if($("#code-txt").val()==$("#math").html() && $("#code-txt").val()!=""){
		$("#code-txt").css({
			border:"3px solid green",
			"box-shadow":"0px 0px 0px "
		});
		$(".code-icon").css({
			color:"tomato"
		});
		$("#code-p").html("Incorrect correct").css("color","green")
		return true;
	}else if($("#code-txt").val()==""){
		$("#code-txt").css({
			border:"3px solid red",
			"box-shadow":"0px 0px 30px red"
		});
		$(".code-icon").css({
			color:"white"
		});
		$("#code-p").html("Input format").css("color","red")
		return false;
	}else{
		$("#code-txt").css({
			border:"3px solid red",
			"box-shadow":"0px 0px 30px red"
		});
		$(".code-icon").css({
			color:"white"
		});
		$("#code-p").html("Input format").css("color","red")
		return false;
	}
}

function doblurp(){
	var reg=/^[a-z\dA-Z]{6,10}$/
	if(reg.test($("#password-txt").val())){
		$("#password-txt").css({
			border:"3px solid green",
			"box-shadow":"0px 0px 0px "
		});
		$(".password-icon").css({
			color:"tomato"
		});
		$("#password-p").html("Incorrect correct").css("color","green")
		return true;
	}else if($("#password-txt").val()==""){
		$("#password-txt").css({
			border:"3px solid red",
			"box-shadow":"0px 0px 30px red"
		});
		$(".password-icon").css({
			color:"white"
		});
		$("#password-p").html("Input format").css("color","red")
		return false;
	}else if($("#password-txt").val()!=$("#password2-txt").val()){
		$("#password2-txt").css({
			border:"3px solid red",
			"box-shadow":"0px 0px 30px red"
		});
		$(".password-icon").css({
			color:"white"
		});
		$("#password2-p").html("Incorrect correct").css("color","red")
		return false;
	}
}

function doblurpp(){
	if($("#password-txt").val()==$("#password2-txt").val() && $("#password2-txt").val()!=""){
		$("#password2-txt").css({
			border:"3px solid green",
			"box-shadow":"0px 0px 0px "
		});
		$(".password2-icon").css({
			color:"tomato"
		});
		$("#password2-p").html("Incorrect correct").css("color","green")
		return true;
	}else if($("#password2-txt").val()==""){
		$("#password2-txt").css({
			border:"3px solid red",
			"box-shadow":"0px 0px 30px red"
		});
		$(".password2-icon").css({
			color:"white"
		});
		$("#password2-p").html("Incorrect correct").css("color","red")
		return false;
	}else{
		$("#password2-txt").css({
			border:"3px solid red",
			"box-shadow":"0px 0px 30px red"
		});
		$(".password2-icon").css({
			color:"white"
		});
		$("#password2-p").html("Incorrect correct").css("color","red")
		return false;
	}

};


function doall(){
	if(doblurf()&&doblurc()&&doblurp()&&doblurpp()){
		var phone=$("#username-txt").val();
		var pass=$("#password-txt").val();	
		localStorage.setItem(phone,pass);
		return true;
		
	}else{
		return false;
	}
}