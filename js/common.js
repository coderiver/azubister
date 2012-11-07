$(document).ready(function() {

//block small menu and search
$('.nav-s li').click(function() {
	var nav_s = $(this).attr('data-item');
	$('.menu-drop, .search-drop').hide();
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$('.'+nav_s).fadeOut(300);
	}
	else {
		$(this).addClass('active');	
		$('.'+nav_s).fadeIn(300);
	}
});

});