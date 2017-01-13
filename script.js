$(document).ready(function(){
	$('.carousel').carousel();
	$('.carousel').carousel('set', 1);
	$('.lang').click(function(){
		$('#weGo, .information, .works').animate({opacity:'0'},1000);
		$('#backlogo').addClass('waves-effect waves-white');
		setTimeout(function(){ 
			$('#weGo, .information, .works').addClass('hidden');	
			$('#weCome').animate({opacity:'1'},10);	
			$('#weCome').removeClass('hidden');	
		}, 1000);
		setTimeout(function(){
			$('#app, #changeLang').removeClass('hidden');
		}, 1100);
	});
	$('#changeLang').click(function(){
		$(".toast").html('<span>Language</span>');
		$('#weCome, .information, .works').animate({opacity:'0'},1000);
		$('#backlogo').removeClass('waves-effect waves-white');
		setTimeout(function(){ 
			$('#weCome, .information, .works').addClass('hidden');
			$('#weGo').animate({opacity:'1'},10);
			$('#app, #changeLang').addClass('hidden');
			$('#weGo').removeClass('hidden');
		}, 1000);
	});
	$('#info').click(function(){
		$(".toast").html('<span>Information</span>');
		$('#weGo, #weCome, .works').animate({opacity:'0'},1000);
		$('.information').animate({opacity:'1'},10);	
		$('.information').removeClass('hidden');	
		setTimeout(function(){ 
			$('#weGo, #weCome').addClass('hidden');	
			$('#app, #changeLang').addClass('hidden');
		}, 1000);
	});
	$('#close').click(function(){
		$('.information').animate({opacity:'0'},1000);
		setTimeout(function(){ 
			$('#weCome').animate({opacity:'1'},10);	
			$('#weCome').removeClass('hidden');	
			$('.information').addClass('hidden');	
		}, 500);
		setTimeout(function(){
			$('#app, #changeLang').removeClass('hidden');
		}, 600);
	});
	$('#app').click(function(){
		$(".toast").html('<span>Applications</span>');
		$('#weGo, #weCome, .information').animate({opacity:'0'},1000);
		$('.works').animate({opacity:'1'},10);	
		$('.works').removeClass('visi hidden');	
		setTimeout(function(){ 
			$('#weGo, #weCome, .information').addClass('hidden');	
			$('#app, #changeLang, .information').addClass('hidden');
		}, 1000);

	});
	$('#closeWorks').click(function(){
		$('.works').animate({opacity:'0'},1000);
		setTimeout(function(){ 
			$('#weCome').animate({opacity:'1'},10);	
			$('#weCome').removeClass('hidden');	
			$('.works').addClass('hidden');	
		}, 500);
		setTimeout(function(){
			$('#app, #changeLang').removeClass('hidden');
		}, 600);
	});
	$('#telegram').click(function(){
		$(".toast").html('<span>t.me/PYPLE</span>');
	});
	$('#en').click(function(){
		$(".material-tooltip:eq(0) span").html('English');
		$(".material-tooltip:eq(1) span").html('Farsi');
		$(".material-tooltip:eq(2) span").html('Applications');
		$(".material-tooltip:eq(3) span").html('Information');
		$(".material-tooltip:eq(5) span").html('Language');
		$("html, body").css({"font-family":"'Roboto',sans-serif"});
		$(".toast").html('<span>English</span>');
		$('#telegram').click(function(){
			$(".toast").html('<span>t.me/PYPLE</span>');
		});
		$('#app').click(function(){
			$(".toast").html('<span>Applications</span>');
		});
		$('#info').click(function(){
			$(".toast").html('<span>Information</span>');
		});
		$('#changeLang').click(function(){
			$(".toast").html('<span>Language</span>');
		});
		$('.enBox').removeClass('hidden');
		$('.faBox').addClass('hidden');
	});
	$('#fa').click(function(){
		$(".material-tooltip:eq(0) span").html('انگلیسی');
		$(".material-tooltip:eq(1) span").html('فارسی');
		$(".material-tooltip:eq(2) span").html('اپلیکیشن ها');
		$(".material-tooltip:eq(3) span").html('اطلاعات');
		$(".material-tooltip:eq(5) span").html('تغییر زبان');
		$(".toast").html('<span>فارسی</span>');
		$('#telegram').click(function(){
			$(".toast").html('<span>t.me/PYPLE</span>');
		});
		$('#app').click(function(){
			$(".toast").html('<span>اپلیکیشن ها</span>');
		});
		$('#info').click(function(){
			$(".toast").html('<span>اطلاعات</span>');
		});
		$('#changeLang').click(function(){
			$(".toast").html('<span>تغییر زبان</span>');
		});
		$("html, body").css({"font-family":"'BRoya','Roboto',sans-serif"});
		$('.faBox').removeClass('hidden');
		$('.enBox').addClass('hidden');
	});
});