$('.gouwuche').mouseenter(function(){
	$('.trap').slideDown(function(){
		$(this).stop();
	});
}).mouseleave(function(){
	$('.trap').slideUp();
})

$('.search').click(function(){
	$('span').fadeOut();
	$('this').css('border','#FF6700');
})

$('.header_nav>ul>li').mouseenter(function(){
	$('.header_nav1').slideDown(function(){
		$(this).stop();
	});
	
}).mouseleave(function(){

	$('.header_nav1').slideUp(function(){
		$(this).stop();
	});
})

/*轮播图*/
var now=0;
	
	var len=$('#lunbo>.img>li').length;
	// console.log(len);
	
	function run(){
		
		s=setInterval(function(){
			
			$('#lunbo>.img>li').hide();
			
			$('#lunbo>.num>li').css('background','#060B1D');
			
			if(now>=len-1){
				
				now=0;
			}else{
				now++;
			}
			
			$('#lunbo>.img>li:eq('+now+')').fadeIn();
			
			$('#lunbo>.num>li:eq('+now+')').css('background','white');
		},2000);
	
	}
	
	run();

	
	$('#lunbo').mouseover(function(){
		
		clearInterval(s);
		
		$('.left,.right').show();
	
	}).mouseout(function(){
		run();
	});


	//设置鼠标移入数字显示相对应的图片
	$('#lunbo>.num>li').click(function(){
		//清除定时器
		clearInterval(s);
		
		//以前显示的数字和图片隐藏
		//当前隐藏图片
		$('#lunbo>.img>li').hide();
		//隐藏当前的数字背景
		$('#lunbo>.num>li').css('background','#060B1D');
		
		
		//显示当前和数字对应的图片
		//先获取当前li数字的下标 
		now=$(this).index();
		//alert(now);
		
		//显示当前图片和数字
		$('#lunbo>.img>li:eq('+now+')').fadeIn();
		$('#lunbo>.num>li:eq('+now+')').css('background','white');
		
	})


	//设置左箭头点击事件
	$('.left').click(function(){
		//alert(now);
		
		//设置下标--
		now--;
		//判断界限
		if(now<0){
			//重新赋值 最大下标 重新走
			now=len-1;
		}
		//点击时当前隐藏数字和图片
		//当前隐藏图片
		$('#lunbo>.img>li').hide();
		//隐藏当前的数字背景
		 $('#lunbo>.num>li').css('background','#060B1D');
		
		//点击后显示图片和数字
		$('#lunbo>.img>li:eq('+now+')').fadeIn();
		$('#lunbo>.num>li:eq('+now+')').css('background','white');
	});

	
	//设置右箭头点击事件
	$('.right').click(function(){
		//alert(now);
		
		//设置下标--
		now++;
		//判断界限 大于等于最大的下标值4
		if(now >len-1){
			now=0;
		
		}
		//点击时当前隐藏数字和图片
		//当前隐藏图片
		$('#lunbo>.img>li').hide();
		//隐藏当前的数字背景
		$('#lunbo>.num>li').css('background','#060B1D');
		
		//点击后显示图片和数字
		$('#lunbo>.img>li:eq('+now+')').fadeIn();
		$('#lunbo>.num>li:eq('+now+')').css('background','white');
	
	});


/*小米明星单品*/
// $('.main1 .main1_title span').mouseenter(function(){
// 	$('this').('')
// })

/*智能硬件*/
// $('.main2_image>.img2').mouseenter(function(){
// 	$('this').css
// })

/*搭配*/
$('.main3_image>.spec').mouseenter(function(){
 	$('.special').slideDown();
 }).mouseleave(function(){
 	$('.special').fadeOut();
 });

/*选项卡*/
$(function(){
	var tab_t_li=$('.main3 .tab_t ul li');
	// console.log(tab_t_li);

	//设置li移入事件
	tab_t_li.mouseenter(function(){
		// alert(111);
		$(this).addClass('selected').siblings().removeClass('selected');
				
				//获取当前li的下标
				var index=$(this).index();
				//alert(index);
				
				//设置显示相对应的内容显示 其余隐藏
				$('.tab_c>div').eq(index).show().siblings().hide();
	})
})

/*搭配中的选项卡*/
$('.main4_image>.spec').mouseenter(function(){
 	$('.special').slideDown();
 }).mouseleave(function(){
 	$('.special').fadeOut();
 });

$(function(){
	var tab_t_li=$('.main4 .tab_t ul li');
	console.log(tab_t_li);

	//设置li移入事件
	tab_t_li.mouseenter(function(){
		// alert(111);
		$(this).addClass('selected').siblings().removeClass('selected');
				
				//获取当前li的下标
				var index=$(this).index();
				//alert(index);
				
				//设置显示相对应的内容显示 其余隐藏
				$('.main4>.tab_c>div').eq(index).show().siblings().hide();
	})
})

