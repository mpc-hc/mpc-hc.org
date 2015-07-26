---
layout: default
title: Downloads
permalink: /downloads/
slug: downloads
description: Download our binaries, source code, etc.
---

<h1 id="downloads">Downloads</h1>

<div class="alert alert-info" role="alert">
    <h4><span class="fa fa-info-circle" aria-hidden="true"></span> Note</h4>
    <ul>
        <li>
            <strong>Supported Operating Systems:</strong>
            <p>Windows® XP SP3, Vista, 7, 8, 8.1 both 32-bit and 64-bit</p>
        </li>
        <li>
            <strong>System Requirements:</strong>
            <p>An SSE capable CPU</p>
        </li>
   </ul>
</div>


<p class="downloads-version">
    Currently, the latest stable build is v{{ site.version.short }} which was compiled from <a href="https://github.com/mpc-hc/mpc-hc/commit/{{ site.version.hash }}">{{ site.version.hash }}</a>.
</p>



<div class="btn-group" role="group" aria-label="Toggle Buttons">
    <button type="button" class="btn btn-default expandAll">Expand All</button>
    <button type="button" class="btn btn-default closeAll">Close All</button>
</div>


<hr>


<div class="panel panel-primary">
    <div class="panel-heading">
        <h2 class="panel-title" id="binaries">
            <a class="toggleLink" role="button" data-toggle="collapse" href="#binaries-main" aria-expanded="true" aria-controls="binaries-main">
                <span class="fa fa-desktop" aria-hidden="true"></span> Binaries
            </a>
        </h2>
    </div>

    <div id="binaries-main" class="panel-collapse collapse in" aria-labelledby="binaries">
        <div class="panel-body">

            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <div class="well well-lg">
                        <h3>For <strong>32-bit</strong> (x86) Windows</h3>
                        <div class="btn-group-vertical btn-group-lg btn-block" role="group" aria-label="32-bit Main Binaries">
                            <a class="btn btn-default" href="https://binaries.mpc-hc.org/MPC%20HomeCinema%20-%20Win32/MPC-HC_v{{ site.version.short }}_x86/MPC-HC.{{ site.version.short }}.x86.exe"><span class="fa fa-cogs fa-fw" aria-hidden="true"></span> Installer</a>
                            <a class="btn btn-default" href="https://binaries.mpc-hc.org/MPC%20HomeCinema%20-%20Win32/MPC-HC_v{{ site.version.short }}_x86/MPC-HC.{{ site.version.short }}.x86.7z"><span class="fa fa-file-archive-o fa-fw" aria-hidden="true"></span> 7z</a>
                            <a class="btn btn-default" href="https://binaries.mpc-hc.org/MPC%20HomeCinema%20-%20Win32/MPC-HC_v{{ site.version.short }}_x86/MPC-HC.{{ site.version.short }}.x86.zip"><span class="fa fa-file-archive-o fa-fw" aria-hidden="true"></span> ZIP</a>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="well well-lg">
                        <h3>For <strong>64-bit</strong> (x64) Windows</h3>
                        <div class="btn-group-vertical btn-group-lg btn-block" role="group" aria-label="64-bit Main Binaries">
                            <a class="btn btn-default" href="https://binaries.mpc-hc.org/MPC%20HomeCinema%20-%20x64/MPC-HC_v{{ site.version.short }}_x64/MPC-HC.{{ site.version.short }}.x64.exe"><span class="fa fa-cogs fa-fw" aria-hidden="true"></span> Installer</a>
                            <a class="btn btn-default" href="https://binaries.mpc-hc.org/MPC%20HomeCinema%20-%20x64/MPC-HC_v{{ site.version.short }}_x64/MPC-HC.{{ site.version.short }}.x64.7z"><span class="fa fa-file-archive-o fa-fw" aria-hidden="true"></span> 7z</a>
                            <a class="btn btn-default" href="https://binaries.mpc-hc.org/MPC%20HomeCinema%20-%20x64/MPC-HC_v{{ site.version.short }}_x64/MPC-HC.{{ site.version.short }}.x64.zip"><span class="fa fa-file-archive-o fa-fw" aria-hidden="true"></span> ZIP</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>


<hr>


