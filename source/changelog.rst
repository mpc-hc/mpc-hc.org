.. title:: Changelog

Changelog
=========

.. note::
	This changelog only applies to current stable build.
	For complete logs check `links below <#all-changelogs>`_.

1.6.4 - 01 October 2012
-----------------------

* New:

 * MPCVideoDec: Add support for 4K for Intel HD Graphics 4000

 * AVI Splitter: Add a property page so that the support for non interleaved files can be turned on/off. Support for such files is now enabled by default.
   The old AVI Chunk Viewer dialog has been removed.
 * Added chapter indicators to the seekbar and the chapter name is now displayed in the time tooltip.

 * Added keys for changing volume by increments of 1

* Changed:

 * Remove .dat extension from the icon library and the formats (you can still associate it in the "Others" formats)

 * Re-enable the embedded resources viewer in the properties dialog and improve its "open in browser" function (when double clicking on a resource)

 * Store the path to MPC-HC's executable in HKEY_CURRENT_USER for external use. External applications that depend on that path should get it from there rather
   than HKEY_LOCAL_MACHINE. The old key in HKEY_LOCAL_MACHINE will be removed in the next version

 * Changed default maximum subtitle resolution to "Desktop"

* Updated:

 * Updated FFmpeg (n0.8-14000-g015b805)

 * Updated Little CMS to v2.4 (git 728139a)

 * Updated SoundTouch to v1.7.0

 * Updated MediaInfoLib to v0.7.60 r5048

 * Updated ZenLib to v0.4.28 r403

 * Updated VirtualDub to v1.10.3-test6

 * Basque, French, German, Russian, Simplified Chinese and Slovak translations

* Fixed:

 * The hand cursor wasn't shown in the web links in Keys and WebServer options page

 * Web interface: Fix the "Deploy" feature

 * Subtitles didn't show in some cases when using the internal subtitles renderer

 * Improve DVB subtitles handling:

  * Fix missing subtitles

  * Ticket :trac:`#2589`, Fix wrongly colored subtitles

 * Ticket :trac:`#48`, :trac:`#515`, :trac:`#2533`, Improve PGS subtitles (BluRay) parsing:

  * Fix missing subtitles

  * Fix wrong display duration

 * Ticket :trac:`#102`, Fix playback of VideoCD as disk

 * Ticket :trac:`#790`, :trac:`#1511`, :trac:`#2269`, :trac:`#2612`, VSFilter: Fix a bug causing the subtitles not to show when using YUY2 color space

 * Ticket :trac:`#2219`, :trac:`#2610`, MPEG Splitter/AAC Decoder: Add basic support from AAC LATM tracks

 * Ticket :trac:`#2267`, WebUI: added support for '#', '%', '+' and other characters in file names

 * Ticket :trac:`#2452`, Fix color controls in certain situations

 * Ticket :trac:`#2455`, :trac:`#2484`, :trac:`#2614`, WebServer: Better Unicode support

 * Ticket :trac:`#2540`, Fix handling of big API messages

 * Ticket :trac:`#2547`, The master window handle was erroneously reset when starting a file from the explorer.

 * Ticket :trac:`#2599`, Fix "Snap to desktop edges" option for multi-monitor setup

 * Ticket :trac:`#2606`, MPEG Splitter: Don't output the fake "No subtitle" track when the file contains no subtitles

All changelogs
--------------

.. csv-table::
	:header: "Link", "Description"
	:widths: 20, 80

	"`Complete changelog <http://sourceforge.net/apps/trac/mpc-hc/wiki/Changelog>`_", "Complete changelog for each and every stable build."
	"`Git log <https://github.com/mpc-hc/mpc-hc/commits/master/>`_", "Absolutely unmodified logs on every commit that got committed into the master branch."
