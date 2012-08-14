Changelog
=========

.. note::
	This changelog only applies to current stable build.
	For complete logs check `links below <#all-changelogs>`_.

1.6.3 - 14 August 2012
----------------------------

* New:

 * New webpage (http://mpc-hc.sourceforge.net)

 * Source code moved to GitHub (https://github.com/mpc-hc)

 * The DirectX runtime dlls are included in the distribution packages so it's no longer needed to install the DirectX runtime

 * MpegSplitter: support for DVD-Audio LPCM and MLP in .aob files

 * Use FFmpeg for AC3 and DTS decoding

 * If the icon library is modified in a way that can break the icons associated to the extensions handled by MPC-HC, MPC-HC will automatically try to fix the registry so that each extension is associated to the correct icon

* Changed:

 * Unrar is statically linked and so MPC-HC and VSFilter no longer need the unrar dll

 * The Icon Library was rewritten leading to smaller size

 * The Output Options page was redesigned for better usability

 * Ticket #625, The translation dll's size was decreased by 2/3 (uncompressed)

 * Ticket #2227, Hide the seek bar in capture mode

 * Ticket #2276, Use the new user interface on Vista and later for the Save dialogs

 * Ticket #2342, MPC-HC will now use the Windows theme font for the Statusbar, OSD messages and a few other places on Windows Vista and newer

 * Ticket #2378, Move the "Remember last playlist" option into the Options dialog

* Updated:

 * Unrar to v4.20

 * MediaInfoLib to v0.7.59

 * ZenLib to v0.4.28

 * FFmpeg (git 603221e)

 * Little CMS to v2.4 (git eb67549)

 * SoundTouch to v1.7.0pre r143

 * Armenian, Basque, Belarusian, Catalan, Chinese Simplified and Traditional, Czech, French, German, Japanese, Polish, Russian, Slovak and Ukrainian translations

* Fixed:

 * The hand cursor wasn't shown in the web links in Keys and WebServer options page

 * Toolbar code cleanup and background fix for Windows XP

 * The last textbox used in the Goto dialog was not remembered since r3964 and r3965

 * Always show an error message instead of crashing when the argument of a command line switch is missing

 * OggSplitter: Fix crash with some files

 * Logitech Keyboard support updated and made optional (Options -> Tweaks)

 * WebServer: various bugfixes and improvements

 * Ticket #504, Fixed rounding errors that prevented a properly centered image and caused unneeded resizing because the video size was off by one

 * Ticket #2330, Fix the radio buttons in the Logo options page

 * Ticket #2349, Recent Files: "Clear List" did not remove all files from the list

 * Ticket #2356, The "With icons" and "File(s)" options in the Formats options page were not applied if no association was previously modified

 * Ticket #2362, [DVB] Fix the Electronic Program Guide (EPG):

  * Fix the parsing of the event's information

  * Fix the parsing of the characters' encoding

  * Fix the display of the start and end time when DST is observed

 * Ticket #2365, The volume slider wasn't properly redrawn in some cases

 * Ticket #2427, The command line was not parsed when using slave mode

 * Ticket #2470, API: Ensure that a 32-bit application can control MPC-HC 64-bit

 * Ticket #2493, Fix a crash when saving subtitles using the sub format

 * Numerous other bugfixes and improvements

All changelogs
--------------

.. csv-table::
	:header: "Link", "Description"
	:widths: 20, 80

	"`Complete changelog <http://sourceforge.net/apps/trac/mpc-hc/wiki/Changelog>`_", "Complete changelog for each and every stable build."
	"`Git log <https://github.com/mpc-hc/mpc-hc/commits/master/>`_", "Absolutely unmodified logs on every commit that got committed into the master branch."
