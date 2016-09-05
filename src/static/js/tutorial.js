
/*
// #############
// CONFIGURATION
// #############
*/

var TUTORIAL_REPOSITORY = 'http://localhost:5820/tutorial';



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

	var data = {'q': message, 'limit': 100};

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

	var data = {'q': message, 'limit': 100};

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

	var data = {'q': message, 'limit': 100};

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

			a.on('click', {'uri': uri}, function(e){
				alert('You clicked '+ e.data.uri);
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

	var data = {'q': message, 'limit': 100};

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

			a.on('click', {'uri': uri}, function(e){
				var clicked_uri = e.data.uri;
				var query = 'DESCRIBE <'+clicked_uri+'>';
				var endpoint = 'http://linkedlifedata.com/sparql.rdf';
				var format = 'RDF';

				$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
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


/*
// ############
//    STEP 10
// ############
*/


// Autocompletion from Linked Life Data

// http://linkedlifedata.com/autocomplete.json?
// Parameters are 'q' for query and some limit.
// Note that we have to add a 'callback=?' suffix to the URI, to make sure the call is a JSONP request.
$('#messageInput10').on('input', function(e){
	var message = $('#messageInput10').val();

	var lld_autocomplete_url = 'http://linkedlifedata.com/autocomplete.json?callback=?';

	var data = {'q': message, 'limit': 100};

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

			console.log(uri);

			a.on('click', {'uri': uri}, function(e){
				var clicked_uri = e.data.uri;
				console.log('Clicked URI: <'+clicked_uri+'>');
				var query = 'DESCRIBE <'+clicked_uri+'>';
				var endpoint = 'http://linkedlifedata.com/sparql.rdf';
				var format = 'RDF';


				$('#linktarget10').html("<div>Querying endpoint...</div>");
				$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(data){
					console.log(data);
					var pre = $('<pre></pre>');
					pre.text(data);
					$('#linktarget10').html(pre);

					// New, set an identifier on our <pre> tag

					pre.attr('id','pre10');

					// New, enable the button, and add a click handler

					$('#link10').toggleClass('disabled');

					$('#link10').on('click',function(e){
						var rdf_data = $('#pre10').text();

						$.post('/store',data={'data': rdf_data}, function(data){
							var pre = $('<pre></pre>');
							pre.text(data);
							$('#linktarget10').html(pre);
							$('#link10').toggleClass('disabled');
						});

					});

				});

			});

			li.append(a);
			ul.append(li);
		}

		$('#linktarget10').html(ul);
	});
});


/*
// ############
//    STEP 11
// ############
*/


// Autocompletion from Linked Life Data

// http://linkedlifedata.com/autocomplete.json?
// Parameters are 'q' for query and some limit.
// Note that we have to add a 'callback=?' suffix to the URI, to make sure the call is a JSONP request.
$('#messageInput11').on('input', function(e){
	var message = $('#messageInput11').val();

	var lld_autocomplete_url = 'http://linkedlifedata.com/autocomplete.json?callback=?';

	var data = {'q': message, 'limit': 100};

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

			a.on('click', {'label': label}, function(e){
				var label = e.data.label;
				var query = 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nCONSTRUCT {	?s rdfs:label "'+label+'" .\n ?s ?p1 ?o1 . ?o1 ?p2 ?o2 . } WHERE { ?s rdfs:label "'+label+'"@en;\n ?p1 ?o1 .\n ?o1 ?p2 ?o2 .}';
				var endpoint = 'http://live.dbpedia.org/sparql';
				var format = 'RDF';

				$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(data){
					var pre = $('<pre></pre>');
					pre.text(data);
					$('#linktarget11').html(pre);

					// New, set an identifier on our <pre> tag

					pre.attr('id','pre11');

					// New, enable the button, and add a click handler

					$('#link11').toggleClass('disabled');

					$('#link11').on('click',function(e){
						var rdf_data = $('#pre11').text();

						$.post('/store',data={'data': rdf_data}, function(data){
							var pre = $('<pre></pre>');
							pre.text(data);
							$('#linktarget11').html(pre);
							$('#link11').toggleClass('disabled');
						});

					});

				});

			});

			li.append(a);
			ul.append(li);
		}

		$('#linktarget11').html(ul);
	});
});

/*
// ############
//    STEP 12
// ############
*/

$('#link12').on('click',function(e){
	var rdf_data = $('#schema').val();

	$.post('/store',data={'data': rdf_data}, function(data){
		var pre = $('<pre></pre>');
		pre.text(data);
		$('#linktarget12').html(pre);
	});

});


/*
// ############
//    STEP 13
// ############
*/

$('#link13').on('click', function(e){

	var query = $('#query13').text();
	var endpoint = TUTORIAL_REPOSITORY + '/query';
	var format = 'JSON';

	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		var pre = $('<pre></pre>');
		pre.text(JSON.stringify(json));
		$('#linktarget13').html(pre);
	});

});


/*
// ############
//    STEP 14
// ############
*/

$('#link14').on('click', function(e){

	var query = $('#query14').val();
	var endpoint = TUTORIAL_REPOSITORY + '/query';
	var format = 'JSON';

	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);

		try {
			var vars = json.head.vars;

			var ul = $('<ul></ul>');
			ul.addClass('list-group');

			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');

				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];

					li.append('<strong>'+v+'</strong><br/>');

					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');

				});
				ul.append(li);

			});

			$('#linktarget14').html(ul);
		} catch(err) {
			$('#linktarget14').html('Something went wrong!');
		}



	});

});
