/* eslint-env jquery */

$(function() {
    'use strict';

    var $toggleLink = $('.toggleLink');
    var $totalToggleLinkCount = $('.toggleLink').length;

    if ($totalToggleLinkCount === 0) {
        return;
    }

    var $collapsedToggleLinkCount = $('.toggleLink.collapsed').length;

    function setButtonState() {
        if ($collapsedToggleLinkCount === 0) {
            // All elements are expanded
            $('.closeAll').prop('disabled', false);
            $('.expandAll').prop('disabled', true);
        } else if ($collapsedToggleLinkCount === $totalToggleLinkCount) {
            // All elements are collapsed
            $('.closeAll').prop('disabled', true);
            $('.expandAll').prop('disabled', false);
        } else {
            $('.closeAll').prop('disabled', false);
            $('.expandAll').prop('disabled', false);
        }
    }

    $toggleLink.on('click', function() {
        // If the .toggleLink element has the `.collapsed` class,
        // decrease or increase the $collapsedToggleLinkCount
        if ($(this).hasClass('collapsed')) {
            $collapsedToggleLinkCount--;
        } else {
            $collapsedToggleLinkCount++;
        }

        setButtonState();
    });

    $('.closeAll').click(function() {
        $('.panel-collapse.in').collapse('hide'); // hide any `panel`s
        $collapsedToggleLinkCount = $totalToggleLinkCount; // reset the global count
        setButtonState();
    });

    $('.expandAll').click(function() {
        $('.panel-collapse:not(".in")').collapse('show'); // show any `panel`s
        $collapsedToggleLinkCount = 0; // reset the global count
        setButtonState();
    });
});
