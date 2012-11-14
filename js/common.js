$(document).ready(function() {

//main slider
if ($('.main-slider').length >0) {
	$('.main-slider').cycle({ 
	    fx: 'fade',
	    timeout: 0,
	    pager: '.main-slider-navi'
	});
	$('.main-slider-navi a').html('');
};

//block small nav and search
$('.nav-s li').click(function() {
	var nav_s = $(this).attr('data-item');
	$('.nav, .search').removeClass('show');	
	if ($(this).hasClass('active')) {
		$('.nav-s li').removeClass('active');
		$('.'+nav_s).removeClass('show');		
	}
	else {
		$('.nav-s li').removeClass('active');
		$(this).addClass('active');	
		$('.'+nav_s).addClass('show');
	}
});
$('.nav__search').click(function() {
	$('.search').addClass('show');
	return false;
});
$('.search__close').click(function() {
	$('.search').removeClass('show');
});

//search filter
$('.search-filter ul:not(:first)').hide();
$('.search-filter h3:first').addClass('active');
$('.search-filter h3').click(function() {	
	if ($(this).hasClass('active')) {
		$(this).removeClass('active').next().slideUp();
	}
	else {
		$(this).addClass('active').next().slideDown();
	}
});

//tabs
$('.tabs__nav a').click(function() {
	if ($(this).hasClass('active')) {}
	else {
		$('.tabs__nav a').removeClass('active');
		$('.about, .partners, .contacts, .imprint').slideUp(200);
		tab_val = $(this).attr('href');
		$(this).addClass('active');
		$('.'+tab_val).slideDown(200);
	}	
	return false;
});

});