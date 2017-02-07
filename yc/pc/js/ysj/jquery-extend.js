!function(){

	$.fn.scrollImg = function(o){  
		return $(this).each(function(){
			var $this = $(this);
			o = $.extend({  
			    aLi : $('li', $this),
				child :  $('ul', $this), 
				margin : 0, 
				Atimer : 5000, 
				arrowLeft : $('.arrow-left',  $this),  
				arrowRight : $('.arrow-right',  $this),
				showLeng : 1                          
			},o);  

			var _this = $this , ow = o.aLi.outerWidth()+o.margin+1 , leng = o.aLi.length , oW = ow * leng , time;
			if(o.aLi.length < o.showLeng) return;	
	        o.child.html(o.child.html()+o.child.html());    
			o.child.width( oW * 2 );  
			o.arrowRight.click(function(){ 
			  if(!o.child.is(":animated")){						 
				Animate();
			   }
			}); 
			o.arrowLeft.click(function(){
			  if(!o.child.is(":animated")){							 
				if(o.child.css('left')=='0px'){
					o.child.css({left:-oW});
					o.child.animate({left:'+=' + ow}, 300)
				}else{
					o.child.animate({left:'+=' + ow} ,300)
				}
			  }
			});	
			function Animate(){
				if(o.child.is(":animated")) return;	
				o.child.animate({left: '-=' + ow}, 300, function(){
				  	if(parseInt(o.child.css('left'))<=-oW){
					   o.child.css({left:0});
					}												
				});
			};
			if(!o.Atimer) return;
			_this.hover(function(){
				clearInterval(time);						
			},function(){
				time=setInterval(function(){
					Animate();				  
				},o.Atimer);									 
			}).trigger("mouseleave");       
			
		});
   }

   $.fn.scrollImg2 = function(o){ 
   		return $(this).each(function(){
   			var $this = $(this), oScroll = $this.find('.items-scroll'), oLists = oScroll.find('ul'), oPage = $this.find('.page'), width = oLists.width();
   			oLists.each(function(k){
   				oPage.append('<li class="'+(k==0?'active':'')+'"></li>');
   			});
   			oPage.on('click', 'li', function(){
   				$(this).addClass('active').siblings().removeClass('active');
   				var index = $(this).index();
   				oScroll.stop().animate({left: -index*width});
   				return false;
   			});
   		});
   }
}();