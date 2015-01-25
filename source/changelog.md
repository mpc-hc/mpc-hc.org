---
layout: default
title: Changelog
permalink: /changelog/
slug: changelog
---

# Changelog

<div class="alert alert-info" role="alert">
    <h4><span class="fa fa-info-circle" aria-hidden="true"></span> Note</h4>
    <p>
        This changelog only applies to current stable build.
        For complete logs check the <a href="#all-changelogs" class="alert-link">links below</a>.
   </p>
</div>


## {{ site.version.short }} - {{ site.version.date }}
* New:
  * DVB: Show current event time in the status bar
  * DVB: Add context menu to the navigation dialog
  * Add Finnish and Serbian translations
  * Ticket {% trac 907 %}, Enable "Properties" dialog for DVD and DVB playback modes
  * Ticket {% trac 1091 %}, Support MediaInfo analyse for DVD
  * Ticket {% trac 1494 %}, Add tooltip in the "Organize Favorites" dialog with path of the item
  * Ticket {% trac 2438 %}, Keep history of recently opened DVD directories
  * Ticket {% trac 3647 %}, Internal LAV Video Decoder: Support Cinepack and QPEG in low-merit mode
  * Ticket {% trac 4941 %}, Support embedded cover-art
* Changed:
  * DVB: Improve channel switching speed
  * The "Properties" dialog should open faster being that the MediaInfo analysis is now done asynchronously
  * Make double-click tolerance consistent with system settings
  * Ticket {% trac 4978 %}, Execute "once" after playback event when playlist ends, regardless of the loop count
  * Ticket {% trac 4991 %}, Text subtitles: "opaque box" outlines will now always be drawn even if the border width is set to 0.
    The size of the text is independent of the border width so there is no reason not to draw that part
  * Ticket {% trac 5056 %}, Position the text subtitles relative to the video frame by default
* Updated:
  * MediaInfoLib to v0.7.71
  * ZenLib to v0.4.29 r498
  * SoundTouch to v1.8.0 r201
  * Little CMS to v2.7 (git 8174681)
  * Unrar to v5.2.3
  * LAV Filters to v0.63.0.52:
      * LAV Video Decoder: Fix a crash when the video height is not a multiple of 2
      * Ticket {% trac 3144 %}, LAV Splitter: Support librtmp parameters for RTMP streams
      * Ticket {% trac 4407 %}, LAV Video Decoder: Fix a rare crash when checking the compatibility with hardware decoding
      * Ticket {% trac 5030 %}, LAV Video Decoder: The video timestamps could be wrong in some cases when using H264 DXVA decoding.
        This could lead to synchronization issue with the audio
      * Ticket {% trac 5047 %}, LAV Splitter: Fix missing tracks in (m2)ts files
      * Ticket {% trac 5116 %}, LAV Video Decoder: Fix aspect ratio for some MPEG2 streams
  * Arabic, Armenian, Basque, Belarusian, Bengali, British English, Catalan, Chinese (Simplified and Traditional),
    Croatian, Czech, Dutch, French, Galician, German, Greek, Hebrew, Hungarian, Italian, Japanese, Korean, Malay,
    Polish, Portuguese (Brazil), Romanian, Russian, Slovak, Slovenian, Spanish, Swedish, Tatar, Thai, Turkish,
    Ukrainian and Vietnamese translations
