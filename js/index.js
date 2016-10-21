/******jQuery*****/
$(function(){
	// $("#div3").hide();
	function abc(){
		$("#div3").html('ggggggg');
	}
	$("#abc").click(function(){
		// $("#div1").html(22222);
		// $("#div2").hide();
		$("#div3").slideDown(1000,abc());
		//$(selector)
	});



});