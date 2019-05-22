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

        //lazyload videos
        var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(video) {
                if (video.isIntersecting && $(video.target).is(":visible")) {
                    for (var source in video.target.children) {
                        var videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            videoSource.src = videoSource.dataset.src;
                        }
                    }

                    video.target.load();
                    video.target.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video.target);
                }
            });
        });

        lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });

        //lazyload iframes
        // Create new IntersectionObserver
        const iframeO = new IntersectionObserver(function(iframe_tags) {
            // Element enters the viewport
            iframe_tags.forEach(function(entry) {
                if (entry.intersectionRatio !== 0) {
                    set_iframe_src(entry.target);
                    // Element leaves the viewport
                }
            })
        });
        // Start observing for each iframe tag
        var iframe_elements = document.querySelectorAll('iframe[data-src]')
        Array.from(iframe_elements).forEach(function(iframe_tag) {
            iframeO.observe(iframe_tag);
        });

    } else {
        var elements = document.querySelectorAll('img[data-src]')
        Array.from(elements).forEach(function(image_tag) {
            image_tag.src = image_tag.dataset.src;
        });
    }
});
