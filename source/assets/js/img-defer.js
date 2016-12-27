(function loadImgDefer () {
    'use strict';

    var images = document.getElementsByTagName('img');
    var imagesNumber = images.length;

    if (imagesNumber === 0) {
        return;
    }

    function imgDefer () {
        for (var i = 0; i < imagesNumber; i++) {
            if (images[i].hasAttribute('data-src')) {
                images[i].setAttribute('src', images[i].getAttribute('data-src'));
                images[i].removeAttribute('data-src');
                images[i].classList.add('loaded');
            }
        }
    }

    window.addEventListener('load', imgDefer, false);

})();