/*周边*/
$('.main5_image>.spec').mouseenter(function(){
 	$('.special').slideDown();
 }).mouseleave(function(){
 	$('.special').fadeOut();
 });

$(function(){
	var tab_t_li=$('.main5 .tab_t ul li');
	console.log(tab_t_li);

	//设置li移入事件
	tab_t_li.mouseenter(function(){
		// alert(111);
		$(this).addClass('selected').siblings().removeClass('selected');
				
				//获取当前li的下标
				var index=$(this).index();
				//alert(index);
				
				//设置显示相对应的内容显示 其余隐藏
				$('.main5>.tab_c>div').eq(index).show().siblings().hide();
	})
})


/*为你推荐*/
 	
$('#pre').css('color','#B0B1BB')
$('#pre').click(function(){
	$('#box').animate({left:'-1233px'})
	$('#next').css('color','#B0B1BB');
	$(this).css('color','');
})
$('#next').click(function(){
	$('#box').animate({left:'0px'})
	$('#next').css('color','')
	$('#pre').css('color','#B0B1BB');
})



/*内容轮播图*/

var aa=0;
	
	var len=$('#lun>.ul1').length;
	console.log(len);
	
	function run(){
		
		s=setInterval(function(){
			
			$('#lun>.ul1').hide();
			
			$('#lun>.num>li').css({"background":"white","border":'1px solid #e5e5e5'});
			
			if(aa>=len-1){
				
				aa=0;
			}else{
				aa++;
			}
			
			$('#lun>.ul1:eq('+aa+')').fadeIn();
			
			$('#lun>.num>li:eq('+aa+')').css({"background":"white","border":"2px solid #FF7D27"});
		},5000000);
	
	}
	
	run();

	
	$('#lun').mouseover(function(){
		
		clearInterval(s);
		
		$('#lun>.left,#lun>.right').show();
	
	}).mouseout(function(){
		run();
	});


	//设置鼠标移入数字显示相对应的图片
	$('#lun>.num>li').click(function(){
		//清除定时器
		clearInterval(s);
		
		//以前显示的数字和图片隐藏
		//当前隐藏图片
		$('#lun>.ul1').hide();
		//隐藏当前的数字背景
		$('#lun>.num>li').css({"background":"#e5e5e5",'border':"1px solid #e5e5e5"});
		
		
		//显示当前和数字对应的图片
		//先获取当前li数字的下标 
		aa=$(this).index();
		//alert(now);
		
		//显示当前图片和数字
		$('#lun>.ul1:eq('+aa+')').fadeIn();
		$('#lun>.num>li:eq('+aa+')').css({"background":"white","border":"2px solid #FF7D27"});
		
	})


	//设置左箭头点击事件
	$('.main8 .main8_image .w1 .left').click(function(){
		//alert(now);
		// alert(1111111)
		//设置下标--
		aa--;
		//判断界限
		if(aa<0){
			//重新赋值 最大下标 重新走
			aa=len-1;
		}
		//点击时当前隐藏数字和图片
		//当前隐藏图片
		$('#lun>.ul1').hide();
		//隐藏当前的数字背景
		 $('#lun>.num>li').css({"background":"#e5e5e5",'border':"1px solid #e5e5e5"});
		
		//点击后显示图片和数字
		$('#lun>.ul1:eq('+aa+')').fadeIn();
		$('#lun>.num>li:eq('+aa+')').css({"background":"white","border":"2px solid #FF7D27"});
	});

	
	//设置右箭头点击事件
	$('.main8>.main8_image>.w1>.right').click(function(){
		//alert(now);
		
		//设置下标--
		aa++;
		//判断界限 大于等于最大的下标值4
		if(aa >len-1){
			aa=0;
		
		}
		//点击时当前隐藏数字和图片
		//当前隐藏图片
		$('#lun>.ul1').hide();
		//隐藏当前的数字背景
		$('#lun>.num>li').css({"background":"#e5e5e5",'border':"1px solid #e5e5e5"});
		
		//点击后显示图片和数字
		$('#lun>.ul1:eq('+aa+')').fadeIn();
		$('#lun>.num>li:eq('+aa+')').css({"background":"white","border":"2px solid #FF7D27"});
	
	});


