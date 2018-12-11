/* eslint-env jquery */

$(function() {
    'use strict';

    var $el = $('.toggleLink');

    if ($el.length === 0) {
        return;
    }

    var collapsedToggleLinkCount = $('.toggleLink.collapsed').length;
    var totalToggleLinkCount = $el.length;

    function checkButtonState() {
        if (collapsedToggleLinkCount === 0) {
            // All elements are expanded
            $('.closeAll').prop('disabled', false);
            $('.expandAll').prop('disabled', true);
        } else if (collapsedToggleLinkCount === totalToggleLinkCount) {
            // All elements are collapsed
            $('.closeAll').prop('disabled', true);
            $('.expandAll').prop('disabled', false);
        } else {
            $('.closeAll').prop('disabled', false);
            $('.expandAll').prop('disabled', false);
        }
    }

    $el.on('click', function() {
        // If the .toggleLink element has the `.collapsed` class,
        // decrease or increase the collapsedToggleLinkCount
        if ($(this).hasClass('collapsed')) {
            collapsedToggleLinkCount--;
        } else {
            collapsedToggleLinkCount++;
        }

        checkButtonState();
    });

    $('.closeAll').click(function() {
        $('.panel-collapse.in').collapse('hide'); // hide any `panel`s
        collapsedToggleLinkCount = totalToggleLinkCount; // reset the global count
        checkButtonState();
    });

    $('.expandAll').click(function() {
        $('.panel-collapse:not(".in")').collapse('show'); // show any `panel`s
        collapsedToggleLinkCount = 0; // reset the global count
        checkButtonState();
    });
});
