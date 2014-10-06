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


## {{ site.version.short }} - {{ site.version.date }}
* New:
  * Accept loading more than one subtitle file at a time using the "Load subtitle" dialog or drag-and-drop
  * Add advanced settings page
  * Add Arabic and Thai translations
  * Completely reworked subtitle queue:
    * The queue should be quite faster than the older one for a similar number of buffered subpictures.
      It should also work much better when the number of subpictures becomes important
    * Subtitle animation can now be disabled even when using no buffering
    * Add the ability to choose at which state (in percentage of the full animation) an animated subtitle
      will be rendered when the animation is turned off
    * Add the ability to control the rate of the animation (in percentage of the movie frame rate)
    * Add the ability to control whether the subtitle queue is allowed to drop some subpictures in case
      subtitle rendering is too slow
  * Add an option to set JPEG quality when saving images (**default** quality is **increased** from 75% to 90%)
  * Ticket {% trac 353 %}, Allow to control minimum file duration for remember position feature
  * Ticket {% trac 1287 %}, Add after playback command to turn off the monitor
  * Ticket {% trac 1407 %}/{% trac 2425 %}, Add an advanced option to control the number of recent files. Those files are shown
    in the "Recent Files" menu. It is also the files for which a position is potentially saved
  * Ticket {% trac 1531 %}, Show cover-art while playing audio files
  * Ticket {% trac 2194 %}, Show drive label when playing DVD
  * Ticket {% trac 3393 %}, Allow to disable remember position feature for audio files
  * Ticket {% trac 4345 %}, Text subtitles: Add a mode that automatically chooses the rendering target based on the
    subtitle type, ASS/SSA subtitles will be rendered on the video frame while other text subtitles will
    be rendered on the full window
  * Ticket {% trac 4690 %}, Internal filters: Support v210/v410 raw video formats
* Changed:
  * Text subtitles: Faster subtitle parsing (up to 4 times faster for ASS/SSA subtitles)
  * Text subtitles: Improved subtitle renderer for faster rendering of complex subtitle scripts (often **twice faster or more**)
  * Text subtitles: Much faster subtitle opening in the Subresync bar
  * Ticket {% trac 325 %}, Move after playback commands to options and add an option to close and restore logo
  * Ticket {% trac 1663 %}, Improved command line help dialog
  * Ticket {% trac 2834 %}, Increase limit on subtitles override placement feature
  * Ticket {% trac 4428 %}, Improve the clarity of the error message when opening a subtitle file fails
  * Ticket {% trac 4687 %}, Reworked "Formats" option page. It is now possible to clear all file associations
  * Ticket {% trac 4865 %}, Subtitles option page: Clarify the "Delay interval" setting
* Updated:
  * Updated Little CMS to v2.6 (git 9c075b3)
  * Updated Unrar to v5.1.7
  * Updated MediaInfoLib to v0.7.70
  * Updated ZenLib to v0.4.29 r481
  * Updated LAV Filters to stable version 0.63.0:
      * LAV Video: HEVC decoding is up to 100% faster
      * LAV Video: Fix potential artifacts when decoding x264 lossless streams
      * LAV Splitter: Support for playing AES encrypted HLS streams
      * LAV Splitter: Advanced Subtitle selection allows selecting subtitles by a string match on the stream title
      * Ticket {% trac 3608 %}, LAV Splitter: Fix stuttering with some (m2)ts files
      * Ticket {% trac 4322 %}, LAV Audio: Improve the estimated duration for some MP3 files
      * Ticket {% trac 4539 %}, LAV Video: Fix a crash with DVD subtitles on 64-bit builds when using software decoding
      * Ticket {% trac 4639 %}, LAV Splitter: Fix incorrect colors for VobSub tracks in MP4
      * Ticket {% trac 4783 %}, LAV Video: Experimental support for hardware (CUVID and DXVA2) assisted decoding of HEVC streams (disabled by default)
      * Ticket {% trac 4879 %}, LAV Audio and LAV Splitter: Fix TrueHD streams with a Dolby Atmos sub-stream

    The full changelog can be found at <https://raw.githubusercontent.com/Nevcairiel/LAVFilters/0.63/CHANGELOG.txt>
  * Updated Armenian, Basque, Belarusian, Bengali, British English, Catalan, Chinese (Simplified and Traditional),
    Croatian, Czech, Dutch, French, Galician, German, Greek, Hebrew, Hungarian, Italian, Japanese, Korean, Malay,
    Polish, Portuguese (Brazil), Romanian, Russian, Slovak, Slovenian, Spanish, Swedish, Tatar, Turkish, Ukrainian
    and Vietnamese translations
* Fixed:
  * Work around corrupted display with NVIDIA drivers v344.11 when using EVR, EVR-CP or Sync renderers
  * "Load subtitle" dialog: Fix the file filters on Windows Vista+
  * "Resources" tab: The resource saved wasn't always matching the selection
  * Ticket {% trac 3930 %}, Fix a possible crash with embedded subtitles when the subtitle queue is disabled
  * Ticket {% trac 4207 %}, Taskbar preview wasn't scaled correctly
  * Ticket {% trac 4504 %}, ASS/SSA subtitles: Support floating point values in drawing commands
  * Ticket {% trac 4505 %}, Embedded text subtitles: Fix a possible crash related to the Subresync bar
  * Ticket {% trac 4536 %}, ASS/SSA subtitles: Fix the parsing of `\fs` tags when the value was negative
  * Ticket {% trac 4665 %}, Ensure that the icon shown in the status bar and the property dialog
    matches the icon currently associated to the format
  * Ticket {% trac 4678 %}/{% trac 4856 %}, Use internal filters for GIF format
  * Ticket {% trac 4684 %}, Clicking on the some parts of the volume slider had no effect
  * Ticket {% trac 4707 %}, EVR-CP: Screenshots were corrupted when "Force 10-bit input" was used
  * Ticket {% trac 4730 %}, MediaInfo: Ensure the MediaInfo tab gives the same information as the official GUI
  * Ticket {% trac 4744 %}, Some subtitles could cause a crash or produce artifacts
  * Ticket {% trac 4752 %}, Monitors connected to secondary graphic card were not detected
  * Ticket {% trac 4758 %}, Adjust width of the groupbox headers to avoid empty space
  * Ticket {% trac 4778 %}, Fix optical drive detection when its letter is A or B
  * Ticket {% trac 4782 %}, Backward frame step led to jumping to the wrong position in certain situations
  * Ticket {% trac 4825 %}, Tracks matching a preferred language weren't always selected correctly
  * Ticket {% trac 4827 %}, Initial window size could be wrong for anamorphic video
  * Ticket {% trac 4831 %}, Fix a rare issue with animated subtitles starting at timecode 0
  * Ticket {% trac 4857 %}, The timings of some subtitles could be wrong when using Sync Renderer
  * Ticket {% trac 4863 %}, MPC-HC could crash when opening a file through the QuickTime engine


## All changelogs

<div markdown="1" class="table-responsive">

{: .table .table-hover .table-striped }
| Link | Description |
|:-|:-|
| [Complete changelog](https://trac.mpc-hc.org/wiki/Changelog) | Complete changelog for each and every stable build. |
| [Git log](https://github.com/mpc-hc/mpc-hc/commits/master/) | Absolutely unmodified logs on every commit that got committed into the master branch. |

</div>
