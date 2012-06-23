import os, glob
from post import Post
from jinja2 import Template

class Webblog(object):
    def __init__(self, base_path, render_base_path):
        self.__base_path = base_path
        self.__render_base_path = render_base_path
        self.__months = ["January", "February", "March", "April",
                         "May", "June", "July", "August","September",
                         "October", "November", "December"]

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

        for key in self.posts_archive():
            year = key.split("/")[0]
            month = self.__months[int(key.split("/")[1])-1]
            accu += template.render(title="%s %s" % (month, year))
            for post_path in self.posts_archive()[key]:
                post = Post(post_path)
                accu += post.render("title-post")

        output = open(os.path.join(
            self.__render_base_path, "archive.rst"), "w")
        output.write(accu)
        output.close()

    def render_latest_posts(self, limit):
        accu = ''
        for post_path in self.latest_posts(limit):
            post = Post(post_path)
            accu += post.render("short-post")

        output = open(os.path.join(
            self.__render_base_path, "latest_posts.rst"), "w")
        output.write(accu)
        output.close()

    def posts(self):
        return glob.glob(os.path.join(
            os.path.realpath(self.__base_path), "*", "*", "*", "*.rst"))[::-1]

    def posts_archive(self):
        def reduce_fn(memo, n):
            key = Post(n).date_key
            if not key in memo:
                memo[key] = []
            memo[key].append(n)
            return memo

        return reduce(reduce_fn, self.posts(), {})

    def latest_posts(self, limit):
        return self.posts()[:limit]
