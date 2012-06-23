import os, re
from jinja2 import Template

class Post(object):
    def __init__(self, path):
        self.__path = path
        self.__empty = True

    @property
    def title(self):
        self.__parse_data()
        return self.__title.decode('utf-8')

    @property
    def author(self):
        self.__parse_data()
        return self.__author.decode('utf-8')

    @property
    def date(self):
        return "/".join(self.__date_array())

    @property
    def url(self):
        return "/%s" % os.path.splitext(self.path_component)[0]

    @property
    def path_component(self):
        path_ary = self.__date_array()[::-1]
        path_ary.append(os.path.basename(self.__path))
        return "/".join(path_ary)

    @property
    def date_key(self):
        path_ary = self.__date_array()[::-1][:-1]
        return "/".join(path_ary)

    @property
    def abstract(self):
        self.__parse_data()
        return self.__abstract.decode('utf-8')

    @property
    def body(self):
        self.__parse_data()
        return self.__body.decode('utf-8')

    def render(self, template_name='post'):
        tmpl_file = open(os.path.join(
            os.path.dirname(os.path.realpath(__file__)),
            'templates', '%s.rst' % template_name))
        template = Template(tmpl_file.read())
        tmpl_file.close()
        return template.render(post=self).encode('utf-8')

    def render_to_base_path(self, base_path):
        output_path = os.path.join(base_path, self.path_component)
        if not os.path.exists(os.path.dirname(output_path)):
            os.makedirs(os.path.dirname(output_path))

        output = open(output_path, "w")
        output.write(self.render())
        output.close()

    def __date_array(self):
        day_p   = os.path.dirname(self.__path)
        month_p = os.path.dirname(day_p)
        year_p  = os.path.dirname(month_p)
        return [os.path.basename(x) for x in [day_p, month_p, year_p]]

    def __parse_data(self):
        if not self.__empty:
            return None
        self.__empty = False
        _in_abstract, _in_body = False, False
        _abstract_ary, _body_ary = [], []
        for line in self.__get_file_data():
            g = re.search("^\.\. title: (.*)$", line)
            if g:
                self.__title = g.group(1)
                continue

            g = re.search("^\.\. author: (.*)$", line)
            if g:
                self.__author = g.group(1)
                continue

            g = re.search("^\.\. abstract$", line)
            if g:
                _in_abstract = True
                continue

            g = re.search("^\.\. body$", line)
            if g:
                _in_abstract = False
                _in_body = True
                continue

            if _in_abstract:
                _abstract_ary.append(line)
                continue

            if _in_body:
                _body_ary.append(line)
                continue

        self.__abstract = "".join(_abstract_ary).strip()
        self.__body = "".join(_body_ary).strip()

    def __get_file_data(self):
        f = open(self.__path, "r")
        result = f.readlines()
        f.close()
        return result

