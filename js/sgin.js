function dofocus(item){
	$(item).css({
		border:"3px solid white"
	});
}

function dobluru(){
	var reg=/^1\d{10}$/;
	if($("#username-txt").val()==""){
		$("#username-txt").css({
			border:"3px solid red",
			"box-shadow":"0px 0px 30px red"
		})
		$("#username-p").html("Username cannot be empty").css("color","red")
		return false;
	}else if(!localStorage.getItem($("#username-txt").val())){
		$("#username-txt").css({
			border:"3px solid red",
			"box-shadow":"0px 0px 30px red"
		})
		$("#username-p").html("No user name exists").css("color","red")
		return false;
	}else{
		$("#username-txt").css({
			border:"3px solid green",
			"box-shadow":"0px 0px 0px "
		})
		$(".username-icon").css({
			"color":"tomato"
		})
		$("#username-p").html("Input correct").css("color","green")
		return true;
	}
}

function doblurp(){
	if($("#password-txt").val()==""){
		$("#password-txt").css({
			border:"3px solid red",
			"box-shadow":"0px 0px 30px red"
		})
		$("#password-p").html("Password cannot be empty").css("color","red")
		return false;
	}else{
		$("#password-txt").css({
			border:"3px solid green",
			"box-shadow":"0px 0px 0px"
		});
		$(".password-icon").css({
			"color":"tomato"
		});
		$("#password-p").html("Input correct").css("color","green")
		return true;
	}
}

function doall(){
	if(dobluru() && doblurp() && localStorage.getItem($("#username-txt").val())==$("#password-txt").val()){
		var phone=$("#username-txt").val();
		var pass=$("#password-txt").val();
		localStorage.setItem(phone,pass);
		localStorage.setItem("temp",$("#username-txt").val());
		return true;
	}else{
		$("#password-txt").css({
			border:"3px solid red",
			"box-shadow":"0px 0px 30px red"
		});
		$(".password-icon").css({
			color:"white"
		});
		$("#password-p").html("Password error").css("color","red")
		return false
	}

}