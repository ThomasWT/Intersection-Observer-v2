/**
 * Created by Vivek Kumar on 09/09/17.
 * vivekgari@gmail.com
 * https://vivekkumar11432.wordpress.com
 * https://github.com/vivek11432
 */
document.addEventListener("DOMContentLoaded", function(event) {
    function set_image_src(image_tag) {
        image_tag.src = image_tag.dataset.src;
    };

    function set_iframe_src(iframe_tag) {
        iframe_tag.src = iframe_tag.dataset.src;
        resizeIframe(iframe_tag)
    };
    if ('IntersectionObserver' in window) {
        // Create new IntersectionObserver
        const io = new IntersectionObserver(function(image_tags) {
            // Element enters the viewport
            image_tags.forEach(function(entry) {
                if (entry.intersectionRatio !== 0) {
                    set_image_src(entry.target);
                    // Element leaves the viewport
                }
            })
        });
        // Start observing for each image tag
        var elements = document.querySelectorAll('img[data-src]')
        Array.from(elements).forEach(function(image_tag) {
            io.observe(image_tag);
        });
    } else {
        var elements = document.querySelectorAll('img[data-src]')
        Array.from(elements).forEach(function(image_tag) {
            image_tag.src = image_tag.dataset.src;
        });
    }
});
