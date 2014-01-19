---
layout: default
title: Home
permalink: /
name: home
---

<p class="lead">
    <abbr title="Media Player Classic - Home Cinema">MPC-HC</abbr> is an extremely
    light-weight, open source media player for Windows<sup>&reg;</sup>. It supports
    all common video and audio file formats available for playback.
    We are 100% <em>spyware free, there are no advertisements or toolbars</em>.
</p>

<div class="text-center">
    <a href="http://sourceforge.net/projects/mpc-hc/files/MPC%20HomeCinema%20-%20Win32/MPC-HC_v{{ site.version.short }}_x86/MPC-HC.{{ site.version.short }}.x86.exe/download"
        class="btn btn-default btn-lg sourceforge_accelerator_link">
        <i class="fa fa-download pull-left"></i>MPC-HC - Download now!
    </a>
    <p>{{ site.version.short }} 32-bit - <a href="/downloads/">Other systems &amp; versions</a></p>
</div>

<hr class="hidden-xs">

<div class="row hidden-xs">
    <div class="col-sm-4 col-md-4">
        <a class="fancybox-thumb" data-fancybox-group="gallery" href="/assets/img/screenshots/mpc-hc.original.jpg" title="MPC-HC's main window">
            <img class="img-responsive" src="/assets/img/screenshots/mpc-hc.original.thumb.jpg" alt="MPC-HC" width="180" height="134">
        </a>
    </div>
    <div class="col-sm-4 col-md-4">
        <a class="fancybox-thumb" data-fancybox-group="gallery" href="/assets/img/screenshots/mpc-hc.toolbar.jpg" title="MPC-HC with custom toolbar" data-title-id="title-toolbar">
            <img class="img-responsive" src="/assets/img/screenshots/mpc-hc.toolbar.thumb.jpg" alt="MPC-HC with custom toolbar" width="180" height="134">
        </a>
        <div id="title-toolbar" class="hidden">
            MPC-HC with <a href="https://trac.mpc-hc.org/wiki/Toolbar_images" target="_blank">custom toolbar</a>.
        </div>
    </div>
    <div class="col-sm-4 col-md-4">
        <a class="fancybox-thumb" data-fancybox-group="gallery" href="/assets/img/screenshots/mpc-hc.dvb.jpg" title="MPC-HC as DVB Player">
            <img class="img-responsive" src="/assets/img/screenshots/mpc-hc.dvb.thumb.jpg" alt="MPC-HC as DVB Player" width="182" height="137">
        </a>
    </div>
</div>

<hr>

<div class="row">
    <div class="marketing">
        <div class="col-xs-12 col-sm-4 col-md-4">
            <h2>Lightweight</h2>
            <p>Watch movies on any SSE CPU, even on your old computer back from '99</p>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
            <h2>Customizable</h2>
            <p>With its wide array of options, MPC-HC can be customized to fit
            almost any needs. Among other things we added custom toolbars.</p>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
            <h2>All around player</h2>
            <p>MPC-HC can also be used as DVB player.</p>
        </div>
    </div>
</div>

<div class="latest-news">
    <a class="rss-before" href="/rss.xml" title="RSS Feed"><i class="fa fa-rss fa-2x fa-2x"></i></a>
    <h1>Latest news</h1>

    {% for post in site.posts limit:site.news_limit %}
    <div class="new">
        <h2>
            <a href="{{ post.url }}">{{ post.title }}</a>
        </h2>

        <div class="post-meta">
            <span>
                <i class="fa fa-calendar"></i> {{ post.date | date: "%B %d, %Y" }} <i class="fa fa-user"></i> {{ post.author }}
            </span>
        </div>

        {{ post.excerpt }}
    </div>
    {% endfor %}

    <p><a href="archive/"><em>Browse the archive</em></a></p>

</div>
