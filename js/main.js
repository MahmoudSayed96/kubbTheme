$(function () {
    'use strict';
    $('.nav-links li a').on('click', function(){
		let id = ($(this).data('id'));
		let scrTop = 0;
		if(id != 'home')
			scrTop = $('#'+id).position().top;
		$('html,body').animate({
			scrollTop: scrTop
		}, 1000);
	});
});