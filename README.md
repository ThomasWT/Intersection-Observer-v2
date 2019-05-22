# lazyloading images, iframes and videos with intersection observer
Credits to https://github.com/vivek11432/Intersection-Observer-v2 for the basecode

demo here: https://thomaswt.github.io/Intersection-Observer-v2/index.html

<img src="https://i.imgur.com/VOpM6Qn.gif">

Video element
```html
<video class="lazy" height="auto" preload="none">
   <source data-src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" type="video/mp4">
</video>
```

Iframe element
```html
<iframe data-src="https://www.w3schools.com"></iframe>
```


Multiple images entering the viewport
```html
<img style="display:inline-block;" data-src="/img/myimg.jpg">
<img style="display:inline-block;" data-src="/img/myimg2.jpg">
```
