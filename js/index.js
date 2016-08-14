window.onload=function(){
	var btn=document.querySelector('.btn');
	var minnav=document.querySelector('.min-nav');
	btn.oncliak=function(){	
		var id=minnav.getAttribute("id");
		if (id=="active") {
			minnav.setAttribute("id","");
		}else{
			minnav.setAttribute("id","active");
		}
	}
	touch.on(btn, 'tap', function(ev){
		var id=minnav.getAttribute("id");
		if (id=="active") {
			minnav.setAttribute("id","");
		}else{
			minnav.setAttribute("id","active");
		}
	})
	//楼层跳转
	var floor=document.querySelectorAll('.floor');
	var eleList=document.querySelectorAll('.nav li');
	var eleList2=document.querySelectorAll('.min-nav li');
	var flTop=[];
	for(var i=0;i<floor.length;i++){
		flTop.push(floor[i].offsetTop);  //把每层楼的offsetTop值保存到数组中
	}
	for(var i=0; i<floor.length; i++){
		eleList2[i].index=i;
		eleList[i].index=i;
		eleList[i].onclick=function(){  //类似于选项卡
			 animate(document.body,{scrollTop:flTop[this.index]});
			 animate(document.documentElement,{scrollTop:flTop[this.index]});
			 console.log(flTop[this.index]);

		};
		touch.on(eleList2[i],'tap', function(ev){
			 animate(document.body,{scrollTop:flTop[this.index]},function(){
			 });

		})
	}	
}