$(document).ready(function() {

//main slider
$('.main-slider').cycle({ 
    fx: 'fade',
    timeout: 0,
    pager: '.main-slider-navi'
});
$('.main-slider-navi a').html('');

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

});