* Fixed:
  * XySubFilter: Always preserve subtitle frame aspect ratio
  * Properties dialog: The creation time did not account for the local timezone
  * Properties dialog: More consistent UI for the "Resources" tab
  * PGSSub: Subtitles could have opaque background instead of transparent one
  * Audio CDROMs with extra content could not be played
  * Ticket {% trac 2420 %}, Improve the reliability of the DirectShow hooks
  * Ticket {% trac 2626 %}, Fix some rare crashes when another application prevents MPC-HC from rendering the video
  * Ticket {% trac 2953 %}, DVB: Fix crash when closing window right after switching channel
  * Ticket {% trac 3324 %}, Some applications could interfere with Skype API and prevent MPC-HC from running
    when "Display "Now Playing" information in Skype's mood message" was enabled
  * Ticket {% trac 3666 %}, DVB: Don't clear the channel list on saving new scan result
  * Ticket {% trac 3742 %}, Sync Renderer: Fix rare crashes when using Sync Renderer with "synchronize video to display" option enabled
  * Ticket {% trac 3864 %}, Video renderers: Fix a possible crash caused by a race condition
  * Ticket {% trac 3991 %}, Video renderers: Fix a possible crash when the D3D device cannot be created
  * Ticket {% trac 4029 %}, Fix a rare crash when right-clicking on the playlist panel
  * Ticket {% trac 4436 %}, DVB: Improve compatibility with certain tuners
  * Ticket {% trac 4551 %}, Fix a possible crash when saving the current frame
  * Ticket {% trac 4721 %}, Audio CD playback could hang and stutter with some drives
  * Ticket {% trac 4933 %}, ASS/SSA subtitles: Fix a crash for elements with no horizontal border but a vertical one
  * Ticket {% trac 4937 %}, Prevent showing black bars when window size after scale exceed current work area
  * Ticket {% trac 4938 %}, Fix resetting the settings from the "Options" dialog: some settings were (randomly) not
    restored to their default value
  * Ticket {% trac 4954 %}, Open dialog: Support quoted paths
  * Ticket {% trac 4956 %}, Improve Play/Pause mouse click responsiveness
  * Ticket {% trac 4957 %}/{% trac 4982 %}, Do not adjust window width in audio mode if no cover-art/logo is loaded or its size
    is limited to zero
  * Ticket {% trac 4969 %}, DVD playback could fail with an error related to copy protection on some systems
  * Ticket {% trac 4971 %}, Bring back "Play next file in the folder" event in single time events menu
  * Ticket {% trac 4975 %}, Unrelated images could be loaded as cover-art when no author information was available
    in the audio file
  * Ticket {% trac 4991 %}, Text subtitles: "opaque box" outlines were scaled twice
  * Ticket {% trac 4992 %}, DVB: Enabling the "Information" panel using the "Info" button on the "Navigation" dialog
     would reduce the size of the main window when hiding the panel from the "View" menu
  * Ticket {% trac 4993 %}, DVB: The content of the "Information" panel was lost when changing the UI language
  * Ticket {% trac 4994 %}, The "Channels" sub-menu was not translated
  * Ticket {% trac 4995 %}, Some context menus weren't properly positioned when opened by App key
  * Ticket {% trac 5010 %}, Text subtitles: Fix a crash in case of memory allocation failure
  * Ticket {% trac 5055 %}, True/False strings were not translated in value column on advanced page
  * Ticket {% trac 5067 %}/{% trac 5203 %}, Fix RealText subtitle parsing: the parser did not work at all and could even crash
  * Ticket {% trac 5127 %}, Improve the behavior of MPC-HC when doing the MediaInfo analysis when playing from
    an optical drive. Playback will now be paused during the analysis to avoid concurrent accesses to
    the disk that might hang playback
  * Ticket {% trac 5130 %}, Lock the player when the scan dialog is opened. Double-clicking on a media file will
    always open a new instance of MPC-HC in this case. This avoids interrupting the scan accidentally
    and fixes the issues which used to arise when doing that
  * Ticket {% trac 5130 %}, Remove the information corresponding to the previously playing channel during the DVB scan
  * Ticket {% trac 5131 %}, DVD playback could stutter on some systems


## All changelogs

<div markdown="1" class="table-responsive">

{: .table .table-hover .table-striped }
| Link | Description |
|:-|:-|
| [Complete changelog](https://trac.mpc-hc.org/wiki/Changelog) | Complete changelog for each and every stable build. |
| [Git log](https://github.com/mpc-hc/mpc-hc/commits/master/) | Absolutely unmodified logs on every commit that got committed into the master branch. |

</div>
