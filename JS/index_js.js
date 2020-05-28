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
	});
	$(".imgs img").mouseleave(function(){
		$(this).css("transform","scale(1)");
	});
});
function get(){
	//检测是否识别h5定位功能
	if(navigator.geolocation){
		//调用geolocation API(善于使用接口类navigator.geolocation)中的getCurrentPosition方法
		//这个方法有三个参数，其中有两个是回调函数，只写函数名。   回调函数是人工自己设定的函数，参数为API方法调用得到的结果
		navigator.geolocation.getCurrentPosition(succ,err);//succ回调函数表示成功得到定位信息，是一个getposition   err是错误代码
	}else{
		alert('no-can');
	}
	//自己设定的回调函数要记得参数收结果
	function succ(position){
		//拆分position对象属性coords、timestamp
		var x=position.coords.longitude;
		var y=position.coords.latitude;
		document.getElementById('show').innerHTML='经度'+x+'纬度'+y;
		initAMap(x,y);
	}
	// 当getCurrentPosition调用失败时调用该方法
	function err(error) {
	    switch (error.code) {
		       case error.PERMISSION_DENIED:
	            loc.innerHTML = "用户拒绝地理位置请求."
	            break;
	        case error.POSITION_UNAVAILABLE:
	            loc.innerHTML = "位置信息不可用."
				break;
	        case error.TIMEOUT:
	            loc.innerHTML = "获取位置信息请求超时."
	            break;
			case error.UNKNOWN_ERROR:
	            loc.innerHTML = "一个未知错误发生."
	            break;
	    }
	}
}
function initAMap(x,y){
				//画百度地图
				//1.创建百度地图对象
				var map=new AMap.Map('ditu');
				//2.创建中心点
				var point=new AMap.LngLat(x,y);
				//3.以point为中心画级别地图
				map.setCenter(point);
				map.setZoom(x,y);
}
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