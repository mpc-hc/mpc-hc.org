---
layout: default
title: Crash Reporter
permalink: /crash-reporter/
slug: crash-reporter
description: Info about our Crash Reporter dialog
---

# MPC-HC Crash Reporter

The *Crash Reporter* is a dialog box that warns you when MPC-HC closed unexpectedly.
It lets you submit extra information to help developers fix the issue.


## When MPC-HC crashes

After MPC-HC crashes, the *Crash Reporter* window will appear.

<img class="img-responsive" src="/assets/img/crash-reporter/crash_reporter.png" width="466" height="428" alt="Crash reporter dialog">

This dialog can be used to provide information that might be useful to the developers:

* **E-mail**: If you allow our developers to contact you should they need follow-up information from you about this crash, provide the e-mail address you wish to be contacted at here. You may also receive an e-mail after your crash has been processed, for example to let you know that the problem has been fixed.
* **Problem description**: Use this box to add any further information that might be useful to developers trying to find the cause of the crash. For example, it is always helpful that you explain us what you were doing exactly when the crash happened so that we can reproduce it more easily. Note that it is important that you use English or your comment might not be usable by our developers.

If you do not wish to provide extra information, you may leave any of those fields blank, but be aware that it may prevent us from fixing the issue you encountered.

After you quit this dialog, the *Crash Reporter* will try to identify the crash in case it has already been reported. If it has not, the following dialog will request your authorization before sending more information about the crash.

<img class="img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/img/crash-reporter/send_more_info.png" width="348" height="189" alt="Send more info dialog">
<noscript><img class="img-responsive" src="/assets/img/crash-reporter/send_more_info.png" width="348" height="189" alt="Send more info dialog"></noscript>

If you agree, just press **Send information** and wait while the crash report is transmitted to us. Remember that if you choose not to send us that information, it could be extremely difficult for us to get a clear view of what happened.

After the crash reporter terminates, a web page with more information about the status of the crash you just reported will be opened.

## What about privacy?

Your privacy is very important to us and we will not transmit potentially private information before you explicitly give your consent. Moreover, any information you choose to send is kept private and is only accessible to MPC-HC development team.

If you choose to send more information to our developers, a dump file will be transmitted to them. This dump file is a snapshot of MPC-HC's state when it crashed. It may contain private data handled by MPC-HC (for example: the path of the currently playing file, the name of the files in the playlist, etc.).
