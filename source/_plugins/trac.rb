class Trac < Liquid::Tag
  Syntax = /^\s*([^\s]+)?/

  def initialize(tagName, markup, tokens)
    super

    if markup =~ Syntax then
      @ticket = $1
    else
      raise "No Trac ticket number provided in the \"trac\" tag"
    end
  end

  def render(context)
    "<a href=\"https://trac.mpc-hc.org/intertrac/%23#{@ticket}\">##{@ticket}</a>"
  end

  Liquid::Template.register_tag "trac", self
end
