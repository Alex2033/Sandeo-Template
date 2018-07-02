$(function() {
	$(".nav-list").superfish();
});

$(function() {

	$(".hero-slider").slick({
		dots: true,
		speed: 1500,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		slidesToShow: 1,
		pauseOnFocus: false,
		pauseOnHover: false,
		slidesToScroll: 1,
		dotsClass: 'hero-dots',
		customPaging: function (i) {
			return '<button class="hero-dot__btn"></button>';
		}
	});

});

$(function() {

	$(".teams").slick({
		dots: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		slidesToShow: 4,
		pauseOnFocus: false,
		pauseOnHover: false,
		slidesToScroll: 2,
		dotsClass: 'carousel-dots',
		customPaging: function (i) {
			return '<button class="carousel-dots__btn"></button>';
		},
		responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});

});


$(function() {

	$(".testis").slick({
		dots: true,
		speed: 1000,
		autoplay: false,
		autoplaySpeed: 1500,
		arrows: false,
		slidesToShow: 2,
		pauseOnFocus: false,
		pauseOnHover: false,
		slidesToScroll: 2,
		dotsClass: 'carousel-dots',
		customPaging: function (i) {
			return '<button class="carousel-dots__btn"></button>';
		},
		responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		]
	});

});

/*$(document).ready(function() {
	setTimeout(function() {
	  var mainDivs = $(".testi"); //Получаем все элементы с классом YOUR-BLOCK
	  var maxHeight = 0;
	  for (var i = 0; i < mainDivs.length; ++i) {
		if (maxHeight < $(mainDivs[i]).height()) { //Находим максимальную высоту
			maxHeight = $(mainDivs[i]).height();
		}
	  }
	  for (var i = 0; i < mainDivs.length; ++i) {
		$(mainDivs[i]).height(maxHeight); //Устанавливаем всем элементам максимальную высоту
		$(".testi__left").css("height", $(".testi__right").height());
	  }
	}, 1000); 
});*/

$(function($){
	var max_col_height = 0; // максимальная высота, первоначально 0
	$('.testi').each(function(){ // цикл "для каждой из колонок"
		if ($(".testi").height() > max_col_height) { // если высота колонки больше значения максимальной высоты,
			max_col_height = $(this).height(); // то она сама становится новой максимальной высотой
		}
	});
	$('.testi__left').height(max_col_height); // устанавливаем высоту каждой колонки равной значению максимальной высоты
});

$(document).ready(function() {
  setTimeout(function() {
	  var mainDivs = $(".services-list__item"); //Получаем все элементы с классом YOUR-BLOCK
	  var maxHeight = 0;
	  for (var i = 0; i < mainDivs.length; ++i) {
		if (maxHeight < $(mainDivs[i]).height()) { //Находим максимальную высоту
			maxHeight = $(mainDivs[i]).height();
		}
	  }
	  for (var i = 0; i < mainDivs.length; ++i) {
		$(mainDivs[i]).height(maxHeight); //Устанавливаем всем элементам максимальную высоту
	  }
	}, 1000);
});

$(document).ready(function() {
	var nav = $('.navigation').offset().top; // определяем его первоначальное положение
	$(window).scroll(function(){

	   if ($(window).scrollTop() > nav){ // Если страницу прокрутили дальше, чем находится наш блок
			$('.navigation').css('position', 'fixed'); // То мы этот блок фиксируем и отображаем сверху.
	
	   }else{  // Если же позиция скрола меньше (выше), чем наш блок
			$('.navigation').css('position', 'relative'); // то возвращаем все назад
	   }
	});
});

$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(".hero").offset().top) {
			$("#scrollUp").fadeIn();
		}
		else {
			$("#scrollUp").fadeOut();
		}
	});
	$("#scrollUp").click(function() {
		$("body, html").animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});

$(".toggle-menu").click(function() {
	$(".nav-list").slideToggle();
});