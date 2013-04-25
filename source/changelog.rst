.. title:: Changelog

Changelog
=========

.. note::
    This changelog only applies to current stable build.
    For complete logs check the `links below <#all-changelogs>`_.

1.6.7 - 25 April 2013
---------------------

* New:

 * DVB capture: Improve channel switching

 * Subtitle downloader improvements:

   * Ticket :trac:`#2144`, Sort by language and then by filename by default. Subtitles matching a language set as preferred in the options are now displayed first in the result list

   * Ticket :trac:`#2926`, Double-clicking or pressing the "Enter" key will download the selected subtitle(s)

 * Ticket :trac:`#2837`, New INI parser: the accesses are now cached for faster settings loading/saving. Using the INI file should now be as fast as using the registry

 * Ticket :trac:`#2987`, Playlist improvements:

   * Scroll and select the first newly added item

   * Put MPC-HC on top and give the focus to the playlist after a drag and drop

* Changed:

 * Ticket :trac:`#2689`, Replace "On top -> Never" by "On top -> Default". In most of the cases "On top -> Default" will have the exact same behavior than "On top -> Never"
   but it won't try to override the "On top" flag if an external tool sets it

 * Ticket :trac:`#3049`, Re-enable VSync by default for Windows XP users

* Updated:

 * Little CMS to v2.5 (git cde00fd)

 * VirtualDub to v1.10.4-test6

 * Basque, Catalan, Czech, French, German, Greek, Simplified Chinese, Slovak, Turkish and Ukrainian translations

* Fixed:

 * Fix a crash when VMR-7 (renderless) renderer failed to load

 * SSA subtitles rendering: Improve error checking to avoid possible crashes when the SSA script was using obviously wrong values

 * Ticket :trac:`#1392`, DVD subtitles: Improve rendering in case of overlapping. Ensure that both subtitles will be shown.

 * Ticket :trac:`#2991`, Fix loading of MicroDVD subtitles

 * Ticket :trac:`#3001`, "After Playback": Always give "Once" events a higher priority than "Always" events

 * Ticket :trac:`#3023`, "File -> Load Subtitle" didn't work anymore for DVD

 * Ticket :trac:`#3045`, Go to dialog: Fix frame rate detection for DVDs


All changelogs
--------------

.. csv-table::
    :header: "Link", "Description"
    :widths: 20, 80

    "`Complete changelog <https://trac.mpc-hc.org/wiki/Changelog>`_", "Complete changelog for each and every stable build."
    "`Git log <https://github.com/mpc-hc/mpc-hc/commits/master/>`_", "Absolutely unmodified logs on every commit that got committed into the master branch."
