---
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
  * Ability to control playback repeat mode
  * Add a cache to avoid recompiling pixel shaders when possible
  * Add SVG support for custom toolbars
  * Add Bosnian translation
  * Option to set audio delay values for each display mode
* Changed:
  * Old DirectX 7 renderers have been removed. Settings will be updated automatically to use the corresponding VMR-9 renderers.
    If you really want to use a renderer similar to VMR-7 (windowed), use Overlay mixer or the "System Default" renderer
  * Make Video Renderer statistics scalable to window size and unify graph look for EVR Sync and other renderers
  * "Replace currently loaded subtitles" option no longer removes subtitles provided by splitter
  * Change Pan&Scan logic:
    * PnS Rotate Y- now flips horizontally
    * PnS Rotate X- now flips vertically
    * PnS Rotate Z- now rotates 90 degrees (counter-clockwise)
    * The postive rotate functions still do 1 degree rotation around their axis
  * Hide the infobar in normal view preset. This makes it equal to default view
  * Ticket {% trac 2022 %}/{% trac 4779 %}: Rewrite subtitles downloading framework
    * Support for multiple subtitle providers including the default OpenSubtitles as well as
      podnapisi, titlovi, SubDB, ysubs and Napisy24 which can be enabled in Options (Subtitles → Misc)
    * Ticket {% trac 5193 %}, Ability to upload subtitles to OpenSubtitles and SubDB
    * Ability to login into OpenSubtitles
    * Ticket {% trac 5406 %}, Ability to filter subtitle list by selected languages
    * Option to automatically search and download subtitles at the beginning of playback without user interaction
    * Prioritize subtitles for hearing impaired where indicated
  * Ticket {% trac 5472 %}, Append language code when saving the subtitles file
  * Updated Arabic, Armenian, Basque, Belarusian, Bengali, British English, Catalan, Chinese (Simplified and Traditional),
    Croatian, Czech, Danish, Dutch, Finnish, French, Galician, German, Greek, Hebrew, Hungarian, Indonesian, Italian,
    Japanese, Korean, Lithuanian, Malay, Polish, Portuguese (Brazil), Punjabi, Romanian, Russian, Serbian, Slovak,
    Slovenian, Swedish, Spanish, Tatar, Thai, Turkish, Ukrainian and Vietnamese translations
* Updated:
  * Updated Little CMS to v2.8 (1272acb)
  * Updated tinyxml2 to v4.0.1
  * Updated MediaInfoLib to v0.7.92
  * Updated ZenLib to v0.4.34
  * Updated Unrar to v5.4.5
  * Updated zlib to v1.2.11
  * Updated LAV Filters to v0.69:
    * LAV Splitter: Support HTTPS protocol
    * LAV Splitter: Switch back to an improved version of the old ASF demuxer
    * LAV Splitter: Support demuxing H264 MVC
    * Ticket {% trac 5815 %}, LAV Splitter: Improve the detection of the forced flag for some MP4 subtitle tracks
    * LAV Video Decoder: Add experimental support for VP9 DXVA2 decoding (disabled by default)
    * LAV Video Decoder: Enable hardware decoding for HEVC and 4K/UHD by default
    * LAV Video Decoder: Add a basic H264 MVC decoder based on Intel MediaSDK.
      Note that for now the Intel MediaSDK library is not distributed with MPC-HC.
      If you want to use this new decoder, you have to download the library
       * 32-bit: http://files.1f0.de/lavf/plugins/libmfxsw32-v1.7z
       * 64-bit: http://files.1f0.de/lavf/plugins/libmfxsw64-v1.7z
      and decompress it to the LAVFilters(64) folder.
    * LAV Video Decoder: Offer Weston Three Field Deinterlacing (w3fdif) as an alternative to YADIF
    * Ticket {% trac 3974 %}, LAV Video Decoder: Fix DXVA decoding of interlaced H.264 videos on some Intel GPU
    * Ticket {% trac 5666 %}, LAV Video Decoder: YADIF deinterlacing sometimes caused black screen in DVD menus
    * LAV Audio Decoder: Fix a possible crash when using bitstreaming
* Fixed:
  * Window position and/or size could be wrong when exiting fullscreen mode for the first time and
    "Launch files in fullscreen" option is enabled
  * Ticket {% trac 2202 %}, Automatically rotate MP4/MOV/FLV files when the rotation info is available
  * Ticket {% trac 5557 %}, Show the correct language name for Serbian subtitles. They used to show as Croatian
  * Ticket {% trac 5748 %}, Track selection menus did not work when using DVB capture
  * Ticket {% trac 5828 %}, Update seekbar position when generating thumbnails
  * Ticket {% trac 5829 %}, Creating thumbnails while the video was stopped left the player in an undefined state. The stopped state
    is now properly restored after creating the thumbnails


## All changelogs

<div markdown="1" class="table-responsive">

{: .table .table-hover .table-striped }
| Link | Description |
|----+----|
| [Complete changelog](https://trac.mpc-hc.org/wiki/Changelog) | Complete changelog for each and every stable build. |
| [Git log](https://github.com/mpc-hc/mpc-hc/commits/master/) | Absolutely unmodified logs on every commit that got committed into the master branch. |

</div>
