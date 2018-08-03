$(function(){
	$('.container').fullpage({
		 sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
		 verticalCentered:false,
		 navigation:true,
		 afterLoad(link,index){
		 	$('.section').eq(index-1).addClass('now');

		 },
		 onLeave(index,nextIndex,direction){
		 	$('.section').eq(index-1).addClass('leaved');
		 	if (index==6&&nextIndex==7) {
		 		$('.screen7 .star img').each(function(i,item){
		 			$(this).delay(i*400).fadeIn(1000);
		 		});
		 		$('.screen7 .text img').delay(2000).fadeIn(1000);
		 	}

		 },
		  /*最好在组件初始完毕或者插件内容渲染完毕*/
		 afterRender:function(){
			$('.goin').on('click',function () {
                $.fn.fullpage.moveSectionDown();
            });
            
		 	 $('.screen4 .cart').on('transitionend',function(){
			 	$('.screen4 .address').show().find('.add2').fadeIn(1000);
			 	$('.screen4 .text img:first-child').fadeOut(1000);
			 	$('.screen4 .text img:last-child').fadeIn(1000);
			 });

			 $('.screen6 .express').on('transitionend',function(){
			 	$('.screen6 .receive').show();
			 	$('.screen6 .door').fadeIn(1000);
			 	$('.screen6 .buyer').addClass('show');
		 		$('.screen6 .text img:first-child').fadeOut(1000);
			 	$('.screen6 .text img:last-child').fadeIn(1000);
			 });

			 $('.screen8').on('mousemove',function(e){
			 	$('.screen8 .finger').css({
			 		left:e.clientX-170,
			 		top:e.clientY-20
			 	})

			 });

			 $('.screen8 .again').on('click',function(){
			 	//移除之前做动画时加的类
			 	 $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
			 	 //移除通过js和css加的style属性
			 	 $('.content[style]').removeAttr('style');
			 	 $.fn.fullpage.moveTo(1);
			 })
		},
		 scrollingSpeed:1000		
	});

	
}); 