<div class="panel panel-default">
    <div class="panel-heading">
        <h2 class="panel-title" id="standalone-filters">
            <a class="collapsed toggleLink" role="button" data-toggle="collapse" href="#standalone-filters-main" aria-expanded="false" aria-controls="standalone-filters-main">
              Standalone Filters
            </a>
        </h2>
    </div>

    <div id="standalone-filters-main" class="panel-collapse collapse" aria-labelledby="standalone-filters">
        <div class="panel-body">

            <div class="row">
                <div class="col-xs-12">
                    <p>Standalone version of the DirectShow filters used inside of MPC-HC. For use in other DirectShow software.</p>

                    <p><strong>Note, that LAV Filters aren't included in standalone filters.</strong></p>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="well well-lg">
                        <h3>For <strong>32-bit</strong> (x86) Windows</h3>
                        <div class="btn-group-vertical btn-group-lg btn-block" role="group" aria-label="32-bit Filters">
                            <a class="btn btn-default" href="https://binaries.mpc-hc.org/Standalone%20Filters%20-%20Win32/Filters_v{{ site.version.short }}_x86/MPC-HC_standalone_filters.{{ site.version.short }}.x86.7z"><span class="fa fa-file-archive-o fa-fw" aria-hidden="true"></span> 7z</a>
                            <a class="btn btn-default" href="https://binaries.mpc-hc.org/Standalone%20Filters%20-%20Win32/Filters_v{{ site.version.short }}_x86/MPC-HC_standalone_filters.{{ site.version.short }}.x86.zip"><span class="fa fa-file-archive-o fa-fw" aria-hidden="true"></span> ZIP</a>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="well well-lg">
                        <h3>For <strong>64-bit</strong> (x64) Windows</h3>
                        <div class="btn-group-vertical btn-group-lg btn-block" role="group" aria-label="64-bit Filters">
                            <a class="btn btn-default" href="https://binaries.mpc-hc.org/Standalone%20Filters%20-%20x64/Filters_v{{ site.version.short }}_x64/MPC-HC_standalone_filters.{{ site.version.short }}.x64.7z"><span class="fa fa-file-archive-o fa-fw" aria-hidden="true"></span> 7z</a>
                            <a class="btn btn-default" href="https://binaries.mpc-hc.org/Standalone%20Filters%20-%20x64/Filters_v{{ site.version.short }}_x64/MPC-HC_standalone_filters.{{ site.version.short }}.x64.zip"><span class="fa fa-file-archive-o fa-fw" aria-hidden="true"></span> ZIP</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>


<hr>


<div class="panel panel-primary">
    <div class="panel-heading">
        <h2 class="panel-title" id="source-code">
            <span class="fa fa-code" aria-hidden="true"></span> Source code
        </h2>
    </div>

    <div class="panel-body">

        <div class="row">
            <div class="col-xs-12 col-sm-6">
              <span class="fa fa-github" aria-hidden="true"></span> GitHub repository:
            </div>
            <div class="col-xs-12 col-sm-6">
              <a href="https://github.com/mpc-hc/mpc-hc">https://github.com/mpc-hc/mpc-hc</a>
            </div>
        </div>

    </div>

</div>


<hr>


<div class="panel panel-default">
    <div class="panel-heading">
        <h2 class="panel-title" id="pdb-files">
            <a class="collapsed toggleLink" role="button" data-toggle="collapse" href="#pdb-files-main" aria-expanded="false" aria-controls="pdb-files-main">
            PDB Files
            </a>
        </h2>
    </div>

    <div id="pdb-files-main" class="panel-collapse collapse" aria-labelledby="pdb-files">
        <div class="panel-body">

            <div class="row">
                <div class="col-xs-12">
                    <p>Program Database files, which contain the debug symbols, needed to debug the builds</p>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="well well-lg">
                        <h3>For <strong>32-bit</strong> (x86) Windows</h3>
                        <div class="btn-group-vertical btn-group-lg btn-block" role="group" aria-label="32-bit PDB">
                            <a class="btn btn-default" href="https://binaries.mpc-hc.org/MPC%20HomeCinema%20-%20Win32/MPC-HC_v{{ site.version.short }}_x86/MPC-HC.{{ site.version.short }}.x86.pdb.7z"><span class="fa fa-cloud-download"></span> MPC-HC</a>
                            <a class="btn btn-default" href="https://binaries.mpc-hc.org/Standalone%20Filters%20-%20x64/Filters_v{{ site.version.short }}_x64/MPC-HC_standalone_filters.{{ site.version.short }}.x86.pdb.7z"><span class="fa fa-cloud-download"></span> Standalone filters</a>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="well well-lg">
                        <h3>For <strong>64-bit</strong> (x64) Windows</h3>
                        <div class="btn-group-vertical btn-group-lg btn-block" role="group" aria-label="64-bit PDB">
                            <a class="btn btn-default" href="https://binaries.mpc-hc.org/MPC%20HomeCinema%20-%20x64/MPC-HC_v{{ site.version.short }}_x64/MPC-HC.{{ site.version.short }}.x64.pdb.7z"><span class="fa fa-cloud-download"></span> MPC-HC</a>
                            <a class="btn btn-default" href="https://binaries.mpc-hc.org/Standalone%20Filters%20-%20x64/Filters_v{{ site.version.short }}_x64/MPC-HC_standalone_filters.{{ site.version.short }}.x64.pdb.7z"><span class="fa fa-cloud-download"></span> Standalone filters</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>

<hr>


<h2 id="previous-releases">Previous releases</h2>

<p>You can find an archive of our releases in <a href="https://stable.mpc-hc.org/">https://stable.mpc-hc.org/</a>.</p>

<hr>


<h2 id="nightly-builds">Nightly builds</h2>

<div class="panel panel-danger">
    <div class="panel-heading">
        <h4 class="panel-title"><span class="fa fa-exclamation-circle" aria-hidden="true"></span> Warning</h4>
    </div>
    <div class="panel-body">
        <p>Nightly builds are considered as unstable builds. They may contain untested extra functionality.
        <strong>Use at your own risk</strong>.</p>

        <p>
            <a href="https://nightly.mpc-hc.org/" class="btn btn-danger btn-lg">
                <span class="fa fa-download" aria-hidden="true"></span> Get nightly builds
            </a>
        </p>

    </div>
</div>
