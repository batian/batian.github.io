$(function(){
	$('.new_box .span_box span').click(function () {
		$('.new_box .span_box span').eq($(this).index()).addClass('dq').siblings().removeClass('dq');
		$('.nr_box .dis ul').hide().eq($(this).index()).show();
	});
})

$(function(){
	$('.name_box > span').hover(function () {
		$('.name_box > span').eq($(this).index()).addClass('dq').siblings().removeClass('dq');
		$('.main_box04 .dis ul').hide().eq($(this).index()).show();
	},function(){});
})

$(function(){
	$('.nr .span_box span').click(function () {
		$('.nr .span_box span').eq($(this).index()).addClass('dq').siblings().removeClass('dq');
		$('.main_box07 .product-wrap').hide().eq($(this).index()).show();
	});
})

$(function(){
	$('.zixun .span_box span').click(function () {
		$('.zixun .span_box span').eq($(this).index()).addClass('dq').siblings().removeClass('dq');
		$('.zixun .nr_box .list ul').hide().eq($(this).index()).show();
	});
})

$(function(){
	$('.xx_03 select').change(function () {
		
		
		
//		$('.xx_03 select option').eq(othis.index());
		
		$('.lb .xx_04').hide().eq($(this).val()).show();
		
	});
})

function GGMarguee() {
    if ($("#De").length > 0) {
        $("#De").marquee({
            yScroll: "bottom"
        });
    }
}

GGMarguee();