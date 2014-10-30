$(document).ready(function() {

	$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0" >');
	$('body').append('<div class="inspectr" style="width:auto;height:auto;padding:10px;background:rgba(12,12,12,0.5);position:absolute;top:0;right:0;font-family:arial, sans-serif;font-size:12px;line-height:13px;color:#ffffff;min-width:200px;"></div>');


	var dim = $(window).width() + ' x ' + $(window).height();
	$('.inspectr').append('<p class="dimensions"></p>');
	$('.dimensions').text('viewport size : ' + dim);
	$(window).resize(function(){
		var dim = $(window).width() + ' x ' + $(window).height();
		$('.dimensions').text('viewport size : ' + dim);
	});

	var UA = navigator.userAgent;
	
	for(i = 10; i > 0; i--){
	 
		if(UA.substring(0,1) != '(' && UA.substring(0,1) != ' '){
			var string1 = UA.substring(0, UA.indexOf(' '));
			var length1 = string1.length;
			$('.inspectr').append('<p>' + string1 +'</p>');
			UA = UA.slice(length1+1);
		}else if(UA.substring(0,1) == '('){
			var string1 = UA.substring(1, UA.indexOf(')'));
			var length1 = string1.length;
			$('.inspectr').append('<p>' + string1 +'</p>');
			UA = UA.slice(length1+2);
		}else if(UA.substring(0,1) == ' '){
			var string1 = UA.substring(1, UA.lastIndexOf(' '));
			if(string1.indexOf('(') > 0){
				var string1 = UA.substring(1, UA.lastIndexOf('('));
				var length1 = string1.length;
				$('.inspectr').append('<p>' + string1 +'</p>');
				UA = UA.slice(length1+1);
			}else{
				var string1 = UA.substring(1, UA.lastIndexOf(' '));
				var length1 = string1.length;
				$('.inspectr').append('<p>' + string1 +'</p>');
				UA = UA.slice(length1+1);
				$('.inspectr').append('<p>' + UA +'</p>');
				i = 0;
			}	
		}
	}
	
	(function detectDevice(){
		
		if( navigator.userAgent.match(/Mobile/i) && navigator.userAgent.match(/android/i) && $(window).width() < 1024
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/Windows Phone/i)
		){
			$('.inspectr').append('<p>media : smartphone</p>');
		}else if(navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/tablet/i)
		){
			$('.inspectr').append('<p>media : tablet</p>');
		}else{
			$('.inspectr').append('<p>media : desktop</p>');
		}
	
	})();
	
	
});