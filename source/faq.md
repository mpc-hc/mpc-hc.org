---
layout: default
title: FAQ
permalink: /faq/
slug: faq
useFancybox: true
---

{::comment}
This is an abbreviation definition
{:/comment}

*[EVR CP]: Enhanced Video Renderer (custom presenter)

# FAQ
{:.no_toc}

<div class="alert alert-info" role="alert">
    <h4><span class="fa fa-info-circle" aria-hidden="true"></span> Note</h4>
    <p>
        <a href="https://github.com/mpc-hc/mpc-hc.org" class="alert-link">Help us add more information to this page</a>.
   </p>
</div>

---

### Contents
{:.no_toc}

* Comment to trigger ToC generation
{:toc}

---

### What are the requirements for MPC-HC?

In order to run MPC-HC you must have an SSE capable CPU. MPC-HC will work on
Windows<sup>&reg;</sup> XP Service Pack 3, Vista, 7, 8 and 8.1, both 32-bit (x86) and 64-bit (x64).

### How can I check the validity of the binaries?

See the relevant [news post](/2013/02/25/binaries-are-signed/).

### MPC-HC just crashed, what can I do?

See our [Crash Reporter](/crash-reporter/) page for more information.

### My picture is up-side down, how do I fix it?

Try updating your video card drivers.

### How can I rotate a video?

Make sure you are using a renderer that supports rotation, like EVR CP or Sync Renderer;
you should see a green tick for the selected renderer in **Options &rarr; Output**.

<div class="row">
    <div class="col-xs-12 col-sm-4 text-center">
        <a class="thumbnail fancybox-thumb" href="/assets/img/faq/options-output.png" title="Options &rarr; Output tab">
            <img src="/assets/img/faq/options-output-thumb.png" alt="Options &rarr; Output tab" width="300" height="227">
        </a>
    </div>
</div>

Then, use <kbd>Alt+1</kbd> to rotate left, <kbd>Alt+3</kbd> to rotate right, <kbd>5</kbd> to reset.
Note, that the numbers correspond to the **numpad** ones.

### Why is there suddenly a different seekbar in fullscreen?

You have accidentally enabled D3D Fullscreen, go to **Options &rarr; Output**
and disable the D3D Fullscreen checkbox.

### Why am I seeing tearing in the video?

The video display is experiencing a synchronisation issue, try enabling V-Sync by pressing <kbd>V</kbd>.
If you have more than one monitor connected make sure you extend the screen instead of duplicating it.

### Why am I seeing strange glitches in the video?

Hardware acceleration is most likely not working correctly.
Try going to **Options &rarr; Internal Filters**, right-click the list on the right
and click "Disable DXVA filters" and then reload the video (<kbd>Ctrl+E</kbd> or manually).
If this does not solve your issue, and your video plays correctly in other
video players then please make a bug report.

### Will MPC-HC support Windows RT or Metro?

Supporting these new platforms require many changes and this is simply
not possible for us in the near future, with the current manpower.
