// Load CSS if Javascript is present

	// Get HTML head element
 	var head = document.getElementsByTagName('HEAD')[0]; 

	// Create new link Element
	 var link = document.createElement('link');

	// set the attributes for link element 
	 link.rel = 'stylesheet'; 

	 link.type = 'text/css';

	 link.href = '/js-present.css'; 

	// Append link element to HTML head
	 head.appendChild(link);


// add javascript enhancements via class changes
window.onload = function() {
  var elList = [].slice.call(document.querySelectorAll('.btn-reply, .btn-reply-thread, .collapsible, .collapsiblecontent'));
  	elList.forEach(function(el){
 	 el.classList.remove('nojs');
	});
  var nothidden = [].slice.call(document.querySelectorAll('.collapsiblecontent'));
  	nothidden.forEach(function(el){
 	 el.classList.add('hidden');
	});
	};