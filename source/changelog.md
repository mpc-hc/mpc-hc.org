---
layout: default
title: Changelog
permalink: /changelog/
slug: changelog
description: Changelog of the latest MPC-HC stable build
---

# Changelog

<div class="alert alert-info" role="alert">
    <h4><span class="fa fa-info-circle" aria-hidden="true"></span> Note</h4>
    <p>
        This changelog only applies to the current stable build.
        For the full changelog check the <a href="#all-changelogs" class="alert-link">links below</a>.
   </p>
</div>


## {{ site.version.short }} - {{ site.version.date }}
* New:
  * Add Indonesian, Lithuanian and Punjabi translations
  * Ticket {% trac 5411 %}, Add an option to disable the preview in the web interface. This option is
    disabled by default since it must be used only on a properly secured private network
* Changed:
  * Completely new Internal Audio Renderer:
      * Uses sanear project as backend
      * Requires Windows Vista or newer
      * Outputs sound through WASAPI (shared or exclusive)
      * Employs automatic channel downmixing
      * Provides stereo crossfeed processing option (for headphones)
      * Tries to preserve signal pitch when playing at custom rate (time stretching)
      * Supports bitstreaming
      * Fixes tickets {% trac 203 %}, {% trac 1961 %}, {% trac 2731 %}, {% trac 3653 %}, {% trac 4047 %}, {% trac 5267 %}
  * Ticket {% trac 3356 %}, Initial support for per-monitor DPI scaling
  * Use internal audio decoder by default for Opus decoding
  * Ticket {% trac 5450 %}/{% trac 5479 %}, Improved crash reporting dialog for better stability and user experience
  * Ticket {% trac 5472 %}, Make it easier to input value to the "Audio time shift" field in options
  * OGM stream switching hotkeys were unified with generic ones
* Updated:
    * MediaInfoLib to v0.7.75
    * Little CMS to v2.7 (git 07da965)
    * LAV Filters to stable version 0.66.0:
        - LAV Splitter: New ASF/WMV demuxer
        - Ticket {% trac 5548 %}, LAV Splitter: Fix some rare deadlocks at startup
        - LAV Video Decoder: Allow hardware decoding of UHD video with AMD cards
    * Arabic, Armenian, Basque, Bengali, British English, Catalan, Chinese (Simplified and Traditional),
      Croatian, Czech, Danish, Dutch, French, Galician, German, Greek, Hungarian, Japanese, Korean, Malay,
      Polish, Portuguese (Brazil), Romanian, Russian, Slovenian, Slovak, Spanish, Swedish, Thai, Turkish,
      Ukrainian and Vietnamese translations
* Fixed:
  * Fix a rare crash when exiting DVB mode
  * QuickTime: Fix a crash when using system default renderer
  * Fix "snap to desktop edge" and "autofit zoom" on Windows 10
  * Fix reliability and stability of the D3D Fullscreen mode
  * Ticket {% trac 4086 %}, Logitech LCD: Correctly initialize the volume at start-up
  * Ticket {% trac 5248 %}, Adjust mouse behavior for Windows 10
  * Ticket {% trac 5454 %}, Deleting an item from the playlist sometimes did not work when shuffle mode was enabled
  * Ticket {% trac 5464 %}, If the main window was minimized while the D3D Fullscreen window was displayed on another screen,
    it was impossible to use the mouse buttons to play, pause, exit fullscreen, etc.
  * Ticket {% trac 5488 %}, Suggested filename was wrong when saving subtitles in specific cases
  * Ticket {% trac 5496 %}, Subtitle downloader dialog: the preferred languages were sometimes not displayed first
  * Ticket {% trac 5515 %}, Blu-ray (PGS) subtitles were sometimes not displayed
  * Ticket {% trac 5519 %}, SRT subtitles: Support parsing files with negative timecodes
  * Ticket {% trac 5573 %}, `/monitor` command line was ignored when remember window position was enabled
  * Ticket {% trac 5573 %}, The window could return to the wrong monitor when started fullscreen using the command line
    `/monitor N /fullscreen` if "remember window size" was enabled and "remember window position" was disabled
  * Ticket {% trac 5643 %}, Stream selection did not work when using external audio file in specific cases
  * Ticket {% trac 5647 %}, Drag&Drop was not starting playback if source folder was read only


## All changelogs

<div markdown="1" class="table-responsive">

{: .table .table-hover .table-striped }
| Link | Description |
|----+----|
| [Complete changelog](https://trac.mpc-hc.org/wiki/Changelog) | Complete changelog for each and every stable build. |
| [Git log](https://github.com/mpc-hc/mpc-hc/commits/master/) | Absolutely unmodified logs on every commit that got committed into the master branch. |

</div>
