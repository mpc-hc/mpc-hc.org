# Original source: http://www.slightlytallerthanaverageman.com/2010/02/22/jekyll-feedburner-and-global-urls/#comment-599796216

module Jekyll
  module FixRSS

    def fix_rss(input)
      input.gsub(/(?<href>href=('|"))\//, '\k<href>' + @context.registers[:site].config["url"] + '/')
           .gsub(/(?<src>src=('|"))\//, '\k<src>' + @context.registers[:site].config["url"] + '/')
    end

  end
end

Liquid::Template.register_filter(Jekyll::FixRSS)
