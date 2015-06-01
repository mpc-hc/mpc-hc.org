---
layout: default
title: An external filter just crashed
permalink: /external-filter-crash.php
slug: external-filter-crash
sitemap: false
---

# An external filter just crashed

<!-- htmlmin:ignore -->
{% raw %}<?php
$filter = isset($_GET['filter']) ? $_GET['filter'] : '';
$dumpID = isset($_GET['dumpID']) ? $_GET['dumpID'] : '';
?>{% endraw %}

It seems that MPC-HC crashed because of an external filter{% raw %}<?php
if (!empty($filter)) {
  echo ' named <strong>' . htmlspecialchars($filter) . '</strong>.';
} else {
  echo '.';
}
?>{% endraw %}

Since the problem occurred outside of MPC-HC, there is nothing we can do.
However here are some possible solutions:

* Enable the internal filters from the *Internal filters* page of the *Options* dialog.
* Check if a newer version of the filter has been released in case the issue has been fixed.
* Report the problem to the developers of the filter so that they can fix it.
* Uninstall this filter or at least block it in MPC-HC by using the *External filters* page
  of the *Options* dialog.

If you need more assistance, you can open a ticket on our [bug tracker](https://trac.mpc-hc.org/).
{% raw %}<?php
if (is_numeric($dumpID)) {
  echo 'Please include the following crash ID: <strong>' . $dumpID . '</strong> in the description of your ticket.';
}
?>{% endraw %}
<!-- htmlmin:ignore -->
