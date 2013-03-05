.. title: Binaries are signed
.. author: XhmikosR

.. abstract

.. raw:: html

    <p>
    Thanks to <strong><a href="http://www.certum.eu/certum/cert,eindex_en.xml">Certum</a></strong>,
    binaries will be digitally signed!
    </p>

.. body

.. raw:: html

    <p>
    Starting from nightly build 1.6.6.6735 (fceef5c) the binaries are digitally
    signed. You can easily verify that the file you downloaded hasn't been modified
    in any way, by verifying its signature. The stable version 1.6.5 isn't signed
    since I got the certificate at a later time. So for stable builds, version
    1.6.6 will be the first one signed.
    </p>
    <p>
    After downloading the files, right-click on the installer or the exe/dll files
    after you extract the archive and choose <em>"Properties"</em> from the explorer's
    context menu. In the properties dialog, go to the <em>"Signatures"</em> tab and verify
    that the file is signed by <em>"Fotis Zafiropoulos"</em> and that the signature
    is valid. If you don't see the <em>"Signatures"</em> tab, then the file isn't
    compiled by us since it's not signed, and thus you downloaded a custom build
    or a potential <em>scam</em> file.
    </p>
    <div class="screenshot">
        <a class="fancybox-thumb" data-fancybox-group="gallery" href="/_static/img/news/properties-signature.png" title="Explorer Properties Signature tab">
            <img class="screenshot" src="/_static/img/news/properties-signature-thumb.png" alt="Properties Signature" width="300" height="241"/>
        </a>
    </div>
    <p>
    Windows verifies the signature during installation, if UAC is enabled.
    If the prompt dialog does not say that the signature is valid, cancel the
    installation and download the file again from our <a href="/downloads">downloads</a>.
    </p>
    <div class="screenshot">
        <a class="fancybox-thumb" data-fancybox-group="gallery" href="/_static/img/news/install-uac.png" title="Install UAC prompt">
            <img class="screenshot" src="/_static/img/news/install-uac-thumb.png" alt="Install UAC prompt" width="300" height="183"/>
        </a>
    </div>
