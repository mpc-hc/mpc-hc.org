---
title: A driver just crashed
permalink: /driver-crash.php
slug: driver-crash
sitemap: false
---

# A driver just crashed

<!-- htmlmin:ignore -->
{% raw %}<?php
$driver = isset($_GET['driver']) ? $_GET['driver'] : '';
$dumpID = isset($_GET['dumpID']) ? $_GET['dumpID'] : '';
?>{% endraw %}

It seems that MPC-HC crashed because of a driver{% raw %}<?php
if (!empty($driver)) {
  echo ' named <strong>' . htmlspecialchars($driver) . '</strong>.';
} else {
  echo '.';
}
?>{% endraw %}

Since the problem occurred outside of MPC-HC, there is nothing we can do.
However here are some possible solutions:

* Install (or reinstall) the latest version of the driver in case the issue has been fixed.
* Report the problem to the constructor so that they can fix their driver.

If you need more assistance, you can open a ticket on our [bug tracker](https://trac.mpc-hc.org/).
{% raw %}<?php
if (is_numeric($dumpID)) {
  echo 'Please include the following crash ID: <strong>' . $dumpID . '</strong> in the description of your ticket.';
}
?>{% endraw %}
<!-- htmlmin:ignore -->
