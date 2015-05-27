---
layout: default
title: An external filter just crashed
permalink: /external-filter-crash.php
slug: external-filter-crash
sitemap: false
---

# An external filter just crashed

It seems that MPC-HC crashed because of an external filter
{% raw %}<?php
if (!empty($_GET['filter'])) {
  echo ' named "**'.htmlspecialchars($_GET['filter']).'**"';
}
?>{% endraw %}.

Since the problem occurred outside of MPC-HC, there is nothing we can do.
However here are some possible solutions:
* Enable the internal filters from the *Internal filters* page of the *Options* dialog.
* Check if a newer version of the filter has been released in case the issue has been fixed.
* Report the problem to the editor of the filter so that they can fix it.
* Uninstall this filter or at least block it in MPC-HC by using the *External filters* page
  of the *Options* dialog.

If you need more assistance, you can open a ticket on our <a href="https://trac.mpc-hc.org/">bug tracker</a>.
Please include the following crash id: *{% raw %}<?php
if (isset($_GET['dumpID']) && is_numeric($_GET['filter'])) {
  echo $_GET['dumpID']);
}
?>{% endraw %}* in the description of your ticket.
