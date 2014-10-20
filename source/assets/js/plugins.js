// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// Add custom class to our download links

(function() {
    $('body.downloads')
      .find('a[href^="http://sourceforge.net/projects/mpc-hc/files/"]')
      .each(function() {
        $(this).addClass('sourceforge_accelerator_link');
    });
}());


$('.alert-dismissible').each(function() {
    var $alert = $(this);
    var alertNameLSProp = $alert.attr('data-alert-id');

    if (localStorage.getItem(alertNameLSProp) === 'true') {
        $alert.remove();
    } else {
        $alert.on('close.bs.alert', function() {
            localStorage.setItem(alertNameLSProp, true);
        });
    }
});


// Google analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-9335012-2', 'mpc-hc.org');
ga('set', 'anonymizeIp', true);
ga('send', 'pageview');
