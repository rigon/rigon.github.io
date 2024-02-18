
var galleries = new Array();

function royalGalleryAlbum(e) {
	$('body').append('<div class="rsAlbumList"><ul><li class="rsAlbumListHideBtn" onclick="$(\'.rsAlbumList\').hide(400);">Hide</li></ul></div>');	
	
	var pCount = 0;
	$(e).children('p').each(function() {
		galleries[pCount] = $(this).html();
		$('.rsAlbumList').children('ul').append('<li onclick="applyAlbum(' + pCount + ');">' + $(this).attr('title') + '</li>');
		pCount++;
	});
	
	$(e).empty();
	$(e).remove();
	
	applyAlbum(0);
}

		
		
		
var count=0;
function applyAlbum(album) {
	// If is not the first time
	if(count>0) {
		$("#_gallery"+(count-1)).empty();
		$("#_gallery"+(count-1)).remove();
	}
	
	// New DIV gallery
	$('body').append('<div id="_gallery' + count + '" class="royalSlider rsDefault"></div>');
	
	//for(var i=0;i<album.length;i++) {
	//	$("#_gallery"+count).append('<a class="rsImg" href="' + album[i] + '">!!!NAME GOES HERE!!!<img width="96" height="72" class="rsTmb" src="http://www.rigon.tk/thumbnailify/index.php?f=' + album[i] + '" /></a>');
	//}
	$("#_gallery"+count).append(galleries[album]);
	
	// Royal Slider
	$("#_gallery"+count).royalSlider({
		fullscreen: {
			enabled: true,
			nativeFS: true
		},
		controlNavigation: 'thumbnails',
		autoScaleSlider: true, /*
		autoScaleSliderWidth: "100%",     
		autoScaleSliderHeight: "100%",*/
		loop: false,
		imageScaleMode: 'fit-if-smaller',
		navigateByClick: true,
		numImagesToPreload:2,
		arrowsNav:true,
		arrowsNavAutoHide: true,
		arrowsNavHideOnTouch: true,
		keyboardNavEnabled: true,
		fadeinLoadedSlide: true,
		globalCaption: true,
		globalCaptionInside: false,
		thumbs: {
			appendSpan: true,
			firstMargin: true,
			paddingBottom: 4
		}
	});
	
	// Adds the Album List Button
	$(".rsOverflow").append(
		"<div class=\"rsAlbunsBtn\" onclick=\"showAlbum();\">"+
			"<div class=\"rsAlbunsIcn\">"+
			"</div>"+
		"</div>");
	$(".rsAlbumList").hide(50);
	
	count++;
}


function showAlbum() {
	$(".rsAlbumList").show(400);
}
			