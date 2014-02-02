---
layout: default
title: Changelog
permalink: /changelog/
name: changelog
---

# Changelog

{: .alert .alert-success }
Note
: This changelog only applies to current stable build.
For complete logs check the [links below](#all-changelogs).

## 1.7.3 - 02 February 2014
* New:
  * New Galician and Vietnamese translations
  * Ticket {% trac 3873 %}, Display tooltip with H/W decoder name on hover over status message
* Updated:
  * Armenian, Basque, British English, Simplified Chinese, French, German, Japanese, Malay,
    Polish, Portuguese (Brazil), Romanian, Slovak, Spanish, Swedish, Turkish and Ukrainian translations
* Fixed:
  * Some subtitle entries could have been missing depending on how they overlapped in time
  * Ticket {% trac 2870 %}, Fix rare visual glitches on status bar
  * Ticket {% trac 3881 %}, DXVA status was invalid with certain decoders
  * Ticket {% trac 3981 %}, Subtitle renderer: the blur filter was sometimes wrong on some part of the subpicture
  * Ticket {% trac 3988 %}, DVD favorites: the position in the DVD was not restored. Additionally if "Remember DVD position"
    is enabled and a DVD favorite has a position, the position from the favorite will be used instead of the
    remembered position. Also fix loading of DVD favorites created with no position.
  * Ticket {% trac 3998 %}, The "Debug Shaders" dialog icon was missing when a translation was used


## 1.7.2 - 26 January 2014

* New:
  * Added support for XySubFilter, only compatible with embedded subtitles for now
  * New option to auto-hide docked panels together with toolbars
  * Support pixel shader presets (with shortcuts and command line options)
  * Show more descriptive window title in capture mode
  * Ability to add all media files in folder from playlist panel context menu
  * New Croatian and Malay translations
  * Ticket {% trac 1556 %}, Ability to move the player window by dragging the video area during DVD playback
  * Ticket {% trac 2251 %}, Show hidden main menu with Alt key
  * Ticket {% trac 3235 %}, Option to delay playback when auto-change fullscreen monitor mode feature is used
  * Ticket {% trac 3284 %}, Option to auto-hide mouse pointer in windowed mode during playback
  * Ticket {% trac 3379 %}, "Left Up" mouse keybinding now allows to move the player window by dragging the video area
  * Ticket {% trac 3614 %}, Do medium jumps when pressing mouse navigation buttons on the seekbar
* Changed:
  * Optimized subtitle renderer:
      * performance has been greatly improved both for subtitle parsing and rendering (often 5 times faster or more)
      * some subtitles which might have been missing before will now be displayed
  * The storing mechanism of pixel shaders was redesigned:
      * each pixel shader is now stored in its own file with .hlsl extension
      * shader files are reloaded automatically when MPC-HC detects changes in them
      * internal pixel shader editor was removed, you're supposed to use specialized external
        editors from now on, but can still view compilation output in "Debug Shaders" window
      * internal video renderers now always use the latest supported shader profile to compile
        pixel shaders
  * More flexible auto-hide controls in fullscreen configuration options
  * Multiple high DPI scaling interface improvements
* Updated:
  * LAV Filters to v0.60.1.5:
      * Ticket {% trac 3540 %}, LAV Splitter: The current/average bitrate is now shown in the Information panel
      * Ticket {% trac 3760 %}, LAV Video: Fix a crash when opening some DVDs on 64-bit
      * Ticket {% trac 3793 %}, LAV Video: Fix a decoding issue with some H264 files
      * Ticket {% trac 3849 %}, LAV Video: DXVA VC1/WMV3 decoding now works on Intel cards
      * Ticket {% trac 3862 %}, LAV Splitter: Fix a crash when opening MKV files with big attachments
      * Ticket {% trac 3929 %}, LAV Video: Fix a crash when trying to decode WMV-3/VC1 with the DMO decoder unavailable
  * MediaInfoLib to v0.7.67
  * ZenLib to v0.4.29 r453
  * Little CMS to v2.6b (git 579b3aa)
  * Unrar to v5.0.0.14
  * Armenian, Basque, Belarusian, British English, Catalan, Czech, Simplified and Traditional Chinese,
    Dutch, French, German, Hebrew, Hungarian, Italian, Greek, Japanese, Korean, Polish, Portuguese (Brazil),
    Romanian, Russian, Slovak, Slovenian, Spanish, Swedish, Turkish and Ukrainian translations
* Fixed:
  * Internal subtitles renderer: Vobsub/PGS/DVB subtitles are now rendered relative to the video frame
  * Warnings were not displayed in pixel shader compilation output
  * DVB: It was sometimes impossible to restart playback after it was stopped
  * Output property page: Fix VMR-9 renderless settings (some controls were disabled when they shouldn't have been)
  * Ticket {% trac 720 %}/{% trac 1807 %}/{% trac 2625 %}/{% trac 3161 %} Improve stability in analog capture mode when using EVR-CP/Sync renderer
  * Ticket {% trac 1300 %}/{% trac 2081 %}, Toolbars auto-hiding now always works properly in multi-display configurations
  * Ticket {% trac 2460 %}, Some subtitle entries were rendered twice depending on how entries overlapped. This led
    to incorrect transparency
  * Ticket {% trac 2461 %}, ASS reset style tag (`\r`) broke "Position subtitle relative to the video frame"
  * Ticket {% trac 3243 %}, Fix a crash when starting MPC-HC with the WebUI enabled and certain regional settings
  * Ticket {% trac 3479 %}, Improve the behavior of MPC-HC when some security tools prevent it
    from initializing correctly
  * Ticket {% trac 3650 %}, Improve the speed of subtitles toggling (on/off) and switching
  * Ticket {% trac 3668 %}, MPC-HC could crash when reloading subtitles
  * Ticket {% trac 3922 %}, "Play -> Subtitles" menu actions were off by one when playing a DVD
    and only external subtitles were available
  * Ticket {% trac 3963 %}, Update the chapter marks on the seekbar when the media length changes.
    The bug was most often seen for MKV with multiple editions


## All changelogs

{: .table .table-hover .table-responsive .table-striped }
| Link | Description |
|:-|:-|
| [Complete changelog](https://trac.mpc-hc.org/wiki/Changelog) | Complete changelog for each and every stable build. |
| [Git log](https://github.com/mpc-hc/mpc-hc/commits/master/) | Absolutely unmodified logs on every commit that got committed into the master branch. |
