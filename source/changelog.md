---
layout: default
title: Changelog
permalink: /changelog/
slug: changelog
---

# Changelog

{: .alert .alert-success }
Note
: This changelog only applies to current stable build.
For complete logs check the [links below](#all-changelogs).

## 1.7.5 - 01 May 2014
* Fixed:
 * Ticket {% trac 3691 %}, PGS subtitles: Some lines stayed visible for too long when using the queue
 * Ticket {% trac 4231 %}, Don't prevent the users from using the ISR if they choose not to block VSFilter like filters
 * Ticket {% trac 4240 %}, Crashes could randomly occur when playing files with PGS subtitles (mostly when seeking quickly)
* Updated:
  * Catalan, Croatian, Dutch, German, Japanese, Slovenian, Spanish, Ukrainian and Vietnamese translations


## 1.7.4 - 16 April 2014
* New:
  * New Bengali and Tatar translations
  * Support for opening "icyx://" stream URLs
  * Ticket {% trac 2348 %}/{% trac 3583 %}, Automatically refresh the information bar and title bar so that the correct information
    is always shown for streaming (e.g. online radios)
  * Ticket {% trac 4043 %}, Statistic: Show playback rate for audio files
* Changed:
  * If MPC-HC is configured to override the splitter choice when doing the initial track selection,
    tracks selected at splitter level will be preferred in case more than one tracks match the criteria
  * The "Jump to" menu has been split in several smaller submenus displayed in the "Navigate" menu
    depending on the media currently playing
  * The internal LAV Splitter will now be used by default to demux AviSynth scripts instead of using the old VFW interface.
    Note that AviSynth is still required even if LAV Splitter is used
  * Cleaned up WebUI's Javascript code
* Updated:
  * SoundTouch to v1.8.0
  * Little CMS to v2.6 (git 40300b1)
  * Unrar to v5.1.2
  * MediaInfoLib to v0.7.68
  * ZenLib to v0.4.29 r446
  * LAV Filters to stable version 0.61.2:
      * LAV Audio: Improve error recovery on slightly corrupted audio streams
      * LAV Video: Fix a rare crash that could occur for high resolutions
      * LAV Video: Fix artifacts on some H264 streams with both software and DXVA decoding
      * LAV Splitter: Support ShoutCast metadata
      * LAV Video: Various improvements for DXVA support (native and copy-back)
      * LAV Splitter: Fix the opening of some Blu-ray discs which would take several minutes and could hang the player
      * Ticket {% trac 4035 %}, LAV Video: Some frames were dropped when playing RealVideo files
      * Ticket {% trac 4057 %}, LAV Splitter: Some WAV files were incorrectly detected as DTS
  * Armenian, Basque, British English, Catalan, Simplified and Traditional Chinese, Croatian, Czech, French,
    Galician, German, Greek, Hebrew, Hungarian, Italian, Japanese, Korean, Malay, Polish, Portuguese (Brazil), Romanian,
    Russian, Slovenian, Slovak, Spanish, Swedish, Turkish, Ukrainian and Vietnamese translations
* Fixed:
  * Properties dialog: Some tracks could have been missing from the streams list
  * Fix incorrectly displayed OSD in case the message contained the character '&'. Also make top-left and
    top-right OSD size consistent and improve the behavior when the text is too big to be displayed entirely
  * VMR-7 renderless: subtitles were not displayed except in fullscreen
  * Ensure dynamic menus dependent on the currently playing media are updated when the media changes while a menu is opened
  * DVB subtitles: Subtitles were sometimes only partially rendered with some parts disappearing immediately
  * DVB and PGS subtitles: Subtitles were sometimes one frame late. This was invisible most of the time,
    but it could produce blinking in some cases
  * ISR: Crop PGS and DVB subtitles if they don't fit into the video frame
  * ISR/VSFilter: Use correct colorimetry information for PGS and DVB subtitles
  * ISR: Subtitles could be partially rendered when using no subtitle queue
  * ISR: Text subtitles were incorrectly displayed after switching from PGS/DVB subtitles
  * PGS subtitles: Subtitles being displayed just after seeking could be wrong
  * Ticket {% trac 1814 %}, Vobsub: Support animated subtitles (with fade in/out)
  * Ticket {% trac 2588 %}, Subtitle renderer: The subtitles' shadow was not drawn when their border was very thin
  * Ticket {% trac 2773 %}, Subtitle renderer: Fix possible artifacts when using karaoke effects
  * Ticket {% trac 2994 %}, Fix toolbar separators not being properly painted
  * Ticket {% trac 3296 %}, Fix WebUI controls.html error due to unescaped file path
  * Ticket {% trac 3437 %}, Audio Switcher: Support fallback to another media type. For example, this allows audio decoders
    to fallback to normal decoding if bitstreaming isn't supported
  * Ticket {% trac 3544 %}, Prevent the low-merit fall-back on internal LAV Splitter to demux raw subtitle formats
  * Ticket {% trac 3691 %}, PGS subtitle timings were sometimes wrong (subtitles started or ended too late)
  * Ticket {% trac 3763 %}, VMR-9 renderless and EVR-CP: The displayed subtitle was not updated when seeking while playback was paused
  * Ticket {% trac 3775 %}, "Play -> Subtitles" menu could be mistakenly disabled when the internal subtitle renderer was unavailable
  * Ticket {% trac 3980 %}/{% trac 4037 %}, Exiting fullscreen sometimes produced visual artifacts
  * Ticket {% trac 3987 %}, Entering fullscreen when MPC-HC window occupied the whole monitor produced visual artifacts
  * Ticket {% trac 3999 %}, Work around a crash in the math library for x64 builds
  * Ticket {% trac 4004 %}, Fullscreen/windowed transition was not as smooth as in 1.7.1 and prior
  * Ticket {% trac 4011 %}, Fix image saving for streams with characters not supported in path names
  * Ticket {% trac 4013 %}, Subtitle renderer: Fix a crash on malformed animated transforms (`\t` tags with no parameters)
  * Ticket {% trac 4020 %}, Update dialog: Fix incorrect version info when using Belarusian, Slovenian or Russian translations
  * Ticket {% trac 4050 %}, MPC-HC could crash when loading invalid DVB channel settings
  * Ticket {% trac 4070 %}, Restore compatibility with KatMouse
  * Ticket {% trac 4079 %}, The "Save image/thumbnails" path was cut off in the status bar
  * Ticket {% trac 4082 %}, Fullscreen window was misplaced sometimes after monitor mode autochange
  * Ticket {% trac 4116 %}, "Snap to desktop edges" option wasn't working correctly
  * Ticket {% trac 4128 %}, Moving mouse over tooltips in fullscreen hid the toolbar under some circumstances
  * Ticket {% trac 4141 %}, Subtitles were incorrectly displayed in DVD and DVB mode when using the internal subtitle renderer and madVR
  * Ticket {% trac 4141 %}, DVD subtitles were always re-enabled when clicking on a menu entry related to external subtitles
  * Ticket {% trac 4163 %}, Shaders option page: the buttons' icons were missing on Windows XP
  * Ticket {% trac 4173 %}, ASS/SSA subtitles: Fix a possible infinite loop during parsing


## All changelogs

{: .table .table-hover .table-responsive .table-striped }
| Link | Description |
|:-|:-|
| [Complete changelog](https://trac.mpc-hc.org/wiki/Changelog) | Complete changelog for each and every stable build. |
| [Git log](https://github.com/mpc-hc/mpc-hc/commits/master/) | Absolutely unmodified logs on every commit that got committed into the master branch. |
