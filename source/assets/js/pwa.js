/* eslint no-console:off */

(function() {
    'use strict';

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.min.js').then(function(registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }).catch(function(error) {
                console.log('ServiceWorker registration failed: ', error);
            });
        });
    }
})();
