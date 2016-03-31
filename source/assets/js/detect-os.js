/* jshint browser:true */
(function() {
    "use strict";

    var arch = navigator.userAgent.match(/x86_64|Win64|WOW64/) ||
               navigator.cpuClass === "x64" ? "x64" : "x86";
    var href = "https://binaries.mpc-hc.org/";
    var element = document.getElementById("downloadButton");

    // getElementById returns null if it has no matches
    if (element) {
        var version = element.getAttribute("data-version");
        // querySelector is enough here since we only need the first match
        var buttonSubArchText = document.querySelector(".button-sub span");
        var folder;

        if (arch === "x64") {
            folder = "MPC%20HomeCinema%20-%20x64";
            buttonSubArchText.textContent = "64-bit";
        } else {
            folder = "MPC%20HomeCinema%20-%20Win32";
            buttonSubArchText.textContent = "32-bit";
        }

        href += folder + "/MPC-HC_v" + version + "_" + arch + "/MPC-HC." + version + "." + arch + ".exe";

        element.setAttribute("href", href);
    }
})();
