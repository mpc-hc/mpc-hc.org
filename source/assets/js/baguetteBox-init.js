/* global baguetteBox */

(function() {
    "use strict";

    var selector = ".gallery";
    var el = document.querySelectorAll(selector);

    if (el.length) {
        baguetteBox.run(selector, {
            async: false,
            buttons: "auto",
            noScrollbars: true
        });
    }

})();