/*w2*/
var bb=0;
	
	var len=$('#lun1>.ul1').length;
	console.log(len);
	
	function run(){
		
		s=setInterval(function(){
			
			$('#lun1>.ul1').hide();
			
			$('#lun1>.num>li').css({"background":"white","border":'1px solid #e5e5e5'});
			
			if(bb>=len-1){
				
				aa=0;
			}else{
				bb++;
			}
			
			$('#lun1>.ul1:eq('+bb+')').fadeIn();
			
			$('#lun1>.num>li:eq('+bb+')').css({"background":"white","border":"2px solid #FF7D27"});
		},5000000);
	
	}
	
	run();

	
	$('#lun1').mouseover(function(){
		
		clearInterval(s);
		
		$('#lun1>.left,#lun1>.right').show();
	
	}).mouseout(function(){
		run();
	});


	//设置鼠标移入数字显示相对应的图片
	$('#lun1>.num>li').click(function(){
		//清除定时器
		clearInterval(s);
		
		//以前显示的数字和图片隐藏
		//当前隐藏图片
		$('#lun1>.ul1').hide();
		//隐藏当前的数字背景
		$('#lun1>.num>li').css({"background":"#e5e5e5",'border':"1px solid #e5e5e5"});
		
		
		//显示当前和数字对应的图片
		//先获取当前li数字的下标 
		bb=$(this).index();
		//alert(now);
		
		//显示当前图片和数字
		$('#lun1>.ul1:eq('+bb+')').fadeIn();
		$('#lun1>.num>li:eq('+bb+')').css({"background":"white","border":"2px solid #FF7D27"});
		
	})


	//设置左箭头点击事件
	$('.main8 .main8_image .w2 .left1').click(function(){
		//alert(now);
		// alert(1111111)
		//设置下标--
		bb--;
		//判断界限
		if(bb<0){
			//重新赋值 最大下标 重新走
			bb=len-1;
		}
		//点击时当前隐藏数字和图片
		//当前隐藏图片
		$('#lun1>.ul1').hide();
		//隐藏当前的数字背景
		 $('#lun1>.num>li').css({"background":"#e5e5e5",'border':"1px solid #e5e5e5"});
		
		//点击后显示图片和数字
		$('#lun1>.ul1:eq('+bb+')').fadeIn();
		$('#lun1>.num>li:eq('+bb+')').css({"background":"white","border":"2px solid #FF7D27"});
	});

	
	//设置右箭头点击事件
	$('.main8>.main8_image>.w2>.right1').click(function(){
		//alert(now);
		
		//设置下标--
		bb++;
		//判断界限 大于等于最大的下标值4
		if(bb >len-1){
			bb=0;
		
		}
		//点击时当前隐藏数字和图片
		//当前隐藏图片
		$('#lun1>.ul1').hide();
		//隐藏当前的数字背景
		$('#lun1>.num>li').css({"background":"#e5e5e5",'border':"1px solid #e5e5e5"});
		
		//点击后显示图片和数字
		$('#lun1>.ul1:eq('+bb+')').fadeIn();
		$('#lun1>.num>li:eq('+bb+')').css({"background":"white","border":"2px solid #FF7D27"});
	
	});

/*w3*/
var cc=0;
	
	var len=$('#lun2>.ul1').length;
	console.log(len);
	
	function run(){
		
		s=setInterval(function(){
			
			$('#lun2>.ul1').hide();
			
			$('#lun2>.num>li').css({"background":"white","border":'1px solid #e5e5e5'});
			
			if(cc>=len-1){
				
				cc=0;
			}else{
				cc++;
			}
			
			$('#lun2>.ul1:eq('+cc+')').fadeIn();
			
			$('#lun2>.num>li:eq('+cc+')').css({"background":"white","border":"2px solid #FF7D27"});
		},5000000);
	
	}
	
	run();

	
	$('#lun2').mouseover(function(){
		
		clearInterval(s);
		
		$('#lun2>.left,#lun2>.right').show();
	
	}).mouseout(function(){
		run();
	});


	//设置鼠标移入数字显示相对应的图片
	$('#lun2>.num>li').click(function(){
		//清除定时器
		clearInterval(s);
		
		//以前显示的数字和图片隐藏
		//当前隐藏图片
		$('#lun2>.ul1').hide();
		//隐藏当前的数字背景
		$('#lun2>.num>li').css({"background":"#e5e5e5",'border':"1px solid #e5e5e5"});
		
		
		//显示当前和数字对应的图片
		//先获取当前li数字的下标 
		cc=$(this).index();
		//alert(now);
		
		//显示当前图片和数字
		$('#lun2>.ul1:eq('+cc+')').fadeIn();
		$('#lun2>.num>li:eq('+cc+')').css({"background":"white","border":"2px solid #FF7D27"});
		
	})


	//设置左箭头点击事件
	$('.main8 .main8_image .w3 .left1').click(function(){
		//alert(now);
		// alert(1111111)
		//设置下标--
		cc--;
		//判断界限
		if(cc<0){
			//重新赋值 最大下标 重新走
			cc=len-1;
		}
		//点击时当前隐藏数字和图片
		//当前隐藏图片
		$('#lun2>.ul1').hide();
		//隐藏当前的数字背景
		 $('#lun2>.num>li').css({"background":"#e5e5e5",'border':"1px solid #e5e5e5"});
		
		//点击后显示图片和数字
		$('#lun2>.ul1:eq('+cc+')').fadeIn();
		$('#lun2>.num>li:eq('+cc+')').css({"background":"white","border":"2px solid #FF7D27"});
	});

	
	//设置右箭头点击事件
	$('.main8>.main8_image>.w3>.right1').click(function(){
		//alert(now);
		
		//设置下标--
		cc++;
		//判断界限 大于等于最大的下标值4
		if(cc >len-1){
			cc=0;
		
		}
		//点击时当前隐藏数字和图片
		//当前隐藏图片
		$('#lun2>.ul1').hide();
		//隐藏当前的数字背景
		$('#lun2>.num>li').css({"background":"#e5e5e5",'border':"1px solid #e5e5e5"});
		
		//点击后显示图片和数字
		$('#lun2>.ul1:eq('+cc+')').fadeIn();
		$('#lun2>.num>li:eq('+cc+')').css({"background":"white","border":"2px solid #FF7D27"});
	
	});

