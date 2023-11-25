// New Menu

	//Main Site Menu
		var menu = document.getElementById("navmenu");
		if (menu)
		menu.addEventListener("click", function() {
		  document.getElementById("myTopnav").classList.toggle("responsive");
		});	

// Staticman Scripts
	
	//Replace Reply ID
	function changeValue(elementName, newValue){
  		document.getElementsByName(elementName)[0].value=newValue;
  		window.location.hash = "#comment-form";
		};
	
	//Parent Button Reply
	const OnEvent = (doc) => {
    	return {
        	on: (type, selector, callback) => {
            	doc.addEventListener(type, (event)=>{
                	if(!event.target.matches(selector)) return;
                	callback.call(event.target, event);
            	}, false);
        	}
    	}
	};
	
	OnEvent(document).on('click', '.btn-reply', function (e) {
    	changeValue('fields[reply_to]', e.target.id);
    	document.getElementById('replymessage').innerHTML = '<div class="replymessageto"><h4>Replying to ' + event.target.getAttribute("reply-name") + '\'s comment</h4></div><div class="cancel"><a class="cancel" href="' + event.target.getAttribute("comment-return") + '">Cancel reply and return to comment</a></div>';
    	document.getElementById('formheader').innerHTML = null;
    	var target = event.target.getAttribute("id");
        var fragment = document.createDocumentFragment();
	fragment.appendChild(document.getElementById('comment-form'));
	document.getElementById('commentid-' + target).appendChild(fragment);
	});

	// Thread Button Reply
	OnEvent(document).on('click', '.btn-reply-thread', function (e) {
    	changeValue('fields[reply_to]', event.target.getAttribute("parent-id"));
    	document.getElementById('replymessage').innerHTML = '<div class="replymessageto"><h4>Replying to ' + event.target.getAttribute("reply-name") + '\'s comment</h4></div><div class="cancel"><a class="cancel" href="' + event.target.getAttribute("comment-return") + '">Cancel reply and return to comment</a></div>';
    	document.getElementById('formheader').innerHTML = null;
    	var target = event.target.getAttribute("id");
        var fragment = document.createDocumentFragment();
	fragment.appendChild(document.getElementById('comment-form'));
	document.getElementById('commentid-' + target).appendChild(fragment);
	});
	
	// Cancel Reply
	OnEvent(document).on('click', '.cancel', function (e) {
    	changeValue('fields[reply_to]', null);
    	document.getElementById('replymessage').innerHTML = null;
    	document.getElementById('formheader').innerHTML = '<h3 class="prompt">Leave a Comment</h3>';
    	var target = event.target.getAttribute("id");
        var fragment = document.createDocumentFragment();
		fragment.appendChild(document.getElementById('comment-form'));
		document.getElementById("comment-home").appendChild(fragment);
	});
	
	// Disable Submit Button - Loading
	OnEvent(document).on('click', '.submit-comment', function (e) {
    	document.getElementById('submit-comment').classList.toggle("hide");
    	document.getElementById('loading').innerHTML = '<button class="comment-buttons loading" disabled>Loading</button>';
	});
	
	// Disable Submit Button - Field Validation
	  	  
	  const btn = document.getElementById("submit-comment");
	  const name = document.getElementById("name");
	  const comment = document.getElementById("comment");
	  const nametry = document.getElementById("name_try");
	
	  if (document.getElementById("submit-comment")){
	  deactivate();
  
	  function activate() {
    	btn.disabled = false;
  		}
  
  	  function deactivate() {
    	btn.disabled = true;
  		}

	  function check() {
    	if (name.value != '' && comment.value != '' && nametry.value == '') {
      	activate()
    	} else {
      	deactivate()
    	}
  	  }
  
      name.addEventListener('input', check);
  	  comment.addEventListener('input', check);
      nametry.addEventListener('input', check);
	};

// Collapse Content

var acc = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "hide" class,
    to highlight the button that controls the panel */
    this.classList.toggle("hide");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    panel.classList.toggle("hidden");
  });
}