//点击效果
$(function(){
 $(".days-title li").click( function () {
         $(".days-title li").removeClass("over");
         $(this).addClass("over");
         //1. get object id
         var my_id = $(this).attr('id');
         //2. deal it
         my_id = my_id.replace('days-title', '');
         my_id = 'days-title_'+my_id;
         //3. display the object layout
         $("[id^='days-title_']").attr('style', 'display:none;');
         $('#'+my_id).attr('style', '');
     });
	 //每次触发效果
	
var day = new Date(Date.parse(new Date()));   
 var today = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');  
 var week = today[day.getDay()]; 
 var qMon=day.getMonth()+1; 
 var qDay = day.getDate();
 var day1 = new Date;
 var w = day1.getDay();
 var n = (w == 0 ? 7 : w) - 1;
 day1.setDate(day1.getDate() - n);
$(".days-title li").each(function(i){

//$(".days-title").find("li:eq(i)").children(".days-n").text(day1.getDate());
var ccc=$(".days-title li").eq(i).find("span").eq(1).text(day1.getDate());
$(".days-title li").eq(i).find("span").eq(2).text((day1.getMonth()+1)+"月");

 //$(".days-title").find("li:eq(i)").children(".days-nb").text((day1.getMonth()+1)+"月");
  day1.setDate(day1.getDate() + 1);
      // $(this).attr("class","");
   //if($(this).text().indexOf(week)!=-1){
   //   $(this).attr("class","on");     
   // }
});
setInterval(function(){startaa()},50000);
window.onload=function()//用window的onload事件，窗体加载完毕的时候
{
startaa();
}
function startaa() {
	
day1s = new Date(Date.parse(new Date())); 
var vYear = day1s.getFullYear();
var vMon = day1s.getMonth() + 1;
var vDay = day1s.getDate();
 var h=day1s.getHours();
 var mons=day1s.getMinutes();
console.log(mons);
 if(week=="星期一")
 {$(".days-title li").eq(0).trigger("click");
  $("#days-title_1").each(function(i,item){
       
          if(h==9||h==10||h==11&&mons<35){
       $(this).find("li:eq(0)").addClass("over")
       }else if(h==11&&mons>=35||h==12){
		   $(this).find("li:eq(0)").removeClass("over");
         $(this).find("li:eq(1)").addClass("over")
       }else if(h>=13&&h<15){
		   $(this).find("li:eq(1)").removeClass("over");
         $(this).find("li:eq(2)").addClass("over")
       }else if(h>=15&&h<17){
		   $(this).find("li:eq(2)").removeClass("over");
        $(this).find("li:eq(3)").addClass("over")
       }else if(h>=17&&h<19){
		   $(this).find("li:eq(3)").removeClass("over");
         $(this).find("li:eq(4)").addClass("over")
       }else if(h>=19&&h<21){
        $(this).find("li:eq(4)").removeClass("over");
         $(this).find("li:eq(5)").addClass("over");

       }else if(h>=21&&h<24){
		$(this).find("li:eq(5)").removeClass("over");
        $(this).find("li:eq(6)").addClass("over")
       }
          })
 }else if(week=="星期二"){
 $(".days-title li").eq(1).trigger("click");
  $("#days-title_2").each(function(i,item){

          if(h==9||h==10||h==11&&mons<35){
       $(this).find("li:eq(0)").addClass("over")
       }else if(h==11&&mons>=35||h==12){
		   $(this).find("li:eq(0)").removeClass("over");
         $(this).find("li:eq(1)").addClass("over")
       }else if(h>=13&&h<15){
		   $(this).find("li:eq(1)").removeClass("over");
         $(this).find("li:eq(2)").addClass("over")
       }else if(h>=15&&h<17){
		   $(this).find("li:eq(2)").removeClass("over");
        $(this).find("li:eq(3)").addClass("over")
       }else if(h>=17&&h<19){
		   $(this).find("li:eq(3)").removeClass("over");
         $(this).find("li:eq(4)").addClass("over")
       }else if(h>=19&&h<21){
        $(this).find("li:eq(4)").removeClass("over");
         $(this).find("li:eq(5)").addClass("over");

       }else if(h>=21&&h<24){
		$(this).find("li:eq(5)").removeClass("over");
        $(this).find("li:eq(6)").addClass("over")
       }
          })
 }else if(week=="星期三"){
 $(".days-title li").eq(2).trigger("click");
  $("#days-title_3").each(function(i,item){
       
        if(h==9||h==10||h==11&&mons<35){
       $(this).find("li:eq(0)").addClass("over")
       }else if(h==11&&mons>=35||h==12){
		   $(this).find("li:eq(0)").removeClass("over");
         $(this).find("li:eq(1)").addClass("over")
       }else if(h>=13&&h<15){
		   $(this).find("li:eq(1)").removeClass("over");
         $(this).find("li:eq(2)").addClass("over")
       }else if(h>=15&&h<17){
		   $(this).find("li:eq(2)").removeClass("over");
        $(this).find("li:eq(3)").addClass("over")
       }else if(h>=17&&h<19){
		   $(this).find("li:eq(3)").removeClass("over");
         $(this).find("li:eq(4)").addClass("over")
       }else if(h>=19&&h<21){
        $(this).find("li:eq(4)").removeClass("over");
         $(this).find("li:eq(5)").addClass("over");

       }else if(h>=21&&h<24){
		$(this).find("li:eq(5)").removeClass("over");
        $(this).find("li:eq(6)").addClass("over")
       }
          })
 }else if(week=="星期四"){
 $(".days-title li").eq(3).trigger("click");
  $("#days-title_4").each(function(i,item){
    
      if(h==9||h==10||h==11&&mons<35){
       $(this).find("li:eq(0)").addClass("over")
       }else if(h==11&&mons>=35||h==12){
		   $(this).find("li:eq(0)").removeClass("over");
         $(this).find("li:eq(1)").addClass("over")
       }else if(h>=13&&h<15){
		   $(this).find("li:eq(1)").removeClass("over");
         $(this).find("li:eq(2)").addClass("over")
       }else if(h>=15&&h<17){
		   $(this).find("li:eq(2)").removeClass("over");
        $(this).find("li:eq(3)").addClass("over")
       }else if(h>=17&&h<19){
		   $(this).find("li:eq(3)").removeClass("over");
         $(this).find("li:eq(4)").addClass("over")
       }else if(h>=19&&h<21){
        $(this).find("li:eq(4)").removeClass("over");
         $(this).find("li:eq(5)").addClass("over");

       }else if(h>=21&&h<24){
		$(this).find("li:eq(5)").removeClass("over");
        $(this).find("li:eq(6)").addClass("over")
       }
          })
 }else if(week=="星期五"){
 $(".days-title li").eq(4).trigger("click");
  $("#days-title_5").each(function(i,item){
      
     if(h==9||h==10||h==11&&mons<35){
       $(this).find("li:eq(0)").addClass("over")
       }else if(h==11&&mons>=35||h==12){
		   $(this).find("li:eq(0)").removeClass("over");
         $(this).find("li:eq(1)").addClass("over")
       }else if(h>=13&&h<15){
		   $(this).find("li:eq(1)").removeClass("over");
         $(this).find("li:eq(2)").addClass("over")
       }else if(h>=15&&h<17){
		   $(this).find("li:eq(2)").removeClass("over");
        $(this).find("li:eq(3)").addClass("over")
       }else if(h>=17&&h<19){
		   $(this).find("li:eq(3)").removeClass("over");
         $(this).find("li:eq(4)").addClass("over")
       }else if(h>=19&&h<21){
        $(this).find("li:eq(4)").removeClass("over");
         $(this).find("li:eq(5)").addClass("over");

       }else if(h>=21&&h<24){
		$(this).find("li:eq(5)").removeClass("over");
        $(this).find("li:eq(6)").addClass("over")
       }
          })
 }else if(week=="星期六"){
 $(".days-title li").eq(5).trigger("click");
  $("#days-title_6").each(function(i,item){
      
     if(h==9||h==10||h==11&&mons<35){
       $(this).find("li:eq(0)").addClass("over")
       }else if(h==11&&mons>=35||h==12){
		   $(this).find("li:eq(0)").removeClass("over");
         $(this).find("li:eq(1)").addClass("over")
       }else if(h>=13&&h<15){
		   $(this).find("li:eq(1)").removeClass("over");
         $(this).find("li:eq(2)").addClass("over")
       }else if(h>=15&&h<17){
		   $(this).find("li:eq(2)").removeClass("over");
        $(this).find("li:eq(3)").addClass("over")
       }else if(h>=17&&h<19){
		   $(this).find("li:eq(3)").removeClass("over");
         $(this).find("li:eq(4)").addClass("over")
       }else if(h>=19&&h<21){
        $(this).find("li:eq(4)").removeClass("over");
         $(this).find("li:eq(5)").addClass("over");

       }else if(h>=21&&h<24){
		$(this).find("li:eq(5)").removeClass("over");
        $(this).find("li:eq(6)").addClass("over")
       }
          })
 }else if(week=="星期日"){
 $(".days-title li").eq(6).trigger("click");
  $("#days-title_7").each(function(i,item){
      
      if(h==9||h==10||h==11&&mons<35){
       $(this).find("li:eq(0)").addClass("over")
       }else if(h==11&&mons>=35||h==12){
		   $(this).find("li:eq(0)").removeClass("over");
         $(this).find("li:eq(1)").addClass("over")
       }else if(h>=13&&h<15){
		   $(this).find("li:eq(1)").removeClass("over");
         $(this).find("li:eq(2)").addClass("over")
       }else if(h>=15&&h<17){
		   $(this).find("li:eq(2)").removeClass("over");
        $(this).find("li:eq(3)").addClass("over")
       }else if(h>=17&&h<19){
		   $(this).find("li:eq(3)").removeClass("over");
         $(this).find("li:eq(4)").addClass("over")
       }else if(h>=19&&h<21){
        $(this).find("li:eq(4)").removeClass("over");
         $(this).find("li:eq(5)").addClass("over");

       }else if(h>=21&&h<24){
		$(this).find("li:eq(5)").removeClass("over");
        $(this).find("li:eq(6)").addClass("over")
       }
          })
 }
}
});