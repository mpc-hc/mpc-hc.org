.. title:: Changelog

Changelog
=========

.. note::
    This changelog only applies to current stable build.
    For complete logs check the `links below <#all-changelogs>`_.

1.7.0 - 29 September 2013
-------------------------

* New:

 * Replace the internal filters with LAV Filters. LAV Filters are modern open source DirectShow filters based on FFmpeg. They are known to be reliable and fast and overall should be more stable than the old filters. MPC-HC integrates LAV Filters directly and no extra installation steps are required. The embedded version of LAV Filters doesn't interfere at all with other installed DirectShow filters (including the standalone versions of LAV Filters).

  .. warning::
   Note to XP users: hardware decoding is only supported on nVidia graphic adapters. If you
   really need a DXVA decoder, you can use a standalone version of MPC Video Decoder.

 * Support loading HTTP/RTSP/UDP/RTP streams using embedded source filters

 * D3DFullscreen can now switch to windowed mode (just like regular fullscreen mode)

 * Audio Switcher: Show all audio tracks available, including all the embedded tracks exhibited by the source filter and the external tracks

 * Playlist: Add a "Move to Recycle Bin" right click option, with optional keyboard shortcut

 * Ticket :trac:`#533`, Add a command line switch (``/device``) to open the default video device

 * Ticket :trac:`#3107`, Add support for playing from standard input.
   Use "``-``" as a special filename to designate the standard input. Examples:

   .. parsed-literal::

     > mpc-hc.exe - < sample.ts
     > a_prog.exe | mpc-hc.exe -

 * Improved RARFileSource integration:

   * Added support for subtitle database

   * Added support for file properties and MediaInfo

   * "File -> Save a copy" now extracts the file from the RAR archive

 * Windows 8.1 support

* Changed:

 * All track selection sub-menus are now centralized in the Play menu, the similar sub-menus have been removed from the Navigate menu

 * The naming of external subtitles item in Play -> Subtitles menu has been improved to get rid of the uninformative "Undetermined" name

 * When "Prefer external subtitles over embedded subtitles" is enabled, an external track is always selected by default even if an embedded track matches a preferred language

 * The "Go To" menu entry has been moved to the "Navigate" menu

 * D3DFullscreen changes:

   * toggle hotkey is now disabled by default

   * support for madVR has been removed (it already has exclusive mode)

   * 10-bit RBG output now falls back to 8-bit output if the display does not support it

 * Remove D2VSource; it's unmaintained and basically unused

 * WebUI: Switched to HTML5 and improved the cross browser support (**IE8** or newer is needed, other browsers should work fine)

* Updated:

 * Little CMS to v2.5 (git ad2cb04)

 * Unrar to v5.0.0

 * MediaInfoLib to v0.7.64

 * ZenLib to v0.4.29 r444

 * VirtualDub to v1.10.4-test11

 * Armenian, Basque, Czech, French, German, Greek, Japanese, Polish, Romanian, Simplified and Traditional Chinese, Slovak, Turkish and Ukrainian translations

* Fixed:

 * D3DFullscreen fixes:

   * fixed strange focus behavior when always on top is enabled

   * fixed VMR9 D3DFS minimizing when losing focus

   * fixed thumb mouse buttons not working when D3DFS has focus

 * Various fixes for better playlist support

 * Fixed creation date in file properties always being shown as "Not known"

 * Ticket :trac:`#2109`/:trac:`#2975`, Fix the handling of aspect ratio changes when using EVR-CP or Sync Renderer with DXVA decoding

 * Ticket :trac:`#2189`/:trac:`#3300`, Fix graph objects not being properly released when opening another file while Properties or Options window is visible

 * Ticket :trac:`#3304`, Fix remembering file position when double-clicking on a playlist item. If a position was previously saved, it will be restored unless the file is already playing

 * Ticket :trac:`#3425`, Audio Switcher: Fix a crash with audio resampling and channel remapping enabled

 * Ticket :trac:`#3440`, Disable the "Explore to" feature when the file isn't local in the Properties dialog and the playlist context menu

 * Ticket :trac:`#3455`, Hide MediaInfo tab when no information is available

 * Ticket :trac:`#3456`, Don't show the progress in the taskbar when no duration is available

 * Ticket :trac:`#3478`, The "File" menu was slow to open when a drive was unavailable


All changelogs
--------------

.. csv-table::
    :header: "Link", "Description"
    :widths: 20, 80

    "`Complete changelog <https://trac.mpc-hc.org/wiki/Changelog>`_", "Complete changelog for each and every stable build."
    "`Git log <https://github.com/mpc-hc/mpc-hc/commits/master/>`_", "Absolutely unmodified logs on every commit that got committed into the master branch."
