function() {

var videoElement = document.createElement('video');

// Test for native support first
if (("autoplay" in videoElement))
	return;

// No native support, let's figure out how to do it	

// IE-style behaviors?
if ("behavior" in videoElement.style) {
	var style = document.createElement('style');
	style.type = 'text/css';
	style.styleSheet.cssText = "video { behavior: url(video4all.htc); }";

	var anchorScript = document.getElementsByTagName('script')[0];
	anchorScript.parentElement.insertBefore(style, anchorScript);

	return;
}

// Mozilla-style bindings?
if ("MozBinding" in videoElement.style) {
	// TODO: Mozilla-style
	return;
}
	
// TODO: Other browsers

}();

