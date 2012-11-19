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
		$('.tabs__item').slideUp(200);
		tab_val = $(this).attr('href');
		$(this).addClass('active');
		$('.'+tab_val).slideDown(200);
	}	
	return false;
});

//company-places accordeon
$('.company-places__prof').click(function() {
	if ($(this).parent().hasClass('active')) {
		$(this).parent().removeClass('active');
		$(this).next().slideUp();
	}
	else {		
		$(this).parent().addClass('active');
		$(this).next().slideDown();
	}	
	// $('.company-places__list li').removeClass('active');
	// $('.company-places__details').slideUp();
});

//company-places filter
$('.company-places__filter-open').click(function() {
	if ($(this).hasClass('company-places__filter-closed')) {
		$('.commpany-places__filter-list').slideUp(200);
		$(this).removeClass('company-places__filter-closed');
	}
	else {
		$('.commpany-places__filter-list').slideDown(200);
		$(this).addClass('company-places__filter-closed');
	}
});

});