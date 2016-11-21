$(function(){
	
	// container is the DOM element;
	// inputText is the textbox
	
	var container = $("#container")
		inputText = $('#inputText'); 
	
	// Shuffle the contents of container
	container.shuffleLetters();

	// Bind events
	inputText.click(function () {
		
	  inputText.val("");
	  
	}).bind('keypress',function(e){
		
		if(e.keyCode == 13){
			
			// The return key was pressed
			
			container.shuffleLetters({
				"text": inputText.val()
			});
			
			inputText.val("");
		}

	}).hide();

	// Leave a 4 second pause

	setTimeout(function(){
		
		// Shuffle the container with custom text
		container.shuffleLetters({
			"text": "Test it for yourself!"
		});
		
		inputText.val("type anything and hit return..").fadeIn();
		
	},4000);
	
});

