
/*
// ############
//    STEP 1
// ############
*/

// If the element with id 'link1' is clicked
$('#link1').on('click', function(e){
	var bootstrapCSSLink = $('<link rel="stylesheet" type="text/css" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">');
	var bootstrapThemeCSSLink = $('<link rel="stylesheet" type="text/css" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">');
	var bootstrapJavaScriptLink = $('<script type="text/javascript" src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>');
	
	$('body').append(bootstrapCSSLink);
	$('body').append(bootstrapThemeCSSLink);
	$('body').append(bootstrapJavaScriptLink);	
});

/*
// ############
//    STEP 2
// ############
*/


// No JavaScript involved!


/*
// ############
//    STEP 3
// ############
*/

// If the element with id 'link3' is clicked
$('#link3').on('click',function(e){
	// Do a GET request on the '/show' URL, with the data payload 'Hello World'.
	$.get('/show',data={'message': 'Hello World'}, function(data){
		// If successful, add the data to the DOM tree under the 'linktarget3' element.
		$('#linktarget3').html(data);
	});
});

/*
// ############
//    STEP 4
// ############
*/

// If the element with id 'link4' is clicked
$('#link4').on('click',function(e){
	
	var message = $('#messageInput1').val();
	
	// Do a GET request on the '/show' URL, with the data payload 'Hello World'.
	$.get('/show',data={'message': message}, function(data){
		// If successful, add the data to the DOM tree under the 'linktarget3' element.
		$('#linktarget4').html(data);
	});
});

/*
// ############
//    STEP 5
// ############
*/

// If the element with id 'link5' is clicked
$('#link5').on('click',function(e){
	
	var message = $('#messageInput2').val();
	$('#linktarget5').html(message);
	
});


/*
// ############
//    STEP 6
// ############
*/

// Autocompletion from Linked Life Data

// http://linkedlifedata.com/autocomplete.json?
// Parameters are 'q' for query and some limit.
// Note that we have to add a 'callback=?' suffix to the URI, to make sure the call is a JSONP request.
$('#messageInput3').on('input', function(e){
	var message = $('#messageInput3').val();
	
	var lld_autocomplete_url = 'http://linkedlifedata.com/autocomplete.json?callback=?';
	
	var data = {'q': message, 'limit': 100}
	
	$.getJSON(lld_autocomplete_url, data=data, function(json){
		var pre = $('<pre></pre>');
		pre.text(JSON.stringify(json));
		$('#linktarget6').html(pre);
	});
});


/*
// ############
//    STEP 7
// ############
*/

// Autocompletion from Linked Life Data

// http://linkedlifedata.com/autocomplete.json?
// Parameters are 'q' for query and some limit.
// Note that we have to add a 'callback=?' suffix to the URI, to make sure the call is a JSONP request.
$('#messageInput7').on('input', function(e){
	var message = $('#messageInput7').val();
	
	var lld_autocomplete_url = 'http://linkedlifedata.com/autocomplete.json?callback=?';
	
	var data = {'q': message, 'limit': 100}
	
	$.getJSON(lld_autocomplete_url, data=data, function(json){
		
		var ul = $('<ul></ul>');
		ul.addClass('list-group');
		for (var i in json.results) {
			var r = json.results[i];
			
			var uri = r.uri.namespace + r.uri.localName;
			var label = r.label;
			
			var li = $('<li></li>');
			li.addClass('list-group-item');
			var a = $('<a></a>');
			a.html(label);
			a.attr('href',uri);
			li.append(a);
			ul.append(li);
		}
		
		$('#linktarget7').html(ul);
	});
});


/*
// ############
//    STEP 8
// ############
*/


// Autocompletion from Linked Life Data

// http://linkedlifedata.com/autocomplete.json?
// Parameters are 'q' for query and some limit.
// Note that we have to add a 'callback=?' suffix to the URI, to make sure the call is a JSONP request.
$('#messageInput8').on('input', function(e){
	var message = $('#messageInput8').val();
	
	var lld_autocomplete_url = 'http://linkedlifedata.com/autocomplete.json?callback=?';
	
	var data = {'q': message, 'limit': 100}
	
	$.getJSON(lld_autocomplete_url, data=data, function(json){
		
		var ul = $('<ul></ul>');
		ul.addClass('list-group');
		for (var i in json.results) {
			var r = json.results[i];
			
			var uri = r.uri.namespace + r.uri.localName;
			var label = r.label;
			
			var li = $('<li></li>');
			li.addClass('list-group-item');
			var a = $('<a></a>');
			a.html(label);
			
			a.on('click', function(e){
				alert('You clicked '+ uri);
			});
			
			li.append(a);
			ul.append(li);
		}
		
		$('#linktarget8').html(ul);
	});
});


/*
// ############
//    STEP 9
// ############
*/


// Autocompletion from Linked Life Data

// http://linkedlifedata.com/autocomplete.json?
// Parameters are 'q' for query and some limit.
// Note that we have to add a 'callback=?' suffix to the URI, to make sure the call is a JSONP request.
$('#messageInput9').on('input', function(e){
	var message = $('#messageInput9').val();
	
	var lld_autocomplete_url = 'http://linkedlifedata.com/autocomplete.json?callback=?';
	
	var data = {'q': message, 'limit': 100}
	
	$.getJSON(lld_autocomplete_url, data=data, function(json){
		
		var ul = $('<ul></ul>');
		ul.addClass('list-group');
		for (var i in json.results) {
			var r = json.results[i];
			
			var uri = r.uri.namespace + r.uri.localName;
			var label = r.label;
			
			var li = $('<li></li>');
			li.addClass('list-group-item');
			var a = $('<a></a>');
			a.html(label);
			
			a.on('click', function(e){
				
				var query = 'DESCRIBE <'+uri+'>'
				var endpoint = 'http://linkedlifedata.com/sparql.rdf';
				
				$.get('/sparql/rdf',data={'endpoint': endpoint, 'query': query}, function(json){
					console.log(json);
					var pre = $('<pre></pre>');
					pre.text(JSON.stringify(json));
					$('#linktarget9').html(pre);
				});
				
			});
			
			li.append(a);
			ul.append(li);
		}
		
		$('#linktarget9').html(ul);
	});
});
