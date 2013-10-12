# -*- coding: utf-8 -*-
"""Hooks to generate RSS feeds for pages."""

from calendar import weekday, month_abbr, day_abbr
import io
import hashlib
import os
import re
from xml.etree import ElementTree as etree


VERSION = '0.1.2.1'
# Butchered by vBm to suit mpc-hc needs :x
# If you know how to do it properly please create a pull request. Thanks.
AUTHOR = 'vBm <the.vbm@gmail.com>'
AUTHOR = 'Seth House <seth@eseth.com>'


def indent(elem, level=0):
    """Make the output XML pretty."""
    i = '\n' + level * '  '
    if len(elem):
        if not elem.text or not elem.text.strip():
            elem.text = i + '   '
        if not elem.tail or not elem.tail.strip():
            elem.tail = i
        for elem in elem:
            indent(elem, level + 1)
        if not elem.tail or not elem.tail.strip():
            elem.tail = i
    else:
        if level and (not elem.tail or not elem.tail.strip()):
            elem.tail = i


def formatpubdate(date):
    # http://effbot.org/zone/generating-rfc822-dates.htm
    # convert a yyyymmdd (UTC) string to RSS pubDate format
    year, month, day = date[:4], date[4:6], date[6:8]
    hour, minute, second = date[8:10], date[10:12], date[12:14]
    if not hour:
        hour = '22'
    if not minute:
        minute = '00'
    if not second:
        second = '00'
    wday = weekday(int(year), int(month), int(day))
    return '%s, %s %s %s %s:%s:%s GMT' % (
        day_abbr[wday], day, month_abbr[int(month)], year,
        hour, minute, second)


def create_feed(app):
    """Create initial XML object and stuff it into the Sphinx builder env."""
    feed = etree.Element('rss', {'version': '2.0'})
    channel = etree.SubElement(feed, 'channel')
    etree.SubElement(channel, 'title').text = app.config.feed_title
    etree.SubElement(channel, 'link').text = app.config.feed_link
    etree.SubElement(channel, 'description').text = app.config.feed_description
    image = etree.SubElement(channel, 'image')
    etree.SubElement(image, 'description').text = app.config.feed_description
    etree.SubElement(image, 'url').text = app.config.base_uri + \
        '/_static/img/logo-128x128.png'
    etree.SubElement(image, 'title').text = app.config.feed_title
    etree.SubElement(image, 'link').text = app.config.base_uri
    etree.SubElement(image, 'width').text = '128'
    etree.SubElement(image, 'height').text = '128'

    app.builder.env.feed = etree.tostring(feed)


def create_items(app, pagename, templatename, ctx, doctree):
    """Iterate over each document and add it to the XML object."""
    # Remove unwanted pages
    for i in app.config.feed_ignorepagenames:
        if re.search(i, pagename):
            #app.builder.warn('Not including %(pagename)s in RSS feed.' \
            #   % locals())
            return

    feed = etree.fromstring(app.builder.env.feed)
    channel = feed.find('channel')

    item = etree.SubElement(channel, 'item')
    etree.SubElement(item, 'title').text = ctx.get('title')
    m = re.findall('\d+', ctx.get('body').split('\n')[2].split(' ')[4])
    pubdateString = m[2] + m[1] + m[0]
    etree.SubElement(item, 'date').text = pubdateString
    etree.SubElement(item, 'pubDate').text = formatpubdate(pubdateString)
    postAuthor = ctx.get('body').split('\n')[2].split(' ')[2]
    etree.SubElement(item, 'author').text = postAuthor + '@mpc-hc.org (' + \
        postAuthor + ')'
    etree.SubElement(item, 'link').text = '%s/%s' % (app.config.base_uri,
                                                     app.builder.get_target_uri(pagename))
    guid = etree.SubElement(item, 'guid')
    guid.text = hashlib.sha1(ctx.get('body').encode('utf-8')).hexdigest()
    guid.set('isPermaLink', 'false')
    etree.SubElement(item, 'description').text = '\n'.join(
        ctx.get('body').split('\n')[3:-2])

    app.builder.env.feed = etree.tostring(feed)


def write_feed(app, exc):
    """Sort the items of the XML object and write it to a file."""
    feed = etree.ElementTree(etree.fromstring(app.builder.env.feed))
    indent(feed.getroot())

    # Sort the entries by date
    # http://effbot.org/zone/element-sort.htm
    # Sort list of items only in new list, then create a new list
    # with everything but the items and then merge these entries
    # with the freshly ordened items.
    container = feed.find('channel')
    items = sorted([e for e in container if e.tag == 'item'],
                   key=lambda i: i.findtext('date'), reverse=True)
    container[:] = [e for e in container if e.tag != 'item']
    container.extend(items)

    # Truncate feed by maxitems
    if app.config.feed_maxitems:
        container[:] = container[:app.config.feed_maxitems]

    with io.open(os.path.join(app.builder.outdir, 'rss.xml'), 'wb') as f:
        feed.write(f, 'utf-8')


def setup(app):
    app.add_config_value('feed_title', 'My RSS Feed', False)
    app.add_config_value('feed_link', 'http://example.com/feed/', False)
    app.add_config_value('feed_description', 'My nifty feed.', False)
    app.add_config_value('base_uri', 'http://example.com/', False)
    app.add_config_value('feed_maxitems', 0, False)
    app.add_config_value('feed_maxage', None, False)  # a timedelta object
    app.add_config_value('feed_metadate', 'pubdate', False)
    app.add_config_value('feed_ignorepagenames', ['search'], False)

    app.connect('builder-inited', create_feed)
    app.connect('html-page-context', create_items)
    app.connect('build-finished', write_feed)
