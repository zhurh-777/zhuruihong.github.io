$(function(){
	$("#dh ul li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
	});
	$("#dh ul li").mouseenter(function(){
		$(this).addClass("jiaod").siblings("li").removeClass("jiaod");
	});
	$("#dh ul li").mouseleave(function(){
		$(this).removeClass("jiaod");
	});
	$(".imgs img").click(function(){
		$(this).css("transform","scale(1.2)");
	});$(".imgs img").mouseleave(function(){
		$(this).css("transform","scale(1)");
	});
	// 进度条部分
	$(".yc").hide();
	$(".dianz").click(function(){
		$(this).addClass("dz");
		$(".jdt").css("width","85%");
		$(".yc").show();
		$(".yb").hide();
	});
	$(".ydyc").hide();
	$(".bhu").mouseenter(function(){
		$(".ydyc").show();
		$(".yd").hide();
		$(".huag").css("width","85%");
	});
	$(".yc2").hide();
	$(".dianz2").click(function(){
		$(this).addClass("dz");
		$(".jdt2").css("width","85%");
		$(".yc2").show();
		$(".yb2").hide();
	});
	$(".ydyc2").hide();
	$(".bhu2").mouseenter(function(){
		$(".ydyc2").show();
		$(".yd2").hide();
		$(".huag2").css("width","85%");
	});
	
	
	//分页器部分
	$("#mid").children(".lista").eq(0).show().siblings(".lista").hide();
	$(".fy li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		var index1=$(this).index();
		$('#mid').children('.lista').eq(index1-1).show().siblings('.lista').hide();
	});
});

window.onload=function(){
				var can=document.getElementById("can");
				var ctx=can.getContext("2d");
				var image=document.getElementById("image");
				//先画图形路径再裁剪再画图像：方形路径rect()
				var w=10;
					var timer=setInterval(function(){
						ctx.beginPath();
				//裁剪或变形时易迷失，保存一下绘图状态
						ctx.save();
						ctx.rect(0,0,w,600);//蒙板
						ctx.closePath();
						ctx.clip();//裁剪
						ctx.drawImage(image,0,0,image.width,image.height);
						ctx.restore();//要用的时候恢复一下以前的绘图状态
							if(w<600){
								w=w+10;
							}else{
									w=10
							};
					},100);
				}