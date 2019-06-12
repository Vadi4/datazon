$(function() {
	$('body').on('click', '.js-burger-link', function(e) {
		e.preventDefault();
		var $this = $(this);
		var $dropdownWrap = $('.b-header-nav__dropdown-wrap');

		if( $this.hasClass('js-act') ) {
			$this.removeClass('js-act');
			$dropdownWrap.removeClass('js-act');
		} else {
			$this.addClass('js-act');
			$dropdownWrap.addClass('js-act');
		}
	});

	$(document).mouseup(function (e){ 
		var div = $(".b-header-nav__dropdown-wrap, .js-burger-link");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.js-burger-link, .b-header-nav__dropdown-wrap').removeClass('js-act');
		}
	});	
	$(".datepicker").datepicker()
});

$(window).on('scroll', function() {
	if( $(window).scrollTop() > 0 ) {
		$('.l-header').addClass('js-fixed');
	} else {
		$('.l-header').removeClass('js-fixed');
	}
});