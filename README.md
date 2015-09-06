# submitButtonAnimation
Animates an html button with moving ellipses. Useful for longer-running actions to give visual feedback to the user.

![Alt text](example.png?raw=true "Example")


````javascript

// add the animatinoToggle to all submit buttons
$('input[type=submit]').submitAnimationToggle();

// start animation
$('input[type=submit]').submitAnimationToggle('start');
// stop animation
$('input[type=submit]').submitAnimationToggle('stop');

````