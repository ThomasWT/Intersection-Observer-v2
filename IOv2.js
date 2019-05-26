document.addEventListener("DOMContentLoaded", function (event) {
    if ('IntersectionObserver' in window) {
        // Create new IntersectionObserver
        const io = new IntersectionObserver(function (el) {
            // Element enters the viewport
            el.forEach(function (entry) {
                if (entry.intersectionRatio !== 0) {
                    entry.target.src = entry.target.dataset.src;
                }
            })
        });

        // Start observing all elements with a data-src attribute
        var elements = document.querySelectorAll('*[data-src]')
        Array.from(elements).forEach(function (el) {
            io.observe(el);
        });

        //lazyload videos
        var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy")); //create array of videos
        var lazyVideoObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (video) {
                if (video.isIntersecting && video.target.offsetWidth > 0 && video.target.offsetHeight > 0) { //if view has entered the viewport
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
        lazyVideos.forEach(function (lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    } else {
        var elements = document.querySelectorAll('*[data-src]')
        Array.from(elements).forEach(function (el) {
            el.src = el.dataset.src;
        });
    }
});
