# video4all #

**Bringing**

&lt;video&gt;

 tag support to archaic browsers that don't support it!

### Demo ###

Want to see it in action?  Check out the demo [here](http://video4all.googlecode.com/svn/trunk/index.html)!

Everything you'll need for now is in the [source](http://code.google.com/p/video4all/source/browse/#svn/trunk), but it's not packaged up nicely yet.

### Browser Support ###

video4all brings basic `<video>` support to at least 95+% of all released browsers (FF2.0+, IE6+ and some of the other tested browsers according to [StatCounter](http://gs.statcounter.com)).

Tested and working in:

  * Firefox 3.5 (native video support)
  * Firefox 3.0 (fallback flash, via XBL binding)
  * Firefox 2.0 (fallback flash, via XBL binding)
  * Safari 4 (native video support)
  * Windows Safari 4 w/QuickTime (native video support)
  * iPhone OS 3 (native video support)
  * IE6 (fallback flash, via HTC binding)
  * IE7 (fallback flash, via HTC binding)
  * IE8 (fallback flash, via HTC binding)
  * Opera (fallback flash)
  * Safari 2 (fallback flash)
  * Chrome (fallback flash)

Not working on:

  * Windows Safari 4 without Quicktime (eats `<source>` tags!)

### Current Issues ###

  * The video is replaced using an `<object>` tag, but not enough care is taken to ensure that the video plays at the appropriate size and uses the correct display mode.
  * Virtually all of the cool video attributes, events and properties are unimplemented.
  * The user isn't prompted to install flash (SWFObject does a good job of this)
  * `<audio>` isn't supported
  * video4all currently uses the controlbar from flowplayer, but it should implement a Firefox-like video control bar instead.

### Technical Details ###

**How does it work?**

For IE browsers, we use an HTC behavior file to specify that 

&lt;video&gt;

 tag elements will run a given piece of javascript.  This javascript inserts a compatible `<object>` tag inside the 

&lt;video&gt;

 element, playing the video as if the browser supported it.  For browsers without dynamic binding languages, an interval timer is set up that looks for new 

&lt;video&gt;

 tags every few seconds and processes them.

**Does it support all the**

&lt;video&gt;

 bells and whistles?

No, at this time it supports the autoplay and autobuffer attributes only. It should be possible to transmit events from the flash player to Javascript code to emulate some of the events, but this hasn't been implemented.

**How do I use it?**

Download the files (distribution coming soon) and insert the following code in the `<head>` section of your page:

```
<script src="video4all.js" type="text/javascript"></script>
```

In the body of your document, use the HTML video tag, making sure you provide both Ogg and MP4 alternatives (which is required as a bare minimum to support FF3.5 and Safari 4 today):

```
<video>
  <source src="video.ogg" type="video/ogg" />
  <source src="video.mp4" type="video/mp4" />
</video>
```