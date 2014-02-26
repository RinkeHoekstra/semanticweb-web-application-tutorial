// If the element with id 'link1' is clicked
$('#link1').on('click', function(e){
	var bootstrapCSSLink = $('<link rel="stylesheet" type="text/css" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">');
	var bootstrapThemeCSSLink = $('<link rel="stylesheet" type="text/css" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">');
	var bootstrapJavaScriptLink = $('<script type="text/javascript" src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>');
	
	var codemirrorCSSLink = $('<link rel="stylesheet" type="text/css" href="/static/css/codemirror.css">');
	var codemirrorJavaScriptLink = $('<script type="text/javascript" src="/static/js/codemirror-compressed.js"></script>');
	
	$('body').append(bootstrapCSSLink);
	$('body').append(bootstrapThemeCSSLink);
	$('body').append(bootstrapJavaScriptLink);
	
	$('body').append(codemirrorCSSLink);
	$('body').append(codemirrorJavaScriptLink);
});




// If the element with id 'link3' is clicked
$('#link3').on('click',function(e){
	// Do a GET request on the '/show' URL, with the data payload 'Hello World'.
	$.get('/show',data={'message': 'Hello World'}, function(data){
		// If successful, add the data to the DOM tree under the 'linktarget3' element.
		$('#linktarget3').html(data);
	});
});


// If the element with id 'link4' is clicked
$('#link4').on('click',function(e){
	
	var message = $('#messageInput1').val();
	
	// Do a GET request on the '/show' URL, with the data payload 'Hello World'.
	$.get('/show',data={'message': message}, function(data){
		// If successful, add the data to the DOM tree under the 'linktarget3' element.
		$('#linktarget4').html(data);
	});
});

// If the element with id 'link5' is clicked
$('#link5').on('click',function(e){
	
	var message = $('#messageInput2').val();
	$('#linktarget5').html(message);
	
});