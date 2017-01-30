$(function() {
    var	$window = $(window),
		$body = $('body');
    
	// Disable animations/transitions until the page has loaded.
	$body.addClass('is-loading');
	$window.on('load', function() {
	   window.setTimeout(function() { $body.removeClass('is-loading'); }, 100);
    });
    
    // Fix: Placeholder polyfill.
		$('form').placeholder();
    
	// Nav.
		$('#nav')
	       .append('<a href="#nav" class="close"></a>')
	       .appendTo($body)
	       .panel({
                delay: 500,
                hideOnClick: true,
                hideOnSwipe: true,
                resetScroll: true,
                resetForms: true,
                side: 'right'
	       });
})(jQuery);


