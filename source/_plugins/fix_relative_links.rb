# Original source: http://www.slightlytallerthanaverageman.com/2010/02/22/jekyll-feedburner-and-global-urls/#comment-599796216

module Jekyll
  module RelativeLinkFixer

    def fix_relative_links(input)
      input.gsub(/(?<href>href=('|"))\//, '\k<href>' + @context.registers[:site].config["url"] + '/')
    end

  end
end

Liquid::Template.register_filter(Jekyll::RelativeLinkFixer)
