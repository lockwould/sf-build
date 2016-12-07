
jQuery(document).ready(function($) {



//header scroll change	
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.header--banner');

    if (scrollPos > 20) {
      navbar.addClass('scrolled');
    } else {
      navbar.removeClass('scrolled');
    }
  });


/////////////////////////////////////////
// FLIPBOOK FUNCTION 
////////////////////////////////////////
// define variables
var a = 0;
var i;
var active = 'sunrise';
var clicked;

// click event //////////////////////////////
$('.toggle input').click(function() {

	clicked = $(this).attr('value');

	// add clicked value to variable elements
	$('.variable').removeClass('sunrise sunset allday').addClass(clicked);

	// remove flipbook classes
	if(clicked!=active) {
	$('.images-contain').html('<img src="../assets/images/flipbook/sf-05.png" alt=""><img src="../assets/images/flipbook/sf-06.png" alt=""><img src="../assets/images/flipbook/sf-07.png" alt=""> <img src="../assets/images/flipbook/sf-09.png" alt=""> <img src="../assets/images/flipbook/sf-10.png" alt=""><img src="../assets/images/flipbook/sf-08.png" alt=""><img src="../assets/images/flipbook/sf-04.png" alt=""><img src="../assets/images/flipbook/sf-03.png" alt=""><img src="../assets/images/flipbook/sf-01.png" alt=""><img src="../assets/images/flipbook/sf-02.png" alt=""><img src="../assets/images/flipbook/sf-03.png" alt=""><img src="../assets/images/flipbook/sf-04.png" alt=""><img src="../assets/images/flipbook/sf-05.png" alt="">'); }

	// get array of images for later..... 
	var imgArray = $('.images--animated img');

	// if statements for clicked
	// if sunrise
	if(clicked == 'sunrise') { 
		if(active == 'allday') {
			i = 4;
			for(i;i>=0;i--) { 
				$(imgArray[i]).addClass('visible').addClass('delay' + a);
				a++; }
		}
		else if(active == 'sunset') {
			i = 8;
			for(i;i<=12;i++) { 
				$(imgArray[i]).addClass('visible').addClass('delay' + a);
				a++; }
		}
	}

	// if all day
	else if(clicked == 'allday') { 
		if(active == 'sunrise') {
			i = 0;
			for(i;i<5;i++) { 
				$(imgArray[i]).addClass('visible').addClass('delay' + a);
				a++; }
		}
		else if(active == 'sunset') {
			i = 8;
			for(i;i>=4;i--) { 
				$(imgArray[i]).addClass('visible').addClass('delay' + a);
				a++; }
		}
	}

	// if sunset
	else if(clicked == 'sunset') { 	
		if(active == 'sunrise') {
			i = 12;
			for(i;i>7;i--) { 
				$(imgArray[i]).addClass('visible').addClass('delay' + a);
				a++; }
		}
		else if(active == 'allday') {
			i = 4;
			for(i;i<9;i++) { 
				$(imgArray[i]).addClass('visible').addClass('delay' + a);
				a++; }
		}
	}

	// set a new active state
	active = clicked;
	a = 0;

}); // end of click function



////////////////////////////////////////
// COLOR CHANGER GALLERY - FULL WIDTH
///////////////////////////////////////
var colorImgs = $('#color-changer-full .changer--images div');
var colorBg = ["#bc3c8e","#6c358c","#0098a0","#d2ad2b","#faf3e6","#b2b2b2","#3d9157","#0070b3"];

$('#color-changer-full .changer--nav input').click(function() {
	
	var colorActive = $(this).attr('value');

	$(colorImgs).removeClass('active').addClass('inactive');
	$(colorImgs[colorActive]).removeClass('inactive').addClass('active');
	$('#color-changer-full.changer--bg').css('background', colorBg[colorActive]);

	//change text color if light background
	if(colorActive==4) {
		$('#color-changer-full .changer--text').css('color', '#474d51');
		$('#color-changer-full .changer--text .changer--nav h6').removeClass('light').addClass('dark');
		
	}

	else {
		$('#color-changer-full .changer--text').css('color', '#ffffff');
		$('#color-changer-full .changer--text .changer--nav h6').removeClass('dark').addClass('light');
	}

}); // end click function


////////////////////////////////////////
// COLOR CHANGER GALLERY - IMAGE ONLY
///////////////////////////////////////
var changerImgs = $('#color-changer .changer--images div');

$('#color-changer .changer--nav input').click(function() {

	var changerActive = $(this).attr('value');

	$(changerImgs).removeClass('active').addClass('inactive');
	$(changerImgs[changerActive]).removeClass('inactive').addClass('active');

}); // end click function



///////////////////////////////////////
// BUBBLE GALLERY FUNCTION 
//////////////////////////////////////
var bubbleImgs = $('.gallery--images>div');
var bubbleDesc = $('.gallery--desc>div');

$('.gallery--nav input').click(function() {

	var bubbleActive = $(this).attr('value');

	$(bubbleImgs).removeClass('active').addClass('inactive');
	$(bubbleDesc).removeClass('active').addClass('inactive');
	$(bubbleImgs[bubbleActive]).removeClass('inactive').addClass('active');
	$(bubbleDesc[bubbleActive]).removeClass('inactive').addClass('active');

}); // end click function



//////////////////////////////////
// OVERLAY GALLERY
/////////////////////////////////
var overlayImgs = $('#overlay-gallery .overlay--slides-wrapper .images-wrapper>div');
var overlayHeadings = $('#overlay-gallery .overlay--slides-wrapper .text-wrapper .heading>h2');
var overlayDesc = $('#overlay-gallery .overlay--slides-wrapper .text-wrapper .desc>span');
var overlayTransparent = $('#overlay-gallery .overlay--transparency');

$('#overlay-gallery .overlay--slides-wrapper .nav input').click(function() {

	var overlayActive = $(this).attr('value');

	$(overlayImgs).add(overlayHeadings).add(overlayDesc).removeClass('active').addClass('inactive');
	$(overlayImgs[overlayActive]).add(overlayHeadings[overlayActive]).add(overlayDesc[overlayActive]).removeClass('inactive').addClass('active');

	if(overlayActive==0) {
		$(overlayTransparent).css('background', 'rgba(256,256,256,0');
	}

	else {
		$(overlayTransparent).css('background', 'rgba(256,256,256,.75');
	}

}); // end click function


});