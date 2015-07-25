/* jshint browser: true, jquery: true */

(function() {
    "use strict";
    $(document).ready(function() {
        $(".alert-dismissible").each(function() {
            var $alert = $(this);
            var $dataAlertId = $alert.attr("data-alert-id");

            if (!window.localStorage) {
                return;
            }

            if (localStorage.getItem($dataAlertId) === "true") {
                $alert.remove();
            } else {
                $alert.on("close.bs.alert", function() {
                    localStorage.setItem($dataAlertId, true);
                });
            }
        });
    });
}());
