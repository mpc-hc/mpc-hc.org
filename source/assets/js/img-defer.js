// Original source: https://varvy.com/pagespeed/defer-images.html

/* jshint browser:true */

(function() {
    "use strict";

    function imgDefer() {
        var imgElement = document.getElementsByTagName("img");

        for (var i = 0; i < imgElement.length; i++) {
            if (imgElement[i].hasAttribute("data-src")) {
                imgElement[i].setAttribute("src", imgElement[i].getAttribute("data-src"));
                imgElement[i].removeAttribute("data-src");
            }
        }
    }

    if (window.addEventListener) {
        window.addEventListener("load", imgDefer, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", imgDefer);
    } else {
        window.onload = imgDefer;
    }
}());
