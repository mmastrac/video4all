// Allow styling of video elements
document.createElement('video');

var style = document.createElement('style');
style.type = 'text/css';
style.styleSheet.cssText = "video { behavior: url(ievideo.htc); }";

var anchorScript = document.getElementsByTagName('script')[0];
anchorScript.parentElement.insertBefore(style, anchorScript);


