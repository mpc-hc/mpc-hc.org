---
author: XhmikosR
layout: news
title: Binaries are signed
---

Thanks to **[Certum](http://www.certum.eu/certum/cert,eindex_en.xml)** binaries will be digitally signed!

Starting from nightly build 1.6.6.6735 (fceef5c) the binaries are digitally
signed. You can easily verify that the file you downloaded hasn't been modified
in any way, by verifying its signature. The stable version 1.6.5 isn't signed
since I got the certificate at a later time. So for stable builds, version
1.6.6 will be the first one signed.

After downloading the files, right-click on the installer or the exe/dll files
after you extract the archive and choose *"Properties"* from the explorer's
context menu. In the properties dialog, go to the *"Signatures"* tab and verify
that the file is signed by <!--googleoff: all-->*"Fotis Zafiropoulos"*<!--googleon: all-->
and that the signature is valid. If you don't see the *"Signatures"* tab,
then the file isn't compiled by us since it's not signed, and thus you downloaded
a custom build or a potential *scam* file.

<div class="row gallery">
    <div class="col-xs-12 col-sm-4 text-center">
        <a class="thumbnail" href="/assets/img/news/properties-signature.png" title="Windows Explorer Properties Signature tab">
            <img class="defer" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/img/news/properties-signature-thumb.png" width="300" height="241" alt="Windows Explorer Properties Signature tab">
            <noscript><img src="/assets/img/news/properties-signature-thumb.png" width="300" height="241" alt="Windows Explorer Properties Signature tab"></noscript>
        </a>
    </div>
</div>

Windows verifies the signature during installation, if UAC is enabled.
If the prompt dialog does not say that the signature is valid, cancel the
installation and download the file again from our [*downloads*](/downloads/).

<div class="row gallery">
    <div class="col-xs-12 col-sm-4 text-center">
        <a class="thumbnail" href="/assets/img/news/install-uac.png" title="Install UAC prompt">
            <img class="defer" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/img/news/install-uac-thumb.png" width="300" height="183" alt="Install UAC prompt">
            <noscript><img src="/assets/img/news/install-uac-thumb.png" width="300" height="183" alt="Install UAC prompt"></noscript>
        </a>
    </div>
</div>
