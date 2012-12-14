import glob
import os
from post import Post
from jinja2 import Template


class Webblog(object):
    def __init__(self, base_path, render_base_path):
        self.__base_path = base_path
        self.__render_base_path = render_base_path
        self.__months = ['January', 'February', 'March', 'April',
                         'May', 'June', 'July', 'August', 'September',
                         'October', 'November', 'December']

    def render_posts(self):
        for post_path in self.posts():
            post = Post(post_path)
            post.render_to_base_path(os.path.realpath(self.__render_base_path))

    def render_archive(self):
        accu = 'Archive\n=======\n\n'
        tmpl_file = open(os.path.join(
            os.path.dirname(os.path.realpath(__file__)),
            'templates', '%s.rst' % 'archive-subtitle'))
        template = Template(tmpl_file.read())
        tmpl_file.close()

        monthkey = None
        for post_path in self.posts():
            post = Post(post_path)
            if post.date_key != monthkey:
                monthkey = post.date_key
                year = monthkey.split('/')[0]
                month = self.__months[int(monthkey.split('/')[1]) - 1]
                accu += template.render(title="%s %s" % (month, year))
            accu += post.render('title-post')

        output = open(os.path.join(
            self.__render_base_path, 'archive.rst'), 'w')
        output.write(accu)
        output.close()

    def render_latest_posts(self, limit):
        accu = ''
        for post_path in self.latest_posts(limit):
            post = Post(post_path)
            accu += post.render('short-post')

        output = open(os.path.join(
            self.__render_base_path, 'latest_posts.rst'), 'w')
        output.write(accu)
        output.close()

    def posts(self):
        paths = glob.glob(os.path.join(
            os.path.realpath(self.__base_path), '*', '*', '*', '*.rst'))
        return sorted(paths, reverse=True)

    def latest_posts(self, limit):
        return self.posts()[:limit]
