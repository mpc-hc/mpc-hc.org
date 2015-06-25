# A simple converter to change all `th` tags to `<th scope="col">`

module Jekyll

    class TableThScopeCol < Converter
        safe true
        priority :low

        def matches(ext)
            ext =~ /(^\.md|^\.html)$/i
        end

        def output_ext(ext)
            ".html"
        end

        def convert(content)
            content.gsub(/<th>/, '<th scope="col">')
        end

    end

end
