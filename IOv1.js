/**
 * Created by Vivek Kumar on 09/09/17.
 * vivekgari@gmail.com
 * https://vivekkumar11432.wordpress.com
 * https://github.com/vivek11432
 */

document.addEventListener("DOMContentLoaded", function(event) {

	function set_image_src(image_tag){
		image_tag.src = image_tag.dataset.src;
	};


//------------------------------Code to load just first image even if more than one image is there------------------------------
	// Create new IntersectionObserver
	const io = new IntersectionObserver( function(image_tags) {
		// Available data when an intersection happens
		console.log(image_tags);
		// Element enters the viewport
		// If one or more images come into viewport simultaneously
		image_tags.forEach(function (image_tag) {
			if(image_tag.intersectionRatio !== 0) {
				set_image_src(image_tag.target);
				// Element leaves the viewport
			} else {
				console.log("invisible");
			}
		});
	});


//------------------------------Code to load all images that are there in view------------------------------

	// const io = new IntersectionObserver( function(image_tag) {
	// 	// Available data when an intersection happens
	// 	console.log(image_tag);
	// 	// Element enters the viewport
	// 	if(image_tag[0].intersectionRatio !== 0) {
	// 		set_image_src(image_tag[0].target);
	// 		// Element leaves the viewport
	// 	} else {
	// 		console.log("invisible");
	// 	}
	// });



	// Start observing for each image tag
	document.querySelectorAll('img[data-src]').forEach(function (image_tag) {
		io.observe(image_tag);
	});

});