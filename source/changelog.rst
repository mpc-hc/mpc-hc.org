.. title:: Changelog

Changelog
=========

.. note::
    This changelog only applies to current stable build.
    For complete logs check the `links below <#all-changelogs>`_.

1.6.6 - 17 March 2013
------------------------

* New:

 * Formats: The space key can now be used to enable/disable formats

 * Miscellaneous: Add button to export key bindings

 * Add the ability to choose the scale factor (relative to the screen size) for the auto-fit zoom

 * Internal Subtitles Renderer: Show all subtitles tracks in the Play -> Subtitles menu. That includes all the embedded tracks exhibited by the source filter and the external tracks.

 * Add a new shader that over brightens with gradient from the bottom to the top of the screen. It needs LCD monitors with low viewing angle (~170/160).

 * DVB: Remember audio and subtitle track selection.

 * Add an OSD reminder when Escape is pressed in D3D Fullscreen

 * Ticket :trac:`#649`, Add RARFileSource as an internal filter. Allows rar files without compression to be played without unpacking them.

 * Ticket :trac:`#899`, DVB: Add signal statistic to the status bar

 * Ticket :trac:`#1025`/:trac:`#1054`, Add the ability to select the default track directly by its number in MPC-HC and the standalone MPEG Splitter

 * Ticket :trac:`#2050`, Add Romanian translation

 * Ticket :trac:`#2905`, Support DTS-HD and E-AC3 passthrough

 * Ticket :trac:`#2935`, Add support for sending "Now playing" information to Skype

* Changed:

 * UI: Use a more native look and feel for the options dialog tree

 * More resilient support for MPL2 and SRT subtitles formats:

   * Ticket :trac:`#2779`, Support MicroDVD tags in MPL2 subtitles files. This is normally not supported but MPL2 files that use MicroDVD tags for formatting are quite common.

   * Support SRT files with missing millisecond part in the timecodes.

 * Re-enable the option to bypass the DVD/BD path selection. The user won't be asked to choose the location of the DVD/BD player (or folder) when this option is enabled.

 * Changed default D3D Fullscreen hotkey to Ctrl+Alt+F

 * Disabled Frame Time Correction hotkey by default

 * DVB: Some filters that are known to be incompatible with the BDA source filters are now blacklisted

 * External filters: Use two separated lists for x86 and x64 since x86 filters only work with MPC-HC x86 and vice versa

 * Ticket :trac:`#978`, Apply the "Repeat" option after "Play next in the folder": the option will now take effect after the next file in the folder was played (similarly to what happens for playlist items)

 * Ticket :trac:`#1620`, UI: Use the new styled radio bullet for menu's items

 * Ticket :trac:`#2878`, Removed obsolete MSN Messenger support

 * Ticket :trac:`#2924`, Use the current file directory as default folder for the "Load Subtitles" dialog

 * Ticket :trac:`#2947`, VSync is now disabled in the default renderer settings

* Updated:

 * FFmpeg (n0.8-19080-g2bac153)

 * Little CMS to v2.4 (git 4ba0259)

 * Logitech SDK to v3.01 (driver 8.00.100)

 * SoundTouch to v1.7.1 r170

 * VirtualDub to v1.10.4-test1

 * MediaInfoLib to v0.7.62

 * ZenLib to v0.4.28 r430

 * Basque, Catalan, Czech, German, French, Greek, Japanese, Polish, Russian, Swedish, Traditional and Simplified Chinese, Slovak and Ukrainian translations

* Fixed:

 * Various WebUI fixes:

  * Fix seeking

  * Fix volume slider going out of bounds with IE in player.html

  * Fix incorrect encoding of the parent directory's path in browser.html

 * MPCVideoDecoder: Fix low merit internal filter

 * MPCVideoDecoder: The "Read Aspect Ratio from stream" option didn't always work right

 * DVB EPG: Some strings weren't correctly displayed in some cases

 * PGS Subtitles: Some subtitles were displayed with wrong colors or even not displayed at all

 * EVR-CP renderer: Fix some cases where VSync breaks smooth playback

 * The external filters list was lost when switching from registry to ini or vice-versa

 * Ticket :trac:`#84`, WebServer: The filenames weren't correctly URL decoded

 * Ticket :trac:`#593`, Fixed EVR-CP using the CPU while the player is paused when VSync is on

 * Ticket :trac:`#890`, DVB: Disable pause for capture mode to avoid accidental playback stop

 * Ticket :trac:`#1554`, The OSD was looking bad when using the EVR Sync renderer

 * Ticket :trac:`#1600`, Improve the naming of subtitles tracks (avoid showing a useless and ugly comma)

 * Ticket :trac:`#2396`, DVB: Fix default audio track selection when its type is different than the first audio track

 * Ticket :trac:`#2423`, Fix wrong rounding leading to small black bars when resizing the window. This was mostly visible when using the "auto-fit" zoom or when resizing manually.

 * Ticket :trac:`#2783`, Fix crash when generating the chapter marks

 * Ticket :trac:`#2805`, AviSplitter: Fix a crash when closing the file while re-indexing

 * Ticket :trac:`#2838`, The window wasn't draggable anymore by clicking on the information panel

 * Ticket :trac:`#2839`, Post-resize shaders didn't work with VMR-9 (renderless)

 * Ticket :trac:`#2855`, The filename could be wrong when saving a screenshot or thumbnails

 * Ticket :trac:`#2859`, FLACSource: Improve timestamps accuracy. This fixes some cases where the end of the file wasn't played.

 * Ticket :trac:`#2863`, The OSD was incorrect when restarting the playback of a file after it ended

 * Ticket :trac:`#2864`, VobSub subtitles were auto-loaded twice

 * Ticket :trac:`#2881`, "Auto-fit" and "Auto-fit (Larger Only)" zooms gave different results depending on if they were used in windowed or fullscreen mode

 * Ticket :trac:`#2889`, Fix incorrectly displayed OSD when using EVR and VRM-9 (windowed) renderers

 * Ticket :trac:`#2902`, DVB: Some old channels weren't deleted when redoing the scan

 * Ticket :trac:`#2913`, Fixed DXVA1 MPEG2 decoder

 * Ticket :trac:`#2931`, DVB Subtitles: Fix a crash with some subtitles streams

 * Ticket :trac:`#2934`, MPEG Splitter: Some files couldn't be opened

 * Ticket :trac:`#2939`, Some fields of the renderer statistics were wrong

 * Ticket :trac:`#2971`, Fix a rare crash on startup

 * Ticket :trac:`#2984`, SSA subtitles: Fix outline background with \frx or \fry tags

 * Ticket :trac:`#2985`, Prevent the volume OSD message from erasing the filename OSD message on startup


All changelogs
--------------

.. csv-table::
    :header: "Link", "Description"
    :widths: 20, 80

    "`Complete changelog <https://trac.mpc-hc.org/wiki/Changelog>`_", "Complete changelog for each and every stable build."
    "`Git log <https://github.com/mpc-hc/mpc-hc/commits/master/>`_", "Absolutely unmodified logs on every commit that got committed into the master branch."
