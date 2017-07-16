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

* Changed:
  * Switched from mhook to MinHook since it's more actively maintained
  * Require a CPU processor with SSE2 instructions
  * Ticket {% trac 5865 %}, Add context menu option to copy subtitle URL
  * Updated translations
* Updated:
  * Updated LAV Filters to v0.70.2
  * Updated Little CMS to v2.8 (d41071e)
  * Updated MediaInfoLib to v0.7.97
  * Updated ZenLib to v0.4.35
  * Updated Unrar to v5.5.6
* Fixed:
  * Scale MediaInfo properties tab text properly on high DPI


## All changelogs

<div markdown="1" class="table-responsive">

{: .table .table-hover .table-striped }
| Link | Description |
|----+----|
| [Complete changelog](https://trac.mpc-hc.org/wiki/Changelog) | Complete changelog for each and every stable build. |
| [Git log](https://github.com/mpc-hc/mpc-hc/commits/master/) | Absolutely unmodified logs on every commit that got committed into the master branch. |

</div>
