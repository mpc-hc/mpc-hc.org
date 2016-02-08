// Original source: https://varvy.com/pagespeed/defer-images.html

(function() {
    "use strict";

    var imgElement = document.getElementsByTagName("img");

    if (imgElement) {

        var imgDefer = (function () {
            for (var i = 0, len = imgElement.length; i < len; i++) {
                if (imgElement[i].hasAttribute("data-src")) {
                    imgElement[i].setAttribute("src", imgElement[i].getAttribute("data-src"));
                    imgElement[i].removeAttribute("data-src");
                    imgElement[i].className += " loaded";
                }
            }
        });

        window.addEventListener("load", imgDefer, false);
    }

})();
