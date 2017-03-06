---
title: About
permalink: /about/
slug: about
description: About MPC-HC / Contributors / 3rd-party Libraries used
---

# About MPC-HC

Media Player Classic - Home Cinema is an extremely light-weight media player for Windows.

* It is written in C++.
* Supports GPU assisted decoding.
* Translated in [42 languages](https://www.transifex.com/mpc-hc/mpc-hc/).


## MPC-HC Team

<div class="alert alert-warning" role="alert">
    <h4><span class="fa fa-exclamation-circle" aria-hidden="true"></span> Warning</h4>
    <p>
        Please, do not contact team members directly for support,
        use the <a href="https://trac.mpc-hc.org/wiki/How_to_Report_Issues" class="alert-link">bug tracker</a> instead.
   </p>
</div>


<hr/>

<div class="panel panel-success">
    <div class="panel-heading">
        <h2 class="panel-title" id="active">
            <a class="toggleLink" role="button" data-toggle="collapse" href="#active-people-main" aria-expanded="true" aria-controls="active-people-main">
                <span class="fa fa-users" aria-hidden="true"></span> Active People
            </a>
        </h2>
    </div>

    <div id="active-people-main" class="panel-collapse collapse in" aria-labelledby="active">
        <div class="panel-body">

            <div class="row">
                <div class="col-md-12">

                    <div class="list-group mpc-team">
                      {% for member in site.data.team.active %}
                        {% assign user = member.user %}
                        <div class="list-group-item">
                            <div class="row">
                                <div class="col-md-4 team-member">
                                    <a href="https://github.com/{{ user }}">
                                        {% avatar user=user size=32 %}
                                        <strong>{{ member.name }}</strong> <small>@{{ user }}</small>
                                    </a>
                                </div>

                                <div class="col-md-4 team-member-role">
                                    <span>{{ member.role }}</span>
                                </div>

                                <div class="col-md-4 github-btn">
                                    <iframe src="https://ghbtns.com/github-btn.html?user={{ user }}&amp;type=follow" title="Follow {{ user }} on GitHub"></iframe>
                                </div>
                            </div>  <!-- .row -->
                        </div>  <!-- .list-group-item -->
                      {% endfor %}
                    </div>  <!-- .list-group -->

                </div>  <!-- .col-md-12 -->
            </div>  <!-- .row -->

        </div>  <!-- .panel-body -->
    </div>  <!-- .panel-collapse -->
</div>



<div class="panel panel-default">
    <div class="panel-heading">
        <h2 class="panel-title" id="inactive">
            <a class="collapsed toggleLink" role="button" data-toggle="collapse" href="#inactive-people-main" aria-expanded="false" aria-controls="inactive-people-main">
                <span class="fa fa-user-times" aria-hidden="true"></span> Inactive People
            </a>
        </h2>
    </div>

    <div id="inactive-people-main" class="panel-collapse collapse" aria-labelledby="inactive">
        <div class="panel-body">

            <div class="row">
                <div class="col-md-12">

                    <div class="list-group mpc-team">
                      {% for member in site.data.team.inactive %}
                        {% assign user = member.user %}
                        <div class="list-group-item">
                            <div class="row">
                                <div class="col-md-4 team-member">
                                    {% if user %}
                                    <a class="team-member" href="https://github.com/{{ user }}">
                                        {% avatar user=user size=32 %}
                                        <strong>{{ member.name }}</strong> <small>@{{ user }}</small>
                                    </a>
                                    {% else %}
                                        <strong>{{ member.name }}</strong>
                                    {% endif %}
                                </div>
                                <div class="col-md-4 team-member-role">
                                    <span>{{ member.role }}</span>
                                </div>
                                <div class="col-md-4 team-member-email">
                                    <a href="mailto:{{ member.email | encode_email }}">{{ member.email }}</a>
                                </div>
                            </div>  <!-- .row -->
                        </div>  <!-- .list-group-item -->
                      {% endfor %}
                    </div>  <!-- .list-group -->

                </div>  <!-- .col-md-12 -->
            </div>  <!-- .row -->

        </div>  <!-- .panel-body -->
    </div>  <!-- .panel-collapse -->
</div>

<hr />

### Translators

Translations are now handled using [Transifex](https://www.transifex.com), a web-based translation platform.
An up-to-date list of translators involved for each language can be found on <https://www.transifex.com/mpc-hc/mpc-hc/>.


<div class="panel panel-default">
    <div class="panel-heading">
        <h2 class="panel-title" id="translators-pre-transifex-era">
            <a class="collapsed toggleLink" role="button" data-toggle="collapse" href="#translators-main" aria-expanded="false" aria-controls="translators-main">
                <span class="fa fa-user-times" aria-hidden="true"></span> Translators (pre-Transifex era)
            </a>
        </h2>
    </div>

    <div id="translators-main" class="panel-collapse collapse" aria-labelledby="translators-pre-transifex-era">
        <div class="panel-body">

            <div class="row">
                <div class="col-md-12">

                    <div class="list-group mpc-team">
                      {% for member in site.data.translators %}
                        <div class="list-group-item">
                            <div class="row">
                                <div class="col-md-4 team-member">
                                    <strong>{{ member.name }}</strong>
                                </div>
                                <div class="col-md-4 team-member-lang">
                                    <span>{{ member.lang }}</span>
                                </div>
                                <div class="col-md-4 team-member-email">
                                    {% if member.email %}
                                    <a href="mailto:{{ member.email | encode_email }}">{{ member.email }}</a>
                                    {% else %}
                                    -
                                    {% endif %}
                                </div>
                            </div>  <!-- .row -->
                        </div>  <!-- .list-group-item -->
                      {% endfor %}
                    </div>  <!-- .list-group -->

                </div>  <!-- .col-md-12 -->
            </div>  <!-- .row -->

        </div>  <!-- .panel-body -->
    </div>  <!-- .panel-collapse -->
</div>


### Contributors

Alexx999, foxx1337, heksesang, judelaw, m0viefreak, madshi, mtrz, nielsm, skaarj1, VSFilterMod Team, X-Dron


### Notes

If you think you should be listed in this document and we don't do it already, please, contact us.

Many thanks to everyone who supported development without having access to the source repository.

MPC-HC is based on the original MPC version © 2002-2006 by Gabest (e-mail unknown).


## Third-party libraries

<div markdown="1" class="table-responsive">

{: .table .table-hover .table-striped }
| Project | License | Website |
|----+----|
| bs2b | MIT License | <http://bs2b.sourceforge.net> |
| CSizingControlBar | - | <http://www.datamekanix.com/sizecbar/> |
| LAV Filters | GPLv2+ | <https://github.com/Nevcairiel/LAVFilters> |
| libdivide | zlib License | <http://libdivide.com/> |
| Little CMS | MIT License | <http://www.littlecms.com/> |
| Logitech SDK | - | - |
| MediaInfoLib | Simplified BSD License | <https://mediaarea.net/MediaInfo> |
| Mhook | MIT License | <https://github.com/martona/mhook> |
| MultiMon | CPOL | <http://www.codeproject.com/KB/GDI/multimon.aspx> |
| QuickTime SDK | - | <http://developer.apple.com/quicktime/> |
| RARFileSource | GPLv2+ | <http://www.v12pwr.com/RARFileSource/> |
| RealMedia SDK | - | - |
| ResizableLib | Artistic License | <https://github.com/ppescher/resizablelib> |
| sanear | LGPLv2.1 | <https://github.com/alexmarsev/sanear> |
| Silk Icons | CC Attribution 2.5 | <http://www.famfamfam.com/lab/icons/silk/> |
| SoundTouch | LGPLv2.1 | <http://www.surina.net/soundtouch/> |
| soxr | LGPLv2.1+ | <https://sourceforge.net/projects/soxr/> |
| TreePropSheet | - | <http://www.codeproject.com/Articles/3709/> |
| UnRAR | freeware | <http://www.rarlab.com/rar_add.htm> |
| VirtualDub | GPLv2+ | <http://www.virtualdub.org/> |
| ZenLib | zlib License | <https://github.com/MediaArea/ZenLib> |
| zita-resampler | GPLv3 | <http://kokkinizita.linuxaudio.org/linuxaudio/> |
| zlib | zlib License | <http://zlib.net/> |

</div>
