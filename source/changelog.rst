.. title:: Changelog

Changelog
=========

.. note::
    This changelog only applies to current stable build.
    For complete logs check the `links below <#all-changelogs>`_.

1.6.5 - 16 December 2012
------------------------

* New:

 * Add a hotkey to open the subtitles downloader dialog

 * Web server: various performance improvements

 * VobSub subtitles can now also be loaded by selecting or draging and dropping the .sub file

 * FLACSource: Basic support for embedded metadata

 * Take currently applied delay into account when saving subtitles using File > Save subtitle

 * The volume steps can now be changed on the playback options page

 * Ticket :trac:`#439`, External subtitles: support UTF-8 without BOM

 * Ticket :trac:`#728`, Show tooltips in the information panel so that truncated lines can be read completely

 * Ticket :trac:`#888`, Show the information about the current DVB program in the information bar

 * Ticket :trac:`#1004`, The playing speed steps can now be changed on the playback options page

 * Ticket :trac:`#1617`, Use MPC-HC's icon when registering the context menu entries

 * Ticket :trac:`#1673`, FLACSource: Basic support for embedded CUE sheet

 * Ticket :trac:`#1680`, Add Greek translation

 * Ticket :trac:`#2425`, Improve the "Remember file/DVD position" feature: when a file/DVD that was already in the list is reopened, it now goes at the top the list. This way files/DVDs that are often used will stay in the list instead of being inexorably pushed out of it.

 * Ticket :trac:`#2647`, Add .3ga to known formats

 * Ticket :trac:`#2712`, MPCVideoDec: Add the ability to force the interlaced flag

 * Ticket :trac:`#2737`, Improve file associations on Windows 8. The system dialog will be used to set MPC-HC as default handler since it is not possible anymore to do that programmatically.

 * Ticket :trac:`#2739`, Support custom pixel shaders with madVR v0.85.0

* Changed:

 * Removed hotkeys to change the volume by 1%

 * VSFilter: Allow floating-point values for \\fscx and \\fscy

 * Ticket :trac:`#2698`, Allow the App key to be used as a hotkey which opens the player menu by default

* Updated:

 * FFmpeg (n0.8-16924-ga8b3f0c)

 * MediaInfoLib to v0.7.61

 * ZenLib to v0.4.28 r411

 * Little CMS to v2.4 (git 026ba4f)

 * SoundTouch to v1.7.0 r160

 * VirtualDub to v1.10.3-test11

 * Armenian, Basque, Czech, French, German, Japanese, Russian, Polish, Simplified and Traditional Chinese, Slovak and Ukrainian translations

* Fixed:

 * API: CMD_PAUSE was acting as CMD_PLAY and vice versa

 * MpaDecFilter: updated CMixer, avoid possible memory leaks

 * MPEG Splitter: Fix parsing of some malformed TS files

 * VSFilter (auto-loading version) didn't load on Windows 7

 * VSFilter: Fix and update the blacklist

 * Internal Subtitle Renderer/VSFilter: Fix high RAM usage with some complex subtitles

 * DVB EPG: Fix the start time of the current program being off by one hour because of incorrect DST

 * Internal Subtitle Renderer/VSFilter: Fix most cases where rotating/shearing is not properly scaled

 * Ticket :trac:`#376`, Fix subtitles when switching from animated subs to non-animated subs. The subtitles' timings were not correctly respected after switching from an animated subtitles track to a non-animated subtitles track.

 * Ticket :trac:`#1782`, Correctly empty the "Recent" jump list when erasing the history and ensure that no item is added to Windows recent documents menu or to the "Recent" jump list when the history is disabled

 * Ticket :trac:`#1953`, DVB EPG: Fix default encoding

 * Ticket :trac:`#2326`, Fix a crash when closing the player with the player menu open

 * Ticket :trac:`#2537`, #2554, Fix the "Attempted an unsupported operation" error in the Save dialogs on Vista and newer systems

 * Ticket :trac:`#2572`, FLACSource: Fix playback for some files

 * Ticket :trac:`#2619`, FLVSplitter: PCM audio doesn't play

 * Ticket :trac:`#2673`, MPEGSplitter: Fix playback for some TS files

 * Ticket :trac:`#2685`, FLACSource: Fix a crash with some corrupted file

 * Ticket :trac:`#2699`, AviSplitter: Fix a potential crash with PCM tracks

 * Ticket :trac:`#2703`, Fix a crash that could happen when auto-loading some subtitles

 * Ticket :trac:`#2751`, Improve DVBSub parsing: some subtitles could have been missing


All changelogs
--------------

.. csv-table::
    :header: "Link", "Description"
    :widths: 20, 80

    "`Complete changelog <https://trac.mpc-hc.org/wiki/Changelog>`_", "Complete changelog for each and every stable build."
    "`Git log <https://github.com/mpc-hc/mpc-hc/commits/master/>`_", "Absolutely unmodified logs on every commit that got committed into the master branch."
