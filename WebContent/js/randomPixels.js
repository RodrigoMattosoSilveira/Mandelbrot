/**
 * 
 */
$(function() {
    $('#drawRandomPixelsButton').click(draw_Mendelbrot);
});

function draw_Mendelbrot(){
	var canvas,
	    ctx,
	    canvasWidth = 0,
	    canvasHeight = 0,
	    imageData,
	    redOffset = 0,
	    greenOffset = 1,
	    blueOffset = 2,
	    alphaOffset = 3,
	    pixelAddress = 0,
	    mSet = {};

	
	canvas = document.getElementById('randomPixels');
	if (canvas.getContext){
		ctx = canvas.getContext('2d');
		
		//Get an image data object
	    canvasWidth = canvas.width,
	    canvasHeight = canvas.height;
		imageData = ctx.createImageData(canvasWidth, canvasHeight);
		
		//Lets fill this array with random pixels
		pixelAddress = 0;
		for (var i = 0; i <canvasHeight; i++) {
			for (var j = 0; j < canvasWidth; j++) {
				//Select a random color
				imageData.data[pixelAddress++] = random(256);
				imageData.data[pixelAddress++] = random(256);
				imageData.data[pixelAddress++] = random(256);
				imageData.data[pixelAddress++] = 255;
			}
		}
		
		//Paint the image on the screen
		ctx.putImageData(imageData, 0, 0);
	}
}

/*
 * A dynamic rectangular area selector.
 * - The user solicits the functionality (pressing a button will do for  now). 
 * - The app displays a cross hair icon to be used to select the rectangular region
 * - The users moves the mouse to a corner of the desired rectangular area clicks the mouse and
 *    keeps it down; this is the anchor point
 * - While keeping the mouse select button down the user drags the mouse to the opposite corner
 *    of the desired area.
 * - While the user is dragging the mouse the app draws a rectangle showing the rectangle defined 
 *    by the anchor point and the current mouse location.
 * - When the user lets the mouse up the app stops showing the area being considered for selection
 *    and returns the rectangle defined by the anchor point and the selection point.   
 *    
 *    This functionality will work only while the mouse is moving within the boundaries of a canvas
 *    region. If the initial click of the mouse occurs outside a canvas, the functionality is disabled. 
 *    If the second click of the mouse occurs outside a canvas region, the functionality is 
 *    disabled.
 */
    // - Use a floating CSS layer during the selection process; this enables writing and removing 
    //    artifacts without interfering with the actual work underneath it!
	// - All elements that can be selected will have 
	// - Mousedown event handler
	//    - If cursor 
	// - Display the cursor as the user moves it on the screen
	//    - if the cursor is over the area covered by a canvas element, include the coordinates relative
	//       to the canvas element; otherwise show only the cursor
	//
	
}

/*
 * 
 * Copyright 2006,2007 Bontrager Connection, LLC
 * http://bontragerconnection.com/ and http://www.willmaster.com/
 * Version: July 28, 2007
 */
var cX = 0; var cY = 0; var rX = 0; var rY = 0;
function UpdateCursorPosition (e) { 
	cX = e.pageX; cY = e.pageY;
}

function UpdateCursorPositionDocAll (e) { 
	cX = event.clientX; cY = event.clientY;
}

if (document.all) { 
	document.onmousemove = UpdateCursorPositionDocAll; 
}
else { 
	document.onmousemove = UpdateCursorPosition; 
}

function AssignPosition(d) {
	if(self.pageYOffset) {
		rX = self.pageXOffset;
		rY = self.pageYOffset;
	}
	else if(document.documentElement && document.documentElement.scrollTop) {
		rX = document.documentElement.scrollLeft;
		rY = document.documentElement.scrollTop;
	}
	else if(document.body) {
		rX = document.body.scrollLeft;
		rY = document.body.scrollTop;
	}
	if(document.all) {
		cX += rX; 
		cY += rY;
		}
	d.style.left = (cX+10) + "px";
	d.style.top = (cY+10) + "px";
}

function HideContent(d) {
	if(d.length < 1) { return; }
	document.getElementById(d).style.display = "none";
}

function ShowContent(d) {
	if(d.length < 1) { return; }
	var dd = document.getElementById(d);
	AssignPosition(dd);
	dd.style.display = "block";
}

function ReverseContentDisplay(d) {
	if(d.length < 1) { return; }
	var dd = document.getElementById(d);
	AssignPosition(dd);
	if(dd.style.display == "none") { dd.style.display = "block"; }
	else { dd.style.display = "none"; }
}

//Toggle Here is the code to toggle the display of the content Ñ show it, if it's hidden; hide it, if it's showing. Change the content as you please.

<a 
onmouseover="ReverseContentDisplay('uniquename1'); return true;"
href="javascript:ReverseContentDisplay('uniquename1')">
[show on mouseover, hide on mouse over - toggle]
</a>
<div 
id="uniquename1" 
style="display:none; 
   position:absolute; 
   border-style: solid; 
   background-color: white; 
   padding: 5px;">
Content goes here.
</div>


// Show Content. Content Has "Hide" Link.
// Here is the code to show the content. Then in the content itself is a link to hide it. Change the 
//content as you please, keeping the "hide" link.
<a 
onmouseover="ShowContent('uniquename2'); return true;"
href="javascript:ShowContent('uniquename2')">
[show, content has "hide" link]
</a>
<div 
id="uniquename2" 
style="display:none; 
   position:absolute; 
   border-style: solid; 
   background-color: white; 
   padding: 5px;">
Content goes here. 
<a 
onmouseover="HideContent('uniquename2'); return true;"
href="javascript:HideContent('uniquename2')">
[hide]
</a>
</div>


//Show Content On Mouseover. Hide Content On Mouseout.
//Here is the code to show the content when the mouse moves over it, and hide the content when
//the mouse moves off. Change the content as you please.
<a 
onmouseover="ShowContent('uniquename3'); return true;"
onmouseout="HideContent('uniquename3'); return true;"
href="javascript:ShowContent('uniquename3')">
[show on mouseover, hide on mouseout]
</a>
<div 
id="uniquename3" 
style="display:none; 
   position:absolute; 
   border-style: solid; 
   background-color: white; 
   padding: 5px;">
Content goes here.
</div>

//Show Content On Mouseover. Hide Content On Mouseout. Content Follows Mouse.
//Here is the code to show the content when the mouse moves over it, and hide the content when 
// the mouse moves off. It also causes the content to follow the mouse as it moves over the link (thank 
// you for the suggestion, Cam). Change the content as you please.
<a 
onmousemove="ShowContent('uniquename4'); return true;"
onmouseover="ShowContent('uniquename4'); return true;"
onmouseout="HideContent('uniquename4'); return true;"
href="javascript:ShowContent('uniquename4')">
[show on mouseover, hide on mouseout]
</a>
<div 
id="uniquename4" 
style="display:none; 
   position:absolute; 
   border-style: solid; 
   background-color: white; 
   padding: 5px;">
Content goes here.
</div>