/*w4*/
var dd=0;
	
	var len=$('#lun3>.ul1').length;
	console.log(len);
	
	function run(){
		
		s=setInterval(function(){
			
			$('#lun3>.ul1').hide();
			
			$('#lun3>.num>li').css({"background":"white","border":'1px solid #e5e5e5'});
			
			if(dd>=len-1){
				
				dd=0;
			}else{
				dd++;
			}
			
			$('#lun3>.ul1:eq('+dd+')').fadeIn();
			
			$('#lun3>.num>li:eq('+dd+')').css({"background":"white","border":"2px solid #FF7D27"});
		},5000000);
	
	}
	
	run();

	
	$('#lun3').mouseover(function(){
		
		clearInterval(s);
		
		$('#lun3>.left1,#lun3>.right1').show();
	
	}).mouseout(function(){
		run();
	});


	//设置鼠标移入数字显示相对应的图片
	$('#lun3>.num>li').click(function(){
		//清除定时器
		clearInterval(s);
		
		//以前显示的数字和图片隐藏
		//当前隐藏图片
		$('#lun3>.ul1').hide();
		//隐藏当前的数字背景
		$('#lun3>.num>li').css({"background":"#e5e5e5",'border':"1px solid #e5e5e5"});
		
		
		//显示当前和数字对应的图片
		//先获取当前li数字的下标 
		dd=$(this).index();
		//alert(now);
		
		//显示当前图片和数字
		$('#lun3>.ul1:eq('+dd+')').fadeIn();
		$('#lun3>.num>li:eq('+dd+')').css({"background":"white","border":"2px solid #FF7D27"});
		
	})


	//设置左箭头点击事件
	$('.main8 .main8_image .w4 .left1').click(function(){
		//alert(now);
		// alert(1111111)
		//设置下标--
		dd--;
		//判断界限
		if(dd<0){
			//重新赋值 最大下标 重新走
			dd=len-1;
		}
		//点击时当前隐藏数字和图片
		//当前隐藏图片
		$('#lun3>.ul1').hide();
		//隐藏当前的数字背景
		 $('#lun3>.num>li').css({"background":"#e5e5e5",'border':"1px solid #e5e5e5"});
		
		//点击后显示图片和数字
		$('#lun3>.ul1:eq('+dd+')').fadeIn();
		$('#lun3>.num>li:eq('+dd+')').css({"background":"white","border":"2px solid #FF7D27"});
	});

	
	//设置右箭头点击事件
	$('.main8>.main8_image>.w4>.right1').click(function(){
		//alert(now);
		
		//设置下标--
		dd++;
		//判断界限 大于等于最大的下标值4
		if(dd >len-1){
			dd=0;
		
		}
		//点击时当前隐藏数字和图片
		//当前隐藏图片
		$('#lun3>.ul1').hide();
		//隐藏当前的数字背景
		$('#lun3>.num>li').css({"background":"#e5e5e5",'border':"1px solid #e5e5e5"});
		
		//点击后显示图片和数字
		$('#lun3>.ul1:eq('+dd+')').fadeIn();
		$('#lun3>.num>li:eq('+dd+')').css({"background":"white","border":"2px solid #FF7D27"});
	
	});
