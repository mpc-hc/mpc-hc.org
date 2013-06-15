.. title:: Changelog

Changelog
=========

.. note::
    This changelog only applies to current stable build.
    For complete logs check the `links below <#all-changelogs>`_.

1.6.8 - 15 June 2013
---------------------

* New:

 * DVB: Show the parental rating and the content type within the EPG information when available

 * Ticket :trac:`#2872`, Add support for DVB-T2 and improve channel switching
   (new options are available to have a finer control on switching process)

 * Ticket :trac:`#3179`, DVB: Support EPG information for Freeview broadcast (UK DVB-T2)

* Changed:

 * Audio Switcher improvements:

   * Ticket :trac:`#1936`, Improve the normalization algorithm to avoid huge volume variations

   * Use percentage for the boost setting since it is easier to understand for most people

   * Add a setting to change the max normalization factor and use a default max normalization factor of 4 instead of 10

 * Ticket :trac:`#2567`, New About dialog with more detailed information and a "Copy to clipboard" feature to ease support

* Updated:

 * Little CMS to v2.5-rc1

 * zlib to v1.2.8

 * Unrar to v5.0.6

 * MediaInfoLib to v0.7.63

 * ZenLib to v0.4.29

 * Basque, Czech, French, German, Greek, Japanese, Romanian, Russian, Simplified / Traditional Chinese,
   Turkish and Ukrainian translations

* Fixed:

 * PGS and DVB subtitles: Fix missing subtitles after resizing the window when using the subpicture queue

 * Open dialog: if a URL was previously enterer in the "Open" or "Dub" fields an error message was shown when clicking the "Browse" button

 * Vobsub files with language/title in their filenames weren't auto-loaded

 * Fix a memory leak: the memory consumption would increase noticeably until the file was closed when the file had chapters and the chapter marks on seekbar were enabled

 * Capture mode: Fix reseting the renderer. When reseting the renderer in capture mode playback was stopped and never restarted

 * Ticket :trac:`#3110`, DVB: Improve compatibility with some drivers for which MPC-HC failed to find any channel during the channel scan

 * Ticket :trac:`#3113`, MPC-HC was sometimes slow to close (audio kept playing for a few seconds)

 * Ticket :trac:`#3175`, DVB: Changing the channel was exiting fullscreen or maximized mode

 * Ticket :trac:`#3176`, EVR renderers: Fix high CPU and memory usage when switching the user account


All changelogs
--------------

.. csv-table::
    :header: "Link", "Description"
    :widths: 20, 80

    "`Complete changelog <https://trac.mpc-hc.org/wiki/Changelog>`_", "Complete changelog for each and every stable build."
    "`Git log <https://github.com/mpc-hc/mpc-hc/commits/master/>`_", "Absolutely unmodified logs on every commit that got committed into the master branch."
