// Source: https://www.feedthebot.com/pagespeed/defer-images.html

/* jshint browser: true */

(function() {
    "use strict";

    function imgInit() {
        var imgDefer = document.getElementsByTagName("img");

        for (var i = 0; i < imgDefer.length; i++) {
            if (imgDefer[i].getAttribute("data-src")) {
                imgDefer[i].setAttribute("src", imgDefer[i].getAttribute("data-src"));
            }
        }
    }

    window.onload = imgInit;
}());
