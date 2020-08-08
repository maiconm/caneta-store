$(document).ready(function(){ // cria a função.
	$(".fa-chevron-right").click(function(){
		var imageUrl = "img/caneta4.jpg";
		$(".slider").css("background-image", "url(" + imageUrl + ")");
        $(".slider").css("transition", "0.3s");	
	});
	$(".fa-chevron-left").click(function(){
		var imageUrl = "img/caneta3.jpg";
		$(".slider").css("background-image", "url(" + imageUrl + ")");
		$(".slider").css("transition", "0.3s");	
	});	
});	