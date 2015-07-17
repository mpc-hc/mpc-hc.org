/* jshint browser:true, jquery:true */

$(document).ready(function () {
    "use strict";

    $(".thumbnail").fancybox({
        padding: 0,
        helpers: {
            title: { type: "float" }
        },
        beforeLoad: function () {
            var id = $(this.element).data("title-id");
            if (id) {
                var el = $("#" + id);
                if (el.length) {
                    this.title = el.html();
                }
            }
        }
    });
});
