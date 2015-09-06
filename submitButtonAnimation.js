(function($){
	// animated submit button
	$.fn.submitAnimationToggle = function(param){

			var defaults = {
								action: null,
								animation: null,
								animClass : "submit-animation-running",
								buttonWidth: function() { return this.elm.outerWidth() + 20; },
								defaultText: null,
								disabled : true,
								elm : null,
								runningText : "Running"
							};

			var startAnimation = function(options){
					//add animation
					var i = 1;
					//
					options.defaultText = options.elm.val() || options.defaultText;

					options.elm
						   .val(options.runningText)
						   .addClass(options.animClass)
						   .prop('disabled', options.disabled)
						   .css({ 'min-width' : options.buttonWidth() });

					options.animation = setInterval(function(){
						options.elm.val(options.runningText + Array((i++ % 4) + 1).join('.'));
					}, 400);

				};

			var stopAnimation = function(options){
					//take away animation
					options.elm
						 .val(options.defaultText)
						 .removeClass(options.animClass)
						 .prop('disabled', false)
						 .css('min-width', '');

					clearInterval(options.animation);
				};

			var toggleAnimate = function(options){
		            if(options.action === 'start') { 
		            	options.elm.trigger('animation.startSubmit'); 
		            };
		            if(options.action=== 'stop') { 
		            	options.elm.trigger('animation.stopSubmit'); 
		            };
				};

			return this.each(function(index, elm){

					var $input = $(elm),
					    settings = $.extend(true, {}, defaults, (typeof param === 'object') ? param : {});
					    settings.elm = $input;

					//if a string is the parameter, it's an action
					if(typeof param === 'string'){
						settings.action = param;
						toggleAnimate(settings);
			        //else we're setting up the options
			        } else {
						// set event handlers
						settings.elm.on('animation.startSubmit', function(){
							startAnimation(settings);
						});					
						settings.elm.on('animation.stopSubmit', function(){
							stopAnimation(settings);
						});
			        }		    
			});
	};
})( jQuery );