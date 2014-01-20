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

## 1.7.1 - 17 November 2013

* New:
  * Ticket {% trac 2655 %}, Internal filters: Support WMV/ASF/DVR-MS splitting
  * Ticket {% trac 3548 %}, Add British English translation
  * Ticket {% trac 3590 %}, Internal filters: Support for HEVC and VP9
  * Ticket {% trac 3605 %}, Support playlists using UTF8 encoding without BOM
  * Ticket {% trac 3643 %}, Add Slovenian translation
* Changed:
  * Ticket {% trac 3569 %}/{% trac 3679 %}/{% trac 3680 %}, Disable internal WMV/ASF/DVR-MS splitting and WMV decoding by default since Microsoft filters are generally more stable
* Updated:
  * LAV Filters to 0.59.1.26:
      * Ticket {% trac 3576 %}, LAV Video: Support H264 Annex B format in MP4 files
      * Ticket {% trac 3601 %}, LAV Video: Fix a crash with DXVA on AMD cards when stopping playback
      * Ticket {% trac 3676 %}, LAV Audio: Fix a crash when using old versions of the ArcSoft DTS Decoder to handle DTS decoding internally
      * Ticket {% trac 3688 %}, LAV Audio: Fix a freeze when changing the bitstreaming settings when paused
  * VirtualDub to v1.10.4
  * Unrar to v5.0.0.12
  * Little CMS to v2.6b (git 69ecafd)
  * French, German, Polish, Portuguese (Brazil) and Simplified Chinese translations
* Fixed:
  * DVD: The chapter marks could be wrong for some titles
  * Ticket {% trac 1478 %}, Slightly improve the precision of the frame number in the "Go To" dialog. The frame number was sometimes off by 1. This was easily noticeable when doing frame-stepping
  * Ticket {% trac 1555 %}, Use elapsed/remaining time for the chapter change OSD depending on what is selected for the time display. Also prevent the OSD from blinking when changing the chapter
  * Ticket {% trac 3518 %}, Improve the reliability of the [DXVA] indicator in the status bar. Sometimes the indicator wasn't shown when hardware acceleration was used
  * Ticket {% trac 3523 %}/{% trac 3533 %}/{% trac 3551 %}, Improve the stability of MPC-HC on buggy systems
  * Ticket {% trac 3530 %}, Internal LAV Splitter: the advanced subtitle selection modes were ignored
  * Ticket {% trac 3564 %}, If "Keep history of recently opened file" option was enabled, MPC-HC crashed when opening very long URLs
  * Ticket {% trac 3672 %}, "Output" property page: "Shader" and "Rotation" were sometimes wrongly displayed as unavailable for "Sync renderer"
  * Ticket {% trac 3702 %}, External audio was not synced on open if restarting from the last remembered position
  * Ticket {% trac 3720 %}, DVB: Obey the Auto-zoom option when opening a channel


## All changelogs

{: .table .table-hover .table-responsive .table-striped }
| Link | Description |
|:-|:-|
| [Complete changelog](https://trac.mpc-hc.org/wiki/Changelog) | Complete changelog for each and every stable build. |
| [Git log](https://github.com/mpc-hc/mpc-hc/commits/master/) | Absolutely unmodified logs on every commit that got committed into the master branch. |
