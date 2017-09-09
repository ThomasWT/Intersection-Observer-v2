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
	if ('IntersectionObserver' in window) {
		// Create new IntersectionObserver
		const io = new IntersectionObserver(function (image_tags) {
			// Element enters the viewport
			if(image_tags[0].intersectionRatio !== 0) {
				set_image_src(image_tags[0].target);
				// Element leaves the viewport
			} else {
				console.log("invisible");
			}
		});
		// Start observing for each image tag
		document.querySelectorAll('img[data-src]').forEach(function (image_tag) {
			io.observe(image_tag);
		});
	}
	else {
		document.querySelectorAll('img[data-src]').forEach(function (image_tag) {
			image_tag.src = image_tag.dataset.src;
		});
	}
});