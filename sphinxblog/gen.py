#!/usr/bin/env python

from webblog import Webblog

if __name__ == '__main__':
    wb = Webblog('_posts', 'source')
    wb.render_posts()
    wb.render_latest_posts(4)
    wb.render_archive()
