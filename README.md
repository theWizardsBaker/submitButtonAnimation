# submitButtonAnimation
Animates an html button with moving ellipses. Useful for longer-running actions to give visual feedback to the user.

![Alt text](example.png?raw=true "Example")

````html

<input id="test" type="button" value="SOME TEXT" />

````

````javascript

$('input#test').submitAnimationToggle().on('click', function(){
    var _this = $(this);
	// start animation
  	_this.submitAnimationToggle('start');
  	setInterval(function () {
  		//stop animation
        _this.submitAnimationToggle('stop');
	}, 5000);
});